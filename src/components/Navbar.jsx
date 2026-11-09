import React, { useState } from 'react';
import { ExternalLink, Menu, X, BookOpen, Printer, Sparkles } from 'lucide-react';

export default function Navbar({ activeRole, onSelectRole }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DA2F1F] flex items-center justify-center text-white font-black text-xl shadow-md shadow-red-500/20">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">Rahman Printing</span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-[#DA2F1F] border border-rose-200">
                  User Guide
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Panduan Interaktif Alur Kasir & SPK</p>
            </div>
          </div>

          {/* Desktop Nav: Roles Quick Filter */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => onSelectRole('kasir')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeRole === 'kasir'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kasir
            </button>
            <button
              onClick={() => onSelectRole('operator')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeRole === 'operator'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Operator SPK
            </button>
            <button
              onClick={() => onSelectRole('owner')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeRole === 'owner'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Owner
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#faq"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Bantuan & FAQ
            </a>
            <a
              href="https://rahmanprintingpos.sobatweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#DA2F1F] hover:bg-[#b82618] active:scale-98 transition-all shadow-sm shadow-red-600/20"
            >
              <span>Buka POS App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-3 shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 pt-1">
            Pilih Peran Panduan
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                onSelectRole('kasir');
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-3 text-center rounded-lg text-xs font-semibold border ${
                activeRole === 'kasir'
                  ? 'bg-[#DA2F1F] text-white border-[#DA2F1F]'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              Kasir
            </button>
            <button
              onClick={() => {
                onSelectRole('operator');
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-3 text-center rounded-lg text-xs font-semibold border ${
                activeRole === 'operator'
                  ? 'bg-[#DA2F1F] text-white border-[#DA2F1F]'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              Operator
            </button>
            <button
              onClick={() => {
                onSelectRole('owner');
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-3 text-center rounded-lg text-xs font-semibold border ${
                activeRole === 'owner'
                  ? 'bg-[#DA2F1F] text-white border-[#DA2F1F]'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              Owner
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              Pertanyaan Umum (FAQ)
            </a>
            <a
              href="https://rahmanprintingpos.sobatweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#DA2F1F] hover:bg-[#b82618]"
            >
              <span>Buka Aplikasi POS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
