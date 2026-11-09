import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

export default function StepCard({ item }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <article
      id={item.id}
      className="scroll-mt-16 bg-white rounded-xs border border-slate-200 p-4 sm:p-5 space-y-3"
    >
      {/* Header Info */}
      <div className="space-y-0.5 pb-2 border-b border-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="text-slate-500 font-medium">{item.endpoint}</span>
          <span className="text-[10px]">#{item.id}</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {item.title}
        </h2>
        <p className="text-xs text-slate-500">
          {item.summary}
        </p>
      </div>

      {/* Description Text */}
      <p className="text-xs text-slate-700 leading-relaxed">
        {item.description}
      </p>

      {/* Real Screenshot Preview */}
      <div className="rounded-xs border border-slate-300 bg-slate-900 overflow-hidden">
        {/* Simple Browser Bar */}
        <div className="flex items-center justify-between px-2.5 py-1 bg-slate-800 border-b border-slate-700 text-slate-400 text-xs">
          <span className="font-mono text-[10.5px] text-slate-300">
            http://localhost:8000{item.endpoint}
          </span>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="flex items-center gap-1 text-[10.5px] text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 px-2 py-0.5 rounded-xs cursor-pointer transition-colors"
          >
            <ZoomIn className="w-3 h-3" />
            <span>Perbesar</span>
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

      {/* Structured Numbered Checklist */}
      <div className="bg-slate-50 rounded-xs border border-slate-200 p-3 space-y-2">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
          Komponen & Alur Kerja:
        </h3>
        <ol className="space-y-1.5 text-xs text-slate-700">
          {item.points.map((pt, idx) => (
            <li key={idx} className="leading-normal">
              <span className="font-semibold text-slate-900">{idx + 1}. {pt.label}: </span>
              <span>{pt.desc}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Operational Rules Callout */}
      {item.rules && (
        <div className="border-l-2 border-slate-800 bg-slate-100/80 p-2.5 text-xs text-slate-800 leading-relaxed">
          <span className="font-semibold text-slate-900">Ketentuan: </span>
          <span>{item.rules}</span>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-3 animate-in fade-in duration-100"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-xs border border-slate-700 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 bg-slate-800 border-b border-slate-700 text-white shrink-0">
              <span className="text-xs font-semibold truncate">{item.title}</span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-1.5 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
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
