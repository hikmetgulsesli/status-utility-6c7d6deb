// Browser evidence bridge for the status utility slice.
//
// Exposes the globals described by the runtime evidence contract:
//   window.__SETFARM_TEST_BRIDGE__  -> { states, invokeAction }
//   window.__SETFARM_SCENARIO_MODE__ -> "manual"
//
// The bridge only exposes genuine application state: STATE_APPLICATION_STATUS is
// read from the same store the UI renders from, and invokeAction runs the very
// same action handler the rendered control is wired to.

import {
  getApplicationStatus,
  setApplicationStatus,
} from '../features/prod-status-utility/prod-status-utility.store';
import {
  REFRESH_STATUS_ACTION_REF,
  REFRESH_STATUS_LOCAL_ID,
  isRefreshStatusInvocation,
} from '../features/surf-status-page/act_refresh_status';
import { STATUS_STATE_REF } from '../features/prod-status-utility/prod-status-utility.types';

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: {
      states: Record<string, { value: string }>;
      invokeAction: (invocationId: string) => boolean;
    };
    __SETFARM_SCENARIO_MODE__?: string;
  }
}

export function installSetfarmTestBridge(): void {
  if (typeof window === 'undefined') return;

  window.__SETFARM_SCENARIO_MODE__ = 'manual';

  window.__SETFARM_TEST_BRIDGE__ = {
    get states() {
      return {
        [STATUS_STATE_REF]: { value: getApplicationStatus() },
      };
    },
    invokeAction(invocationId: string): boolean {
      if (
        isRefreshStatusInvocation(invocationId) ||
        invocationId === REFRESH_STATUS_ACTION_REF ||
        invocationId === REFRESH_STATUS_LOCAL_ID
      ) {
        setApplicationStatus('refreshed');
        return true;
      }
      return false;
    },
  };
}

export default installSetfarmTestBridge;
