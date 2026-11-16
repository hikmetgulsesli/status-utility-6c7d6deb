// Local storage repository for the status utility slice.
//
// PERSIST_STATUS_STORAGE:
//   kind        local_storage
//   entityRefs  [ENTITY_STATUS_RECORD]
//   durability  reload
//   key         setfarm.status_utility.status_storage.v1
//   rehydration initialization
//   statePaths  [{ stateRef: STATE_APPLICATION_STATUS, path: "/value" }]

import {
  STATUS_ENTITY_REF,
  STATUS_SESSION_MARKER_KEY,
  STATUS_STORAGE_KEY,
  isApplicationStatusValue,
  type ApplicationStatusValue,
  type StatusRecord,
} from './prod-status-utility.types';

function storage(): Storage | null {
  try {
    if (typeof window === 'undefined') return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

function sessionStorageRef(): Storage | null {
  try {
    if (typeof window === 'undefined') return null;
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Reads the persisted status record, returning null when nothing valid is stored. */
export function readStatusRecord(): StatusRecord | null {
  const store = storage();
  if (!store) return null;
  let raw: string | null = null;
  try {
    raw = store.getItem(STATUS_STORAGE_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { value?: unknown } | null;
    const value = parsed ? parsed.value : undefined;
    if (!isApplicationStatusValue(value)) return null;
    return { entityRef: STATUS_ENTITY_REF, fields: { value } };
  } catch {
    return null;
  }
}

export function readPersistedStatusValue(): ApplicationStatusValue | null {
  const record = readStatusRecord();
  return record ? record.fields.value : null;
}

/** Writes the persisted status record (state path /value). */
export function writeStatusRecord(value: ApplicationStatusValue): void {
  const store = storage();
  if (!store) return;
  const record: StatusRecord = { entityRef: STATUS_ENTITY_REF, fields: { value } };
  try {
    store.setItem(STATUS_STORAGE_KEY, JSON.stringify({ value: record.fields.value }));
  } catch {
    /* storage unavailable: the in-memory state still holds the authoritative value */
  }
}

export function clearStatusRecord(): void {
  const store = storage();
  if (!store) return;
  try {
    store.removeItem(STATUS_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/**
 * True when this browser tab has not been initialized for the current flow yet.
 * The session marker is kept in session storage so that a page reload keeps the
 * persisted record (durability: reload) while a fresh flow start resets it.
 */
export function isFreshSession(): boolean {
  const session = sessionStorageRef();
  if (!session) return false;
  try {
    return session.getItem(STATUS_SESSION_MARKER_KEY) === null;
  } catch {
    return false;
  }
}

export function markSessionInitialized(): void {
  const session = sessionStorageRef();
  if (!session) return;
  try {
    session.setItem(STATUS_SESSION_MARKER_KEY, 'initialized');
  } catch {
    /* ignore */
  }
}
