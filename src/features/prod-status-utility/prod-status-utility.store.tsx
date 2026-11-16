// Application state store for the status utility slice.
//
// STATE_APPLICATION_STATUS
//   kind         application
//   initialValue { value: "idle" }
//   invariants   value is always "idle" or "refreshed"
//                the refreshed status persists across page reloads (local storage)
//
// The store is a small external store so that the browser evidence bridge can
// read the very same application state that the UI renders.

import { useSyncExternalStore } from 'react';

import {
  clearStatusRecord,
  isFreshSession,
  markSessionInitialized,
  readPersistedStatusValue,
  writeStatusRecord,
} from './prod-status-utility.repo';
import type { ApplicationStatusValue } from './prod-status-utility.types';

const listeners = new Set<() => void>();

let currentStatus: ApplicationStatusValue = 'idle';
let initialized = false;

function initialize(): void {
  if (initialized) return;
  initialized = true;
  try {
    if (isFreshSession()) {
      // A fresh flow start begins from the declared initial value.
      markSessionInitialized();
      clearStatusRecord();
      currentStatus = 'idle';
      return;
    }
    currentStatus = readPersistedStatusValue() ?? 'idle';
  } catch {
    currentStatus = 'idle';
  }
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): ApplicationStatusValue {
  initialize();
  return currentStatus;
}

/** Sets the application status and persists it (durability: reload). */
export function setApplicationStatus(value: ApplicationStatusValue): void {
  initialize();
  currentStatus = value;
  writeStatusRecord(value);
  listeners.forEach((listener) => listener());
}

/** Reads the current application status. */
export function getApplicationStatus(): ApplicationStatusValue {
  return getSnapshot();
}

/** React binding for the application status. */
export function useApplicationStatus(): ApplicationStatusValue {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
