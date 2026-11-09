import React from 'react';
import { Store, Layers, TrendingUp, ChevronRight } from 'lucide-react';

const roleIcons = {
  kasir: Store,
  operator: Layers,
  owner: TrendingUp,
};

export default function RoleTabs({ roles, activeRole, onSelectRole }) {
  const currentRoleObj = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
      <div className="bg-white rounded-2xl p-2 sm:p-3 border border-slate-200/90 shadow-sm">
        {/* Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {roles.map((role) => {
            const Icon = roleIcons[role.id] || Store;
            const isActive = activeRole === role.id;

            return (
              <button
                key={role.id}
                onClick={() => onSelectRole(role.id)}
                className={`flex items-center gap-3.5 p-3.5 rounded-xl text-left transition-all relative ${
                  isActive
                    ? 'bg-[#DA2F1F] text-white shadow-md shadow-red-500/20'
                    : 'bg-slate-50/70 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-transparent'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-700 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                      {role.badge}
                    </span>
                    {isActive && <ChevronRight className="w-4 h-4 text-white/80" />}
                  </div>
                  <h3 className="font-bold text-sm truncate">{role.label}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Current Active Role Summary Banner */}
        <div className="mt-4 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 font-semibold uppercase tracking-wide">
              Fokus
            </span>
            <span className="text-slate-700 font-medium">
              {currentRoleObj.tagline}
            </span>
          </div>
          <span className="text-slate-500 font-medium shrink-0">
            {currentRoleObj.steps.length} Langkah Panduan Lengkap
          </span>
        </div>
      </div>
    </div>
  );
}
