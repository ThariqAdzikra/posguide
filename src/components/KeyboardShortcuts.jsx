import React from 'react';
import { Keyboard } from 'lucide-react';

export default function KeyboardShortcuts({ shortcuts }) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <section
      id="keyboard-shortcuts"
      className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-2xs"
    >
      <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-rose-50 text-[#DA2F1F] flex items-center justify-center shrink-0">
            <Keyboard className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Shortcut Keyboard Kasir POS
            </h2>
            <p className="text-xs text-slate-500">
              Tombol cepat keyboard untuk mempercepat transaksi kasir di counter.
            </p>
          </div>
        </div>
        <span className="font-mono text-xs text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
          POS Shortcuts
        </span>
      </div>

      <div className="overflow-x-auto">
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
              <tr key={sc.key} className="hover:bg-slate-50/70">
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
