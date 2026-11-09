import React, { useState } from 'react';
import { ZoomIn, X, ExternalLink, ArrowLeft, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ArticleView({
  item,
  groupTitle,
  prevItem,
  nextItem,
  onNavigate
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* ── 2-COLUMN BALANCED CONTENT GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ── LEFT COLUMN: INSTRUCTIONS & SPECIFICATION (5 Cols) ── */}
        <div className="lg:col-span-5 space-y-5">
          {/* Article Header */}
          <div className="space-y-1.5 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                {item.endpoint}
              </span>
              <span className="text-xs text-slate-400 font-mono">#{item.id}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
              {item.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Narrative Explanation */}
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5">
            <p>{item.description}</p>
          </div>

          {/* Numbered Workflow Points */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-3 shadow-2xs">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#DA2F1F]" />
              <span>Komponen & Langkah Kerja</span>
            </h3>
            <ol className="space-y-2 text-xs text-slate-700">
              {item.points.map((pt, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-bold text-slate-900">{idx + 1}. {pt.label}: </span>
                  <span className="text-slate-600">{pt.desc}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Operational Rules Callout */}
          {item.rules && (
            <div className="border-l-4 border-slate-800 bg-slate-100/90 rounded-r-md p-3.5 text-xs text-slate-800 leading-relaxed space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-700" />
                <span>Aturan & Validasi Sistem</span>
              </div>
              <p className="text-slate-700 text-xs">{item.rules}</p>
            </div>
          )}

          {/* Direct Link to App */}
          <div className="pt-1">
            <a
              href={`http://localhost:8000${item.endpoint}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-[#DA2F1F] transition-colors"
            >
              <span>Uji coba langsung halaman ini di aplikasi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN: CLEAN SCREENSHOT PREVIEW (7 Cols) ── */}
        <div className="lg:col-span-7 lg:sticky lg:top-20">
          <div className="rounded-lg border border-slate-200 bg-white shadow-xs overflow-hidden relative group">
            {/* Clickable Image Preview */}
            <div
              onClick={() => setLightboxOpen(true)}
              className="cursor-zoom-in relative bg-slate-50 flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover max-h-[560px]"
                loading="eager"
              />

              {/* Clean Subtle Zoom Badge in Top Right Corner */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(true);
                }}
                className="absolute top-3 right-3 bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 text-xs font-medium px-2.5 py-1.5 rounded-md shadow-xs border border-slate-200/90 flex items-center gap-1.5 transition-all opacity-90 group-hover:opacity-100"
              >
                <ZoomIn className="w-3.5 h-3.5 text-slate-500" />
                <span>Perbesar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── PREVIOUS / NEXT CHAPTER NAVIGATION ── */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
        {prevItem ? (
          <button
            type="button"
            onClick={() => onNavigate(prevItem.id)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors text-left"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Sebelumnya</span>
              <span className="font-semibold truncate block">{prevItem.shortTitle || prevItem.title}</span>
            </div>
          </button>
        ) : <div />}

        {nextItem && (
          <button
            type="button"
            onClick={() => onNavigate(nextItem.id)}
            className="flex items-center justify-end gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors text-right self-end sm:self-auto"
          >
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Selanjutnya</span>
              <span className="font-semibold truncate block">{nextItem.shortTitle || nextItem.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>
        )}
      </div>

      {/* ── LIGHTBOX MODAL FULLSCREEN ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-100"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 rounded-lg border border-slate-700 flex flex-col max-h-[94vh] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700 text-white shrink-0">
              <span className="text-xs sm:text-sm font-semibold truncate">{item.title}</span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[84vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
