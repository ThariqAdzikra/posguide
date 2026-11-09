import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StepCard from './components/StepCard';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import FaqSection from './components/FaqSection';
import { guideSections, guideShortcuts, guideFaqs } from './data/guideContent';
import { ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('auth-login');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Find active group title
  let activeGroupTitle = 'Panduan Fitur';
  for (const group of guideSections) {
    if (group.items.some((item) => item.id === activeSection)) {
      activeGroupTitle = group.groupTitle;
      break;
    }
  }

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 40);
  };

  // Filter items
  const allGroups = guideSections.map((group) => {
    const items = group.items.filter((item) =>
      searchQuery
        ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.endpoint.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    );
    return { ...group, items };
  }).filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 antialiased font-['Inter',sans-serif]">
      {/* ── 1. SIDEBAR NAVIGASI ── */}
      <Sidebar
        sections={guideSections}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isMobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* ── 2. DOKUMENTASI UTAMA ── */}
      <div className="lg:pl-64 sm:lg:pl-72 flex flex-col min-h-screen">
        <Header
          onOpenMobile={() => setMobileSidebarOpen(true)}
          activeGroupTitle={activeGroupTitle}
        />

        <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 py-5 space-y-6">
          {/* Compact Document Header */}
          <div className="bg-white rounded-xs border border-slate-200 p-4 space-y-1">
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Panduan Operasional Rahman Printing POS
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              Panduan lengkap alur kerja sistem: Login, Kasir POS, Spanduk meteran, SPK produksi, Stok bahan, CRM pelanggan, Laporan omzet, serta pengaturan toko.
            </p>
          </div>

          {/* Grouped Feature Sections */}
          {allGroups.map((group) => (
            <section key={group.groupId} className="space-y-3">
              <div className="pb-1 border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  {group.groupTitle}
                </h2>
                <span className="text-[11px] font-mono text-slate-400">
                  {group.items.length} Modul
                </span>
              </div>

              <div className="space-y-3.5">
                {group.items.map((item) => (
                  <StepCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}

          {/* Shortcut Keyboard Kasir */}
          <KeyboardShortcuts shortcuts={guideShortcuts} />

          {/* FAQ & Troubleshooting */}
          <FaqSection faqs={guideFaqs} />

          {/* Simple Compact Footer */}
          <footer className="pt-4 pb-8 border-t border-slate-200 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              &copy; 2026 Rahman Printing POS — Dokumentasi Resmi
            </div>
            <div className="flex items-center gap-3">
              <a
                href="http://localhost:8000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-800 transition-colors inline-flex items-center gap-1 font-medium"
              >
                <span>Aplikasi POS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#faq-troubleshooting"
                onClick={() => handleNavigate('faq-troubleshooting')}
                className="hover:text-slate-800 transition-colors"
              >
                Bantuan
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
