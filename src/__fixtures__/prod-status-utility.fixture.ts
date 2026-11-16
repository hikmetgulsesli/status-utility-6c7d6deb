// Fixture for the status utility slice (US-001).
//
// Provides the declared initial application status together with the storage
// identity that the persistence policy binds.

import {
  STATUS_ENTITY_REF,
  STATUS_STATE_REF,
  STATUS_STORAGE_KEY,
  type ApplicationStatus,
} from '../features/prod-status-utility/prod-status-utility.types';

export const statusUtilityFixture = {
  entityRef: STATUS_ENTITY_REF,
  stateRef: STATUS_STATE_REF,
  storageKey: STATUS_STORAGE_KEY,
  initialStatus: { value: 'idle' } as ApplicationStatus,
  refreshedStatus: { value: 'refreshed' } as ApplicationStatus,
};

export default statusUtilityFixture;
