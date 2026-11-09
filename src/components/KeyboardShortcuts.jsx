import React from 'react';
import { Keyboard, Zap } from 'lucide-react';

export default function KeyboardShortcuts({ shortcuts }) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <section
      id="keyboard-shortcuts"
      className="scroll-mt-24 bg-slate-900 text-white rounded-xl p-5 sm:p-7 border border-slate-800 shadow-sm space-y-5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
            <Keyboard className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-white">
              Shortcut Keyboard Kasir POS
            </h3>
            <p className="text-xs text-slate-400">
              Percepat antrean checkout tanpa berpindah antara keyboard dan mouse.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 self-start sm:self-auto font-semibold">
          Aktif Otomatis
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {shortcuts.map((sc) => (
          <div
            key={sc.key}
            className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700/80 flex items-center gap-3"
          >
            <kbd className="px-2.5 py-1 rounded bg-slate-950 border border-slate-700 font-mono text-xs font-black text-rose-400 shadow-inner shrink-0">
              {sc.key}
            </kbd>
            <span className="text-xs text-slate-300 leading-snug">
              {sc.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
