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

  // Reusable Screenshot Card Component
  const ScreenshotCard = ({ isMobile = false }) => (
    <div className={`rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden relative group ${isMobile ? 'my-3 lg:hidden' : ''}`}>
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

        {/* Zoom Button in Top Right Corner */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxOpen(true);
          }}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-sm border border-slate-200/90 flex items-center gap-1.5 transition-all opacity-95 group-hover:opacity-100 active:scale-95"
          aria-label="Perbesar tangkapan layar"
        >
          <ZoomIn className="w-3.5 h-3.5 text-slate-500" />
          <span>Perbesar</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-150">
      {/* ── 2-COLUMN BALANCED CONTENT GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* ── LEFT COLUMN: INSTRUCTIONS & SPECIFICATION (5 Cols) ── */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          {/* Article Header */}
          <div className="space-y-2 pb-3.5 border-b border-slate-200">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[11px] text-slate-600 font-semibold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                {item.endpoint}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">#{item.id}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {item.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Screenshot On Mobile (Shows directly under header so visual context is immediate) */}
          <ScreenshotCard isMobile={true} />

          {/* Narrative Explanation */}
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5">
            <p>{item.description}</p>
          </div>

          {/* Numbered Workflow Points */}
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 space-y-3 shadow-2xs">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#DA2F1F] shrink-0" />
              <span>Komponen & Langkah Kerja</span>
            </h3>
            <ol className="space-y-2.5 text-xs text-slate-700">
              {item.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-bold text-slate-900">{pt.label}: </span>
                    <span className="text-slate-600">{pt.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Operational Rules Callout */}
          {item.rules && (
            <div className="border-l-4 border-slate-800 bg-slate-100/90 rounded-r-xl p-3 sm:p-3.5 text-xs text-slate-800 leading-relaxed space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                <span>Aturan & Validasi Sistem</span>
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">{item.rules}</p>
            </div>
          )}

          {/* Direct Link to App */}
          <div className="pt-1">
            <a
              href={`http://localhost:8000${item.endpoint}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#DA2F1F] transition-colors py-1"
            >
              <span>Uji coba langsung halaman ini di aplikasi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN: SCREENSHOT PREVIEW ON DESKTOP (7 Cols) ── */}
        <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-20">
          <ScreenshotCard isMobile={false} />
        </div>
      </div>

      {/* ── PREVIOUS / NEXT CHAPTER NAVIGATION ── */}
      <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {prevItem ? (
          <button
            type="button"
            onClick={() => onNavigate(prevItem.id)}
            className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 transition-colors text-left shadow-2xs w-full min-h-[48px]"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Sebelumnya</span>
              <span className="font-bold text-slate-900 truncate block text-xs">{prevItem.shortTitle || prevItem.title}</span>
            </div>
          </button>
        ) : <div className="hidden sm:block" />}

        {nextItem && (
          <button
            type="button"
            onClick={() => onNavigate(nextItem.id)}
            className="flex items-center justify-between gap-2.5 px-3.5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 transition-colors text-right shadow-2xs w-full sm:col-start-2 min-h-[48px]"
          >
            <div className="min-w-0 flex-1 text-right">
              <span className="text-[10px] text-[#DA2F1F] uppercase tracking-wider block font-semibold">Selanjutnya</span>
              <span className="font-bold text-slate-900 truncate block text-xs">{nextItem.shortTitle || nextItem.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#DA2F1F] shrink-0" />
          </button>
        )}
      </div>

      {/* ── LIGHTBOX MODAL FULLSCREEN ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-100"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 rounded-xl border border-slate-700 flex flex-col max-h-[96vh] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800 border-b border-slate-700 text-white shrink-0">
              <span className="text-xs sm:text-sm font-semibold truncate pr-2">{item.title}</span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg active:bg-slate-700 transition-colors"
                aria-label="Tutup Pratinjau"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
