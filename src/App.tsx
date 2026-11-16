import { useEffect } from 'react';

import { StatusPageStatusUtility } from './screens/StatusPageStatusUtility';
import { refreshStatus } from './features/surf-status-page/act_refresh_status';
import { useApplicationStatus } from './features/prod-status-utility/prod-status-utility.store';
import { installSetfarmTestBridge } from './test/bridge';

const STATUS_ROUTE = '/status';

installSetfarmTestBridge();

export default function App() {
  const status = useApplicationStatus();

  useEffect(() => {
    installSetfarmTestBridge();
    if (window.location.pathname !== STATUS_ROUTE) {
      window.history.replaceState(null, '', STATUS_ROUTE);
    }
  }, []);

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-950 text-slate-100"
    >
      <StatusPageStatusUtility
        status={status}
        route={STATUS_ROUTE}
        actions={{ 'refresh-status-1': refreshStatus }}
      />
    </div>
  );
}
