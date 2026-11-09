import React from 'react';
import { Search, ExternalLink, BookOpen, ChevronRight } from 'lucide-react';

export default function Sidebar({
  sections,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange,
  isMobileOpen,
  onCloseMobile
}) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Root */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-5 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#DA2F1F] flex items-center justify-center text-white font-black text-sm">
              R
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 text-sm">Rahman Printing</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-300 px-1 py-0.2 rounded">
                  DOCS
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Panduan Lengkap Semua Fitur</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-slate-200 bg-slate-50">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari fitur, spanduk, struk, profil..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white rounded border border-slate-300 focus:outline-none focus:border-[#DA2F1F] text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Scrollable Navigation Tree */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-5 text-xs">
          {sections.map((group) => {
            const filteredItems = group.items.filter((item) =>
              searchQuery
                ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.endpoint.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            );

            if (searchQuery && filteredItems.length === 0) return null;

            return (
              <div key={group.groupId} className="space-y-1">
                {/* Clean Group Title */}
                <div className="px-2 py-1 text-slate-500 uppercase tracking-wider font-bold text-[10px]">
                  {group.groupTitle}
                </div>

                {/* Items List */}
                <div className="space-y-0.5 border-l border-slate-200 ml-2 pl-2">
                  {filteredItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          onNavigate(item.id);
                          onCloseMobile();
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between text-xs transition-colors ${
                          isActive
                            ? 'bg-slate-100 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-normal'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Reference Links */}
          <div className="space-y-1 pt-2 border-t border-slate-200">
            <div className="px-2 py-1 text-slate-500 uppercase tracking-wider font-bold text-[10px]">
              Lampiran & Bantuan
            </div>
            <div className="space-y-0.5 border-l border-slate-200 ml-2 pl-2">
              <button
                type="button"
                onClick={() => {
                  onNavigate('keyboard-shortcuts');
                  onCloseMobile();
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between text-xs transition-colors ${
                  activeSection === 'keyboard-shortcuts'
                    ? 'bg-slate-100 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-normal'
                }`}
              >
                <span>Shortcut Keyboard Kasir</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onNavigate('faq-troubleshooting');
                  onCloseMobile();
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between text-xs transition-colors ${
                  activeSection === 'faq-troubleshooting'
                    ? 'bg-slate-100 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-normal'
                }`}
              >
                <span>Troubleshooting Thermal</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Footer in Sidebar */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 space-y-2 shrink-0 text-xs">
          <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
            <span>Sistem Operasional POS</span>
            <span className="font-mono">Port 8000</span>
          </div>

          <a
            href="http://localhost:8000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded bg-[#DA2F1F] hover:bg-[#b82618] text-white font-semibold text-xs transition-colors"
          >
            <span>Buka Web POS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>
    </>
  );
}
