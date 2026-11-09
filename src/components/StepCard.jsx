import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

export default function StepCard({ item }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <article
      id={item.id}
      className="scroll-mt-20 bg-white rounded border border-slate-200 p-5 sm:p-7 space-y-4"
    >
      {/* Header Info */}
      <div className="space-y-1 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>{item.endpoint}</span>
          <span className="text-[11px] text-slate-400">ID: #{item.id}</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          {item.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          {item.summary}
        </p>
      </div>

      {/* Description Text */}
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        {item.description}
      </p>

      {/* Real Screenshot Preview */}
      <div className="rounded border border-slate-300 bg-slate-900 overflow-hidden">
        {/* Simple Browser Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800 border-b border-slate-700 text-slate-400 text-xs">
          <span className="font-mono text-[11px] text-slate-300">
            http://localhost:8000{item.endpoint}
          </span>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 px-2 py-0.5 rounded cursor-pointer transition-colors"
          >
            <ZoomIn className="w-3 h-3" />
            <span>Perbesar Layar Penuh</span>
          </button>
        </div>

        {/* Image */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="cursor-zoom-in bg-slate-950"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Structured Numbered Checklist (No pills, no colored balls) */}
      <div className="bg-slate-50 rounded border border-slate-200 p-4 space-y-2.5">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
          Poin Penting & Komponen Utama:
        </h3>
        <ol className="space-y-2 text-xs text-slate-700">
          {item.points.map((pt, idx) => (
            <li key={idx} className="leading-relaxed">
              <span className="font-bold text-slate-900">{idx + 1}. {pt.label}: </span>
              <span>{pt.desc}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Operational Rules Callout (Solid Left Border, No Fluff) */}
      {item.rules && (
        <div className="border-l-4 border-slate-800 bg-slate-100 p-3.5 text-xs text-slate-800 leading-relaxed">
          <span className="font-bold text-slate-900">Ketentuan Sistem: </span>
          <span>{item.rules}</span>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4 animate-in fade-in duration-100"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 rounded border border-slate-700 flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700 text-white shrink-0">
              <span className="text-xs sm:text-sm font-semibold truncate">{item.title}</span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[82vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
