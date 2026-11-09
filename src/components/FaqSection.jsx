import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Printer } from 'lucide-react';

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq-troubleshooting"
      className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-2xs"
    >
      <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Printer className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Troubleshooting Printer & FAQ
            </h2>
            <p className="text-xs text-slate-500">
              Solusi kendala printer thermal Bluetooth ESC/POS, format kertas 58mm/80mm, dan pemulihan akun.
            </p>
          </div>
        </div>
        <span className="font-mono text-xs text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
          FAQ
        </span>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-slate-50/50 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-slate-100/60 transition-colors"
              >
                <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-150 ${
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
