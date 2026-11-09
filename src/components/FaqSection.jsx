import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq-troubleshooting"
      className="scroll-mt-20 bg-white rounded border border-slate-200 p-5 sm:p-7 space-y-4"
    >
      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Troubleshooting Printer & Pertanyaan Operasional (FAQ)
          </h2>
          <p className="text-xs text-slate-600">
            Solusi kendala printer thermal Bluetooth ESC/POS, format kertas 58mm/80mm, dan pemulihan akun.
          </p>
        </div>
        <span className="font-mono text-xs text-slate-400">Troubleshooting</span>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded border border-slate-200 bg-slate-50/60 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-slate-100/60 transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-slate-800' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-200 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
