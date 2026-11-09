import React from 'react';
import { Menu, ExternalLink, ChevronRight } from 'lucide-react';

export default function Header({ onOpenMobile, activeGroupTitle, activeItemTitle }) {
  return (
    <header className="sticky top-0 z-30 h-14 bg-white/95 backdrop-blur-md border-b border-slate-200 px-3.5 sm:px-6 flex items-center justify-between gap-2 text-xs">
      {/* Left: Mobile Menu Toggle & Title / Breadcrumbs */}
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
        <button
          type="button"
          onClick={onOpenMobile}
          className="p-2 -ml-1 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100 lg:hidden shrink-0 transition-colors"
          aria-label="Buka Menu Panduan"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Breadcrumbs for Tablet/Desktop */}
        <div className="hidden sm:flex items-center gap-1.5 text-slate-500 font-medium truncate min-w-0">
          <span className="text-slate-400">Panduan</span>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="text-slate-600 truncate">{activeGroupTitle}</span>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="font-bold text-slate-900 truncate">{activeItemTitle}</span>
        </div>

        {/* Clean Mobile Title (No Breadcrumb Clutter) */}
        <div className="sm:hidden flex items-center gap-1.5 min-w-0">
          <span className="font-bold text-slate-900 text-xs truncate max-w-[210px]">
            {activeItemTitle}
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <a
          href="http://localhost:8000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-[#DA2F1F] hover:bg-[#b82618] active:bg-[#991e12] text-white font-medium text-xs transition-colors shadow-2xs"
          title="Buka Aplikasi Rahman Printing POS"
        >
          <span className="hidden sm:inline">Buka Aplikasi</span>
          <span className="sm:hidden text-xs font-semibold">POS</span>
          <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </a>
      </div>
    </header>
  );
}
