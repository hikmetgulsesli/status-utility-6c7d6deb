// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div className="flex-1 flex flex-col justify-between" data-surface-id="SURF_STATUS_PAGE" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_STATUS_ROUTE_VIEW">
          {/* Non-interactive Decorative Top App Bar */}
          <header className="border-b border-slate-800 bg-slate-950/60 backdrop-blur px-8 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
                  SU
                </div>
                <div>
                  <h1 className="text-sm font-semibold tracking-wide text-slate-100">Status Utility</h1>
                  <p className="text-xs text-slate-400">System Monitoring &amp; Telemetry</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                <span>Route: /status</span>
              </div>
            </div>
          </header>
      
          {/* Main Content Area */}
          <main className="max-w-5xl mx-auto w-full px-8 py-12 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Overview Card (Decorative Context) */}
              <div className="lg:col-span-5 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 shadow-xl space-y-5">
                <div className="space-y-1">
                  <h2 className="text-base font-semibold text-white">Diagnostics Overview</h2>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Real-time synchronization and status monitoring instance for system diagnostics.
                  </p>
                </div>
      
                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Environment</span>
                    <span className="text-xs font-mono text-slate-200 font-medium">Production Node</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Heartbeat Interval</span>
                    <span className="text-xs font-mono text-slate-200 font-medium">60s</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Persisted Storage</span>
                    <span className="text-xs font-mono text-emerald-400 font-medium">Enabled (localStorage)</span>
                  </div>
                </div>
      
                {/* The declared physical button placement */}
                <div className="pt-4 border-t border-slate-700/50 flex flex-col space-y-2">
                  <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON_PLACEMENT" className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 border border-indigo-500 transition-colors cursor-pointer" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_BUTTON" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                    Refresh Status
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    Triggers status update cycle and cache refresh.
                  </p>
                </div>
              </div>
      
              {/* Right Surface: SURF_STATUS_PANEL */}
              <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700 rounded-2xl p-8 shadow-2xl space-y-6" data-surface-id="SURF_STATUS_PANEL" data-setfarm-element-ref="E000003" data-observable-refs="OBS_REFRESH_STATUS_STATUS_VALUE">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Status Panel</h2>
                    <p className="text-xs text-slate-400">Active status evaluation report</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    SURF_STATUS_PANEL
                  </span>
                </div>
      
                {/* Status Value / Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Current Status</span>
                    <div className="text-xl font-mono font-semibold text-slate-100 flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                      <span>idle</span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Sync State</span>
                    <div className="text-xl font-mono font-semibold text-slate-200">
                      Synchronized
                    </div>
                  </div>
                </div>
      
                {/* Observables & Notice Area */}
                <div className="p-4 bg-slate-900/50 border border-slate-800/90 rounded-xl space-y-2">
                  <div className="text-xs font-semibold text-slate-300">System Notification</div>
                  <div className="text-sm text-slate-400">
                    Status monitor is standing by in an idle state.
                  </div>
                  {/* Accessible status announcement element representing OBS_REFRESH_STATUS_STATUS_TEXT */}
                  <div className="text-xs text-indigo-400 font-medium pt-1" data-setfarm-element-ref="E000004" role="status" aria-label="Status refreshed" data-observable-refs="OBS_REFRESH_STATUS_STATUS_TEXT">
                    Status refreshed
                  </div>
                </div>
      
                {/* Status Inspection Details */}
                <div className="space-y-3 pt-2 text-xs text-slate-400">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span>Observable Ref</span>
                    <span className="font-mono text-slate-300">OBS_REFRESH_STATUS_STATUS_VALUE</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span>Assigned Route Target</span>
                    <span className="font-mono text-slate-300">/status</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Expected State Cycle</span>
                    <span className="font-mono text-slate-300">idle → refreshed</span>
                  </div>
                </div>
              </div>
      
            </div>
          </main>
      
          {/* Non-interactive Decorative Footer */}
          <footer className="border-t border-slate-800/80 bg-slate-950/40 px-8 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-slate-400">
              <p>© Status Utility – All systems operational.</p>
              <p className="font-mono">Route: ROUTE_STATUS_ROUTE</p>
            </div>
          </footer>
        </div>
    </>
  );
}
