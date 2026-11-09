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
      className="scroll-mt-24 bg-white rounded-xl border border-slate-200/90 p-5 sm:p-7 shadow-2xs space-y-5"
    >
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <Printer className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900">
            Troubleshooting Printer Thermal & FAQ Operasional
          </h3>
          <p className="text-xs text-slate-500">
            Solusi kendala Bluetooth ESC/POS, format kertas 58mm/80mm, dan alur pelunasan DP.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-lg border border-slate-200/80 bg-slate-50/50 overflow-hidden transition-colors"
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
                    isOpen ? 'rotate-180 text-[#DA2F1F]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
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
