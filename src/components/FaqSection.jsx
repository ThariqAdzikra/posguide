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
      className="scroll-mt-16 bg-white rounded-xs border border-slate-200 p-4 sm:p-5 space-y-3"
    >
      <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Troubleshooting Printer & FAQ
          </h2>
          <p className="text-xs text-slate-500">
            Solusi kendala printer thermal Bluetooth ESC/POS dan pemulihan akun.
          </p>
        </div>
        <span className="font-mono text-xs text-slate-400">FAQ</span>
      </div>

      <div className="space-y-1.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xs border border-slate-200 bg-slate-50/50 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full px-3 py-2 text-left flex items-center justify-between gap-2.5 hover:bg-slate-100/60 transition-colors"
              >
                <span className="text-xs font-semibold text-slate-900 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-150 ${
                    isOpen ? 'rotate-180 text-slate-800' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-3 pb-3 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-200 bg-white">
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
