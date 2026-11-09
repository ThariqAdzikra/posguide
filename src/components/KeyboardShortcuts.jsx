import React from 'react';
import { Command, Zap } from 'lucide-react';

export default function KeyboardShortcuts({ shortcuts }) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg">Shortcut Keyboard Kasir</h3>
            <p className="text-xs text-slate-400">Gunakan tombol keyboard untuk memproses antrean transaksi pelanggan lebih cepat.</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Aktif Otomatis
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {shortcuts.map((sc) => (
          <div
            key={sc.key}
            className="bg-slate-800/60 hover:bg-slate-800 rounded-xl p-4 border border-slate-700/60 transition-colors flex items-center gap-4"
          >
            <kbd className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 font-mono text-sm font-black text-rose-400 shadow-inner shrink-0">
              {sc.key}
            </kbd>
            <div className="text-xs text-slate-300 leading-snug">
              {sc.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
