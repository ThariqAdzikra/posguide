import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StepCard from './components/StepCard';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import FaqSection from './components/FaqSection';
import { guideRoles, faqList } from './data/guideContent';
import { ExternalLink, ArrowRight, ShieldCheck, Printer } from 'lucide-react';

export default function App() {
  const [activeRole, setActiveRole] = useState('kasir');
  const [activeSection, setActiveSection] = useState('kasir-katalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const currentRole = guideRoles.find((r) => r.id === activeRole) || guideRoles[0];

  // Navigate to an ID
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);

    // If section belongs to another role, switch active role
    for (const r of guideRoles) {
      if (r.steps.some((s) => s.id === sectionId)) {
        setActiveRole(r.id);
        break;
      }
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleSelectRole = (roleId) => {
    setActiveRole(roleId);
    const targetRole = guideRoles.find((r) => r.id === roleId);
    if (targetRole && targetRole.steps.length > 0) {
      handleNavigate(targetRole.steps[0].id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-['Inter',sans-serif]">
      {/* ── 1. PERSISTENT DOCUMENTATION SIDEBAR ── */}
      <Sidebar
        roles={guideRoles}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isMobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* ── 2. MAIN DOCUMENTATION AREA (OFFSET BY SIDEBAR) ── */}
      <div className="lg:pl-72 sm:lg:pl-80 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Header
          onOpenMobile={() => setMobileSidebarOpen(true)}
          activeRole={activeRole}
          roles={guideRoles}
          onSelectRole={handleSelectRole}
        />

        {/* Content Body */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-8 py-8 space-y-8">
          {/* Active Module Overview Banner */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-bold text-[#DA2F1F] uppercase tracking-wider bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                {currentRole.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentRole.steps.length} Modul Terverifikasi
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {currentRole.label}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentRole.tagline}
            </p>
          </div>

          {/* Steps Articles */}
          <div className="space-y-6">
            {currentRole.steps.map((step, idx) => (
              <StepCard key={step.id} step={step} index={idx} />
            ))}
          </div>

          {/* Keyboard Shortcuts Component */}
          {currentRole.shortcuts && currentRole.shortcuts.length > 0 && (
            <KeyboardShortcuts shortcuts={currentRole.shortcuts} />
          )}

          {/* Thermal Printer Troubleshooting & FAQ */}
          <FaqSection faqs={faqList} />

          {/* Simple Documentation Footer */}
          <footer className="pt-6 pb-12 border-t border-slate-200 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              &copy; 2026 Rahman Printing POS — Dokumentasi Resmi Aplikasi
            </div>
            <div className="flex items-center gap-4">
              <a
                href="http://localhost:8000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-700 transition-colors inline-flex items-center gap-1"
              >
                <span>Buka Aplikasi</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#faq-troubleshooting"
                onClick={() => handleNavigate('faq-troubleshooting')}
                className="hover:text-slate-700 transition-colors"
              >
                Pusat Bantuan
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
