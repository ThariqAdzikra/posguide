import React from 'react';

export default function KeyboardShortcuts({ shortcuts }) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <section
      id="keyboard-shortcuts"
      className="scroll-mt-16 bg-white rounded-xs border border-slate-200 p-4 sm:p-5 space-y-3"
    >
      <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Daftar Shortcut Keyboard Kasir
          </h2>
          <p className="text-xs text-slate-500">
            Tombol cepat keyboard untuk operasional transaksi di counter.
          </p>
        </div>
        <span className="font-mono text-xs text-slate-400">Shortcuts</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
              <th className="py-2 px-2.5 w-24">Tombol</th>
              <th className="py-2 px-2.5">Fungsi</th>
              <th className="py-2 px-2.5">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {shortcuts.map((sc) => (
              <tr key={sc.key} className="hover:bg-slate-50">
                <td className="py-1.5 px-2.5 font-mono font-bold text-[#DA2F1F]">
                  <kbd className="px-1.5 py-0.5 rounded-xs border border-slate-300 bg-slate-100 text-slate-900 text-[11px]">
                    {sc.key}
                  </kbd>
                </td>
                <td className="py-1.5 px-2.5 font-semibold text-slate-900">
                  {sc.action}
                </td>
                <td className="py-1.5 px-2.5 text-slate-600">
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
