// ACT_REFRESH_STATUS — user triggered refresh of the application status.
//
// Contract:
//   trigger          user
//   input            none
//   preconditions    none
//   stateDeltas      STATE_APPLICATION_STATUS /value = "refreshed"
//   navigation       stay (the utility stays on the /status route)
//   persistence      PERSIST_STATUS_STORAGE write ENTITY_STATUS_RECORD /value

import { setApplicationStatus } from '../prod-status-utility/prod-status-utility.store';

export const REFRESH_STATUS_ACTION_REF = 'ACT_REFRESH_STATUS';
export const REFRESH_STATUS_LOCAL_ID = 'refresh-status-1';
export const REFRESH_STATUS_VALUE = 'refreshed';

/** Applies the action: sets STATE_APPLICATION_STATUS /value and persists it. */
export function refreshStatus(): void {
  setApplicationStatus(REFRESH_STATUS_VALUE);
}

/** True when the given invocation id addresses this action. */
export function isRefreshStatusInvocation(invocationId: string): boolean {
  return invocationId === REFRESH_STATUS_ACTION_REF || invocationId === REFRESH_STATUS_LOCAL_ID;
}
