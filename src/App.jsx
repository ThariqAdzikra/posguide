import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ArticleView from './components/ArticleView';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import FaqSection from './components/FaqSection';
import { guideSections, guideShortcuts, guideFaqs } from './data/guideContent';

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
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 antialiased font-['Inter',sans-serif] overflow-x-hidden w-full">
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
      <div className="lg:pl-72 flex flex-col min-h-screen w-full">
        {/* Sticky Header */}
        <Header
          onOpenMobile={() => setMobileSidebarOpen(true)}
          activeGroupTitle={activeGroupTitle}
          activeItemTitle={activeItemTitle}
        />

        {/* Main Content Area (Responsive width & padding) */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-6">
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

          {/* Simple Clean Footer with Credits */}
          <footer className="mt-10 sm:mt-12 pt-6 pb-8 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-1.5 text-slate-500 flex-wrap justify-center sm:justify-start">
              <span>&copy; 2026 Rahman Printing POS</span>
              <span className="text-slate-300">&middot;</span>
              <span className="font-semibold text-slate-700">Thariq Adzikra</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500">
              <a
                href="https://github.com/ThariqAdzikra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors flex items-center gap-1 group py-1"
                title="GitHub: ThariqAdzikra"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="group-hover:underline">GitHub</span>
              </a>
              <span className="text-slate-300">&middot;</span>
              <a
                href="https://instagram.com/thrqdz_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors flex items-center gap-1 group py-1"
                title="Instagram: @thrqdz_"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.449-.645 1.449-1.44s-.654-1.44-1.449-1.44z" />
                </svg>
                <span className="group-hover:underline">thrqdz_</span>
              </a>
              <span className="text-slate-300">&middot;</span>
              <a
                href="mailto:adzthariq@gmail.com"
                className="hover:text-blue-600 transition-colors flex items-center gap-1 group py-1"
                title="Email: adzthariq@gmail.com"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="group-hover:underline">Email</span>
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
