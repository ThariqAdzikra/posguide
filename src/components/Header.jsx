import React from 'react';
import { Menu, ExternalLink, ChevronRight } from 'lucide-react';

export default function Header({ onOpenMobile, activeGroupTitle, activeItemTitle }) {
  return (
    <header className="sticky top-0 z-30 h-14 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between text-xs">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenMobile}
          className="p-1.5 -ml-1.5 rounded-md border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 lg:hidden"
          aria-label="Buka Menu Sidebar"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 text-slate-500 font-medium truncate">
          <span className="hidden sm:inline">Panduan</span>
          <ChevronRight className="w-3 h-3 text-slate-400 hidden sm:inline" />
          <span className="text-slate-600">{activeGroupTitle}</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-slate-900 truncate">{activeItemTitle}</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <a
          href="http://localhost:8000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#DA2F1F] hover:bg-[#b82618] text-white font-medium text-xs transition-colors shadow-2xs"
        >
          <span>Buka Aplikasi</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
