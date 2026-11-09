import React from 'react';
import { Keyboard } from 'lucide-react';

export default function KeyboardShortcuts({ shortcuts }) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <section
      id="keyboard-shortcuts"
      className="scroll-mt-20 bg-white rounded border border-slate-200 p-5 sm:p-7 space-y-4"
    >
      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Daftar Shortcut Keyboard Kasir
          </h2>
          <p className="text-xs text-slate-600">
            Tombol cepat keyboard untuk mempercepat transaksi kasir di counter.
          </p>
        </div>
        <span className="font-mono text-xs text-slate-400">POS Shortcuts</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
              <th className="py-2.5 px-3 w-28">Tombol</th>
              <th className="py-2.5 px-3">Fungsi Aksi</th>
              <th className="py-2.5 px-3">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {shortcuts.map((sc) => (
              <tr key={sc.key} className="hover:bg-slate-50">
                <td className="py-2.5 px-3 font-mono font-bold text-[#DA2F1F]">
                  <kbd className="px-2 py-0.5 rounded border border-slate-300 bg-slate-100 text-slate-900 shadow-2xs">
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
