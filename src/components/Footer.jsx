import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DA2F1F] flex items-center justify-center text-white font-black text-sm">
              R
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Rahman Printing POS</p>
              <p className="text-xs text-slate-500">Pusat Percetakan Digital & Sablon Custom</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <a
              href="https://rahmanprintingpos.sobatweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DA2F1F] inline-flex items-center gap-1 transition-colors"
            >
              <span>Aplikasi POS Utama</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://rahmanprintingpos.sobatweb.tech/orders"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DA2F1F] inline-flex items-center gap-1 transition-colors"
            >
              <span>Papan SPK Produksi</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="#faq"
              className="hover:text-[#DA2F1F] transition-colors"
            >
              Pusat FAQ & Bantuan
            </a>
          </div>

          <div className="text-xs text-slate-400 text-center sm:text-right">
            &copy; 2026 Rahman Printing. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
}
