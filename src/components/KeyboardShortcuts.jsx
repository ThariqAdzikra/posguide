import React from 'react';
import { Keyboard } from 'lucide-react';

export default function KeyboardShortcuts({ shortcuts }) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <section
      id="keyboard-shortcuts"
      className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 shadow-2xs"
    >
      <div className="pb-3 border-b border-slate-200 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#DA2F1F] flex items-center justify-center shrink-0">
            <Keyboard className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate">
              Shortcut Keyboard Kasir POS
            </h2>
            <p className="text-xs text-slate-500 leading-snug">
              Tombol cepat keyboard untuk transaksi kasir di counter.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded shrink-0">
          POS Shortcuts
        </span>
      </div>

      {/* ── MOBILE CARD VIEW (< sm) ── */}
      <div className="sm:hidden space-y-2">
        {shortcuts.map((sc) => (
          <div
            key={sc.key}
            className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1.5"
          >
            <div className="flex items-center justify-between gap-2">
              <kbd className="px-2.5 py-1 rounded-md border border-slate-300 bg-white text-[#DA2F1F] font-bold shadow-2xs font-mono text-xs">
                {sc.key}
              </kbd>
              <span className="font-bold text-slate-900 text-xs truncate">
                {sc.action}
              </span>
            </div>
            <p className="text-[11.5px] text-slate-600 leading-relaxed">
              {sc.detail}
            </p>
          </div>
        ))}
      </div>

      {/* ── DESKTOP TABLE VIEW (>= sm) ── */}
      <div className="hidden sm:block overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-700 font-bold">
              <th className="py-2.5 px-3 w-28">Tombol</th>
              <th className="py-2.5 px-3">Fungsi Aksi</th>
              <th className="py-2.5 px-3">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {shortcuts.map((sc) => (
              <tr key={sc.key} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-2.5 px-3 font-mono font-bold text-[#DA2F1F]">
                  <kbd className="px-2 py-1 rounded border border-slate-300 bg-slate-100 text-slate-900 shadow-2xs font-mono text-xs">
                    {sc.key}
                  </kbd>
                </td>
                <td className="py-2.5 px-3 font-semibold text-slate-900">
                  {sc.action}
                </td>
                <td className="py-2.5 px-3 text-slate-600">
                  {sc.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
