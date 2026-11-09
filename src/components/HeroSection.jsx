import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection({ activeRole, onSelectRole }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50/50 pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-slate-200/60">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100/80 text-[#DA2F1F] border border-rose-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DA2F1F] animate-pulse" />
            Dokumentasi & Panduan Operasional Lengkap
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Panduan Terpadu <br />
            <span className="text-[#DA2F1F]">Rahman Printing POS</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pelajari alur kerja komprehensif mulai dari perhitungan meteran spanduk kasir, cetak struk thermal 58mm/80mm, kontrol surat perintah kerja (SPK), hingga laporan finansial bisnis percetakan.
          </p>

          {/* Highlights Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Alur Kasir Cepat
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              6 Tahap SPK Otomatis
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Kontrol Stok & Void Aman
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
