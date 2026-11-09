import React from 'react';
import { Search, ExternalLink } from 'lucide-react';

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
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Root */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 sm:w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-150 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-12 px-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-xs bg-[#DA2F1F] flex items-center justify-center text-white font-black text-xs">
              R
            </div>
            <span className="font-bold text-slate-900 text-xs">Rahman Printing POS</span>
            <span className="text-[10px] font-mono text-slate-400 border border-slate-200 px-1 py-0.2 rounded-xs">
              Guide
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-2.5 border-b border-slate-200 bg-slate-50/50">
          <div className="relative">
            <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari fitur..."
              className="w-full pl-7 pr-2.5 py-1 text-xs bg-white rounded-xs border border-slate-300 focus:outline-none focus:border-[#DA2F1F] text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 overflow-y-auto p-2.5 space-y-3.5 text-xs">
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
              <div key={group.groupId} className="space-y-0.5">
                <div className="px-2 py-0.5 text-slate-400 uppercase tracking-wider font-bold text-[9.5px]">
                  {group.groupTitle}
                </div>

                <div className="space-y-0.5 border-l border-slate-200 ml-1.5 pl-1.5">
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
                        className={`w-full text-left px-2 py-1 rounded-xs flex items-center justify-between text-xs transition-colors ${
                          isActive
                            ? 'bg-slate-100 text-[#DA2F1F] font-semibold border-l-2 border-[#DA2F1F] -ml-[7px] pl-2.5'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
          <div className="space-y-0.5 pt-1.5 border-t border-slate-200">
            <div className="px-2 py-0.5 text-slate-400 uppercase tracking-wider font-bold text-[9.5px]">
              Lampiran
            </div>
            <div className="space-y-0.5 border-l border-slate-200 ml-1.5 pl-1.5">
              <button
                type="button"
                onClick={() => {
                  onNavigate('keyboard-shortcuts');
                  onCloseMobile();
                }}
                className={`w-full text-left px-2 py-1 rounded-xs flex items-center justify-between text-xs transition-colors ${
                  activeSection === 'keyboard-shortcuts'
                    ? 'bg-slate-100 text-[#DA2F1F] font-semibold border-l-2 border-[#DA2F1F] -ml-[7px] pl-2.5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
                className={`w-full text-left px-2 py-1 rounded-xs flex items-center justify-between text-xs transition-colors ${
                  activeSection === 'faq-troubleshooting'
                    ? 'bg-slate-100 text-[#DA2F1F] font-semibold border-l-2 border-[#DA2F1F] -ml-[7px] pl-2.5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Troubleshooting Printer</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-2.5 border-t border-slate-200 bg-slate-50 shrink-0 text-xs">
          <a
            href="http://localhost:8000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-xs bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors"
          >
            <span>Buka Web POS</span>
            <ExternalLink className="w-3 h-3 text-slate-300" />
          </a>
        </div>
      </aside>
    </>
  );
}
