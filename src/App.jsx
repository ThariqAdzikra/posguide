import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ArticleView from './components/ArticleView';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import FaqSection from './components/FaqSection';
import { guideSections, guideShortcuts, guideFaqs } from './data/guideContent';
import { ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('auth-login');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Flatten all items to easily find active, prev, and next
  const flatItems = [];
  for (const group of guideSections) {
    for (const item of group.items) {
      flatItems.push({ ...item, groupTitle: group.groupTitle });
    }
  }

  // Find currently active item
  const activeItemIndex = flatItems.findIndex((it) => it.id === activeSection);
  const activeItem = activeItemIndex !== -1 ? flatItems[activeItemIndex] : flatItems[0];
  const prevItem = activeItemIndex > 0 ? flatItems[activeItemIndex - 1] : null;
  const nextItem = activeItemIndex !== -1 && activeItemIndex < flatItems.length - 1 ? flatItems[activeItemIndex + 1] : null;

  const activeGroupTitle = activeItem ? activeItem.groupTitle : 'Panduan Fitur';
  const activeItemTitle = activeSection === 'keyboard-shortcuts'
    ? 'Shortcut Keyboard Kasir'
    : activeSection === 'faq-troubleshooting'
    ? 'Troubleshooting Printer'
    : activeItem?.title || 'Dokumentasi';

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 antialiased font-['Inter',sans-serif]">
      {/* ── 1. SIDEBAR NAVIGASI ── */}
      <Sidebar
        sections={guideSections}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isMobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* ── 2. KONTEN DOKUMENTASI UTAMA ── */}
      <div className="lg:pl-72 sm:lg:pl-80 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Header
          onOpenMobile={() => setMobileSidebarOpen(true)}
          activeGroupTitle={activeGroupTitle}
          activeItemTitle={activeItemTitle}
        />

        {/* Main Content Area (Fills Width Responsively) */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
          {activeSection === 'keyboard-shortcuts' ? (
            <KeyboardShortcuts shortcuts={guideShortcuts} />
          ) : activeSection === 'faq-troubleshooting' ? (
            <FaqSection faqs={guideFaqs} />
          ) : activeItem ? (
            <ArticleView
              item={activeItem}
              groupTitle={activeGroupTitle}
              prevItem={prevItem}
              nextItem={nextItem}
              onNavigate={handleSelectSection}
            />
          ) : null}

          {/* Simple Clean Footer */}
          <footer className="mt-12 pt-6 pb-8 border-t border-slate-200 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              &copy; 2026 Rahman Printing POS — Dokumentasi Resmi Aplikasi
            </div>
            <div className="flex items-center gap-4">
              <a
                href="http://localhost:8000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-800 transition-colors inline-flex items-center gap-1 font-medium"
              >
                <span>Buka Aplikasi Web</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => handleSelectSection('faq-troubleshooting')}
                className="hover:text-slate-800 transition-colors cursor-pointer"
              >
                Troubleshooting
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
