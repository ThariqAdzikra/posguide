import React, { useState, useEffect } from 'react';
import {
  Search,
  Shield,
  LayoutDashboard,
  ShoppingCart,
  Printer,
  FileText,
  Package,
  Settings,
  Keyboard,
  HelpCircle,
  ChevronDown,
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
  // Find which group contains the active item
  const findActiveGroupId = () => {
    for (const group of sections) {
      if (group.items.some((it) => it.id === activeSection)) {
        return group.groupId;
      }
    }
    return sections[0]?.groupId;
  };

  const [openGroups, setOpenGroups] = useState({ [findActiveGroupId()]: true });

  // When active section changes, ensure its parent group is opened
  useEffect(() => {
    const parentGroupId = findActiveGroupId();
    if (parentGroupId) {
      setOpenGroups((prev) => ({ ...prev, [parentGroupId]: true }));
    }
  }, [activeSection]);

  const toggleGroup = (groupId) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Root */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-14 px-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-2.5">
            <img
              src="/img/logoutama.png"
              alt="Rahman Printing Logo"
              className="w-8 h-8 object-contain shrink-0"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 text-xs">Rahman Printing</span>
                <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-1 py-0.2 rounded">
                  POS
                </span>
              </div>
              <p className="text-[10.5px] text-slate-400">Panduan Penggunaan</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-2.5 border-b border-slate-200 bg-slate-50/70">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari fitur..."
              className="w-full pl-8 pr-6 py-1.5 text-xs bg-white rounded-md border border-slate-200 focus:outline-none focus:border-[#DA2F1F] focus:ring-1 focus:ring-[#DA2F1F] text-slate-900 placeholder-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Navigation - Invisible Scrollbar */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-3 space-y-1 text-xs no-scrollbar">
          {sections.map((group) => {
            const Icon = groupIcons[group.groupId] || FileText;
            const isGroupOpen = searchQuery ? true : Boolean(openGroups[group.groupId]);

            const filteredItems = group.items.filter((item) =>
              searchQuery
                ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (item.shortTitle && item.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
                  item.endpoint.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            );

            if (searchQuery && filteredItems.length === 0) return null;

            return (
              <div key={group.groupId} className="space-y-0.5">
                {/* Collapsible Group Button Header */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group.groupId)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100/70 transition-colors font-medium text-xs text-left"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-semibold text-slate-700 truncate">{group.groupTitle}</span>
                  </div>
                  {!searchQuery && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-150 ${
                        isGroupOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Sub-items (Only when group is open or when searching) */}
                {isGroupOpen && (
                  <div className="space-y-0.5 border-l border-slate-200 ml-3.5 pl-2 py-0.5">
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
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-normal'
                          }`}
                        >
                          <span className="truncate">{item.shortTitle || item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Reference Links */}
          <div className="space-y-0.5 pt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                onSelectSection('keyboard-shortcuts');
                onCloseMobile();
              }}
              className={`w-full text-left px-2 py-1.5 rounded-md text-xs transition-colors flex items-center gap-2 ${
                activeSection === 'keyboard-shortcuts'
                  ? 'bg-rose-50 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-normal'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Shortcut Keyboard Kasir</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectSection('faq-troubleshooting');
                onCloseMobile();
              }}
              className={`w-full text-left px-2 py-1.5 rounded-md text-xs transition-colors flex items-center gap-2 ${
                activeSection === 'faq-troubleshooting'
                  ? 'bg-rose-50 text-[#DA2F1F] font-bold border-l-2 border-[#DA2F1F] -ml-[9px] pl-3'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-normal'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Troubleshooting Printer</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
