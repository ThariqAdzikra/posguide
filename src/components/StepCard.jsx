import React, { useState } from 'react';
import { ZoomIn, X, Info, Sparkles, CheckCircle } from 'lucide-react';

export default function StepCard({ step, index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6 sm:p-8">
        {/* Step Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
              {step.number}
            </span>
            <div>
              <span className="text-xs font-semibold text-[#DA2F1F] tracking-wide uppercase">
                {step.subtitle}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {step.title}
              </h3>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
            Langkah {index + 1}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          {step.description}
        </p>

        {/* Content Grid: Screenshot Mockup & Highlight Checklist */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Screenshot in Browser Frame (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="group relative rounded-xl border border-slate-200 bg-slate-900 shadow-md overflow-hidden">
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800/90 border-b border-slate-700/60 text-slate-400 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="font-mono text-2xs text-slate-300 truncate max-w-[200px]">
                  rahmanprintingpos.sobatweb.tech
                </span>
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="flex items-center gap-1 text-2xs text-slate-300 hover:text-white transition-colors bg-slate-700/80 hover:bg-slate-700 px-2 py-0.5 rounded"
                  title="Klik untuk memperbesar screenshot"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Perbesar</span>
                </button>
              </div>

              {/* Image Preview */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="cursor-zoom-in relative aspect-16/10 bg-slate-100 overflow-hidden"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-2 right-2 bg-slate-900/75 backdrop-blur-xs text-white text-2xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <ZoomIn className="w-3 h-3" />
                  <span>Klik untuk zoom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Numbered Highlights & Tips (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#DA2F1F]" />
                Poin Panduan Utama
              </h4>
              <ul className="space-y-2.5">
                {step.highlights.map((item) => (
                  <li key={item.number} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-4 h-4 rounded-full bg-[#DA2F1F] text-white text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Tips Box */}
            {step.tips && (
              <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-950">Tips Praktis: </span>
                  <span className="text-amber-800 leading-snug">{step.tips}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-800/90 border-b border-slate-700 text-white">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#DA2F1F] text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
                <span className="text-sm font-semibold truncate">{step.title}</span>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-2 sm:p-4 max-h-[80vh] overflow-auto flex items-center justify-center bg-slate-950">
              <img
                src={step.image}
                alt={step.title}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-md"
              />
            </div>
            
            <div className="px-5 py-2.5 bg-slate-800/80 border-t border-slate-700/60 text-slate-300 text-xs flex justify-between items-center">
              <span>{step.subtitle}</span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="text-2xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-white"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
