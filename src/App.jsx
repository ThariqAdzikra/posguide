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

  // Find active group title for the header
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
    }, 50);
  };

  // Flatten all items for rendering or search
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
    <div className="min-h-screen bg-slate-100/60 text-slate-800 antialiased font-['Inter',sans-serif]">
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
      <div className="lg:pl-72 sm:lg:pl-80 flex flex-col min-h-screen">
        {/* Header Bar */}
        <Header
          onOpenMobile={() => setMobileSidebarOpen(true)}
          activeGroupTitle={activeGroupTitle}
        />

        {/* Content Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-8 py-8 space-y-10">
          {/* Main Title Banner (Simple Document Header) */}
          <div className="bg-white rounded border border-slate-200 p-6 space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Dokumentasi & Panduan Operasional Rahman Printing POS
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Panduan teknis dan alur operasional mencakup autentikasi akun, kasir kasir POS, kalkulasi spanduk meteran, surat perintah kerja (SPK), manajemen stok bahan, CRM pelanggan, pelunasan nota, hingga pengaturan toko.
            </p>
          </div>

          {/* Grouped Feature Sections */}
          {allGroups.map((group) => (
            <section key={group.groupId} className="space-y-5">
              <div className="pb-2 border-b border-slate-300 flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  {group.groupTitle}
                </h2>
                <span className="text-xs font-mono text-slate-400">
                  {group.items.length} Modul
                </span>
              </div>

              <div className="space-y-6">
                {group.items.map((item) => (
                  <StepCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}

          {/* Shortcut Keyboard Kasir */}
          <KeyboardShortcuts shortcuts={guideShortcuts} />

          {/* FAQ & Troubleshooting Printer */}
          <FaqSection faqs={guideFaqs} />

          {/* Clean Document Footer */}
          <footer className="pt-6 pb-12 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              &copy; 2026 Rahman Printing — Sistem Informasi Point of Sale & SPK
            </div>
            <div className="flex items-center gap-4">
              <a
                href="http://localhost:8000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors inline-flex items-center gap-1 font-medium"
              >
                <span>Buka Aplikasi Web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="#faq-troubleshooting"
                onClick={() => handleNavigate('faq-troubleshooting')}
                className="hover:text-slate-900 transition-colors"
              >
                Troubleshooting
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
