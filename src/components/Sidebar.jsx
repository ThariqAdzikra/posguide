import React, { useState } from 'react';
import {
  Store,
  Layers,
  TrendingUp,
  Search,
  ExternalLink,
  Keyboard,
  HelpCircle,
  ChevronRight,
  Printer,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function Sidebar({
  roles,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange,
  isMobileOpen,
  onCloseMobile
}) {
  const roleIcons = {
    kasir: Store,
    operator: Layers,
    owner: TrendingUp,
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-white border-r border-slate-200/90 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Header: Brand */}
        <div className="h-16 px-5 border-b border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DA2F1F] flex items-center justify-center text-white font-black text-sm shadow-xs">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-sm tracking-tight">
                  Rahman Printing
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  Guide
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Buku Panduan Sistem POS & SPK</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3.5 border-b border-slate-100 bg-slate-50/50">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari fitur, spanduk, struk..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white rounded-lg border border-slate-200 focus:outline-none focus:border-[#DA2F1F] focus:ring-1 focus:ring-[#DA2F1F] text-slate-800 placeholder-slate-400 transition-colors"
            />
          </div>
        </div>

        {/* Scrollable Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-6 text-xs">
          {roles.map((role) => {
            const Icon = roleIcons[role.id] || Store;
            const filteredSteps = role.steps.filter((s) =>
              searchQuery
                ? s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  s.description.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            );

            if (searchQuery && filteredSteps.length === 0) return null;

            return (
              <div key={role.id} className="space-y-1.5">
                {/* Role Group Title */}
                <div className="flex items-center gap-2 px-2.5 py-1 text-slate-400 uppercase tracking-wider font-bold text-[10.5px]">
                  <Icon className="w-3.5 h-3.5 text-slate-500" />
                  <span>{role.label}</span>
                </div>

                {/* Steps List */}
                <div className="space-y-0.5 pl-2 border-l border-slate-100 ml-3">
                  {filteredSteps.map((step) => {
                    const isActive = activeSection === step.id;
                    return (
                      <button
                        key={step.id}
                        onClick={() => {
                          onNavigate(step.id);
                          onCloseMobile();
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between group transition-colors ${
                          isActive
                            ? 'bg-rose-50 text-[#DA2F1F] font-bold'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                        }`}
                      >
                        <span className="truncate pr-2">{step.title}</span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                            isActive
                              ? 'bg-rose-200/80 text-[#DA2F1F]'
                              : 'text-slate-400 group-hover:text-slate-600'
                          }`}
                        >
                          {step.number}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Reference & Utilities Section */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 px-2.5 py-1 text-slate-400 uppercase tracking-wider font-bold text-[10.5px]">
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span>Referensi Sistem</span>
            </div>
            <div className="space-y-0.5 pl-2 border-l border-slate-100 ml-3">
              <button
                onClick={() => {
                  onNavigate('keyboard-shortcuts');
                  onCloseMobile();
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                  activeSection === 'keyboard-shortcuts'
                    ? 'bg-rose-50 text-[#DA2F1F] font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                }`}
              >
                <Keyboard className="w-3.5 h-3.5 shrink-0" />
                <span>Shortcut Keyboard Kasir</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('faq-troubleshooting');
                  onCloseMobile();
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                  activeSection === 'faq-troubleshooting'
                    ? 'bg-rose-50 text-[#DA2F1F] font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                }`}
              >
                <Printer className="w-3.5 h-3.5 shrink-0" />
                <span>Troubleshooting Thermal</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Footer in Sidebar */}
        <div className="p-3.5 border-t border-slate-100 bg-slate-50/60 space-y-2.5 shrink-0">
          <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Sistem POS v2.4</span>
            </span>
            <span className="font-mono text-slate-400">Port 8000</span>
          </div>

          <a
            href="http://localhost:8000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-[#DA2F1F] hover:bg-[#b82618] text-white font-semibold text-xs transition-colors shadow-2xs"
          >
            <span>Buka Aplikasi POS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>
    </>
  );
}
