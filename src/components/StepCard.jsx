import React, { useState } from 'react';
import { ZoomIn, X, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function StepCard({ step, index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <article
      id={step.id}
      className="scroll-mt-24 bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all hover:border-slate-300"
    >
      <div className="p-5 sm:p-7 space-y-5">
        {/* Step Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
              {step.number}
            </span>
            <div>
              <span className="text-[11px] font-bold text-[#DA2F1F] uppercase tracking-wider block">
                {step.subtitle}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {step.title}
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
            Langkah #{index + 1}
          </span>
        </div>

        {/* Narrative Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {step.description}
        </p>

        {/* Real Screenshot Preview in macOS / Clean Browser Frame */}
        <div className="rounded-xl border border-slate-200/90 bg-slate-950 shadow-sm overflow-hidden">
          {/* Top Bar of the Mockup Window */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="font-mono text-[11px] text-slate-400 truncate max-w-[280px] bg-slate-950/70 px-3 py-0.5 rounded border border-slate-800/80">
              http://localhost:8000/{step.id.includes('pos') ? 'pos' : step.id.includes('operator') ? 'orders' : step.id.includes('stok') ? 'products' : step.id.includes('crm') ? 'customers' : 'reports'}
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded cursor-pointer transition-colors"
            >
              <ZoomIn className="w-3 h-3" />
              <span>Perbesar</span>
            </button>
          </div>

          {/* Screenshot Display */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="group relative cursor-zoom-in bg-slate-900 overflow-hidden"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-200"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg backdrop-blur-xs">
                <ZoomIn className="w-3.5 h-3.5" />
                Klik untuk melihat resolusi penuh (2K)
              </span>
            </div>
          </div>
        </div>

        {/* Numbered Highlights & Callouts */}
        <div className="bg-slate-50/90 rounded-xl p-4 border border-slate-200/80 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#DA2F1F]" />
            <span>Poin Validasi & Fitur Penting</span>
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {step.highlights.map((item) => (
              <div key={item.number} className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-4 h-4 rounded-full bg-[#DA2F1F] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {item.number}
                </span>
                <span className="leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip / System Protection Warning */}
        {step.tips && (
          <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold text-amber-950">Aturan Operasional: </span>
              {step.tips}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700 text-white shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#DA2F1F] text-white text-xs font-mono font-bold flex items-center justify-center">
                  {step.number}
                </span>
                <span className="text-xs sm:text-sm font-semibold truncate">{step.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-3 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
              <img
                src={step.image}
                alt={step.title}
                className="max-h-[80vh] w-auto max-w-full rounded object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
