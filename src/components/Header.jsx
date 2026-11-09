import React from 'react';
import { Menu, ExternalLink } from 'lucide-react';

export default function Header({ onOpenMobile, activeGroupTitle }) {
  return (
    <header className="sticky top-0 z-30 h-12 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between text-xs">
      {/* Left: Mobile Toggle & Breadcrumb */}
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={onOpenMobile}
          className="p-1 -ml-1 rounded-xs border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 lg:hidden"
          aria-label="Buka Menu"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 text-slate-500 font-normal">
          <span>Panduan</span>
          <span>/</span>
          <span className="font-semibold text-slate-900">{activeGroupTitle}</span>
        </div>
      </div>

      {/* Right Action */}
      <div className="flex items-center gap-2">
        <a
          href="http://localhost:8000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xs bg-[#DA2F1F] hover:bg-[#b82618] text-white font-medium text-xs transition-colors"
        >
          <span>Demo POS</span>
          <ExternalLink className="w-3 h-3 text-white/80" />
        </a>
      </div>
    </header>
  );
}
