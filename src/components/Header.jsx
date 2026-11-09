import React from 'react';
import { Menu, ExternalLink } from 'lucide-react';

export default function Header({ onOpenMobile, activeGroupTitle }) {
  return (
    <header className="sticky top-0 z-30 h-14 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between text-xs">
      {/* Left: Mobile Toggle & Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobile}
          className="p-1.5 -ml-1.5 rounded border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 lg:hidden"
          aria-label="Buka Menu"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 text-slate-500 font-medium">
          <span>Panduan Penggunaan</span>
          <span>/</span>
          <span className="font-bold text-slate-800">{activeGroupTitle}</span>
        </div>
      </div>

      {/* Right Action */}
      <div className="flex items-center gap-3">
        <a
          href="http://localhost:8000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 text-white hover:bg-slate-800 font-medium transition-colors"
        >
          <span>Buka Aplikasi POS</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>
    </header>
  );
}
