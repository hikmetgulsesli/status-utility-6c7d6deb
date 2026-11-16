// Types for the status utility domain slice (US-001 / ACT_REFRESH_STATUS).
//
// These types mirror the closed story contract:
//   entity   ENTITY_STATUS_RECORD
//   state    STATE_APPLICATION_STATUS (value: "idle" | "refreshed")
//   policy   PERSIST_STATUS_STORAGE (local_storage, durability: reload)

export const STATUS_ENTITY_REF = 'ENTITY_STATUS_RECORD';
export const STATUS_STATE_REF = 'STATE_APPLICATION_STATUS';
export const STATUS_FIELD_VALUE = 'FIELD_STATUS_RECORD_VALUE';
export const STATUS_STORAGE_KEY = 'setfarm.status_utility.status_storage.v1';
export const STATUS_SESSION_MARKER_KEY = 'setfarm.status_utility.session.v1';

export type ApplicationStatusValue = 'idle' | 'refreshed';

export interface ApplicationStatus {
  value: ApplicationStatusValue;
}

export interface StatusRecord {
  entityRef: typeof STATUS_ENTITY_REF;
  fields: {
    value: ApplicationStatusValue;
  };
}

export function isApplicationStatusValue(candidate: unknown): candidate is ApplicationStatusValue {
  return candidate === 'idle' || candidate === 'refreshed';
}
