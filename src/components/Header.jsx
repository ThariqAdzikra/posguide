import React from 'react';
import { Menu, ExternalLink, ChevronRight, Terminal } from 'lucide-react';

export default function Header({ onOpenMobile, activeRole, roles, onSelectRole }) {
  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 flex items-center justify-between">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="p-2 -ml-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden"
          aria-label="Buka Menu Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-medium text-slate-400">Dokumentasi</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="font-semibold text-slate-800">{currentRole.label}</span>
        </div>
      </div>

      {/* Right: Role Switcher & Live Link */}
      <div className="flex items-center gap-3">
        {/* Quick Role Switcher Buttons */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/70 text-xs">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => onSelectRole(r.id)}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeRole === r.id
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {r.label.split(' ')[0]}
            </button>
          ))}
        </div>

        <a
          href="http://localhost:8000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-colors"
        >
          <span>Demo POS</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
        </a>
      </div>
    </header>
  );
}
