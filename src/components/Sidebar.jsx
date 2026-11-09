import React from 'react';
import {
  Search,
  ExternalLink,
  Shield,
  LayoutDashboard,
  ShoppingCart,
  Printer,
  FileText,
  Package,
  Users,
  Settings,
  Keyboard,
  HelpCircle,
  X
} from 'lucide-react';

const groupIcons = {
  'auth-account': Shield,
  'dashboard-overview': LayoutDashboard,
  'kasir-pos': ShoppingCart,
  'spk-produksi': Printer,
  'laporan-keuangan': FileText,
  'stok-crm': Package,
  'admin-konfigurasi': Settings,
};

export default function Sidebar({
  sections,
  activeSection,
  onSelectSection,
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
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Element */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-white border-r border-slate-200/90 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-14 px-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#DA2F1F] flex items-center justify-center text-white font-black text-sm shadow-xs">
              R
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 text-sm tracking-tight">Rahman Printing</span>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-1 py-0.2 rounded">
                  POS
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Buku Panduan & Dokumentasi</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-slate-200 bg-slate-50/70">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari fitur, SPK, struk, stok..."
              className="w-full pl-8 pr-7 py-1.5 text-xs bg-white rounded-md border border-slate-200 focus:outline-none focus:border-[#DA2F1F] focus:ring-1 focus:ring-[#DA2F1F] text-slate-900 placeholder-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5 text-xs">
          {sections.map((group) => {
            const Icon = groupIcons[group.groupId] || FileText;
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
                {/* Group Title with Icon */}
                <div className="flex items-center gap-1.5 px-2 py-1 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{group.groupTitle}</span>
                </div>

                {/* Items */}
                <div className="space-y-0.5 border-l border-slate-200 ml-2.5 pl-2">
                  {filteredItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          onSelectSection(item.id);
                          onCloseMobile();
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-rose-50 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-normal'
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
            <div className="px-2 py-1 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
              Lampiran & Bantuan
            </div>
            <div className="space-y-0.5 border-l border-slate-200 ml-2.5 pl-2">
              <button
                type="button"
                onClick={() => {
                  onSelectSection('keyboard-shortcuts');
                  onCloseMobile();
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center gap-2 ${
                  activeSection === 'keyboard-shortcuts'
                    ? 'bg-rose-50 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-normal'
                }`}
              >
                <Keyboard className="w-3.5 h-3.5 shrink-0" />
                <span>Shortcut Keyboard Kasir</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectSection('faq-troubleshooting');
                  onCloseMobile();
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center gap-2 ${
                  activeSection === 'faq-troubleshooting'
                    ? 'bg-rose-50 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-normal'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Troubleshooting Thermal</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs shrink-0">
          <div className="text-[11px] text-slate-500">
            <span>Server: </span>
            <span className="font-mono font-medium text-slate-700">localhost:8000</span>
          </div>
          <a
            href="http://localhost:8000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#DA2F1F] hover:bg-[#b82618] text-white font-medium text-xs transition-colors"
          >
            <span>Buka POS</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </aside>
    </>
  );
}
