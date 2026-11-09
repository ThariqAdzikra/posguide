import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoleTabs from './components/RoleTabs';
import StepCard from './components/StepCard';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { guideRoles, faqList } from './data/guideContent';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeRole, setActiveRole] = useState('kasir');

  const currentRole = guideRoles.find((r) => r.id === activeRole) || guideRoles[0];

  const handleSelectRole = (roleId) => {
    setActiveRole(roleId);
    // Smooth scroll down to the role steps
    const stepsElement = document.getElementById('role-steps-section');
    if (stepsElement) {
      stepsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-800">
        <span className="font-semibold text-rose-400">Pembaruan Sistem:</span> Dukungan penuh cetak struk thermal 58mm & 80mm via Web Bluetooth kini aktif.
      </div>

      {/* Navigation */}
      <Navbar activeRole={activeRole} onSelectRole={handleSelectRole} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection activeRole={activeRole} onSelectRole={handleSelectRole} />

        {/* Role Tabs Switcher */}
        <RoleTabs
          roles={guideRoles}
          activeRole={activeRole}
          onSelectRole={handleSelectRole}
        />

        {/* Steps Container */}
        <section id="role-steps-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#DA2F1F] uppercase tracking-wider">
                Alur Panduan • {currentRole.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {currentRole.label}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                {currentRole.tagline}
              </p>
            </div>
            <a
              href="https://rahmanprintingpos.sobatweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold shadow-xs transition-all self-start sm:self-auto"
            >
              <span>Buka Demo POS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Step Cards List */}
          <div className="space-y-6">
            {currentRole.steps.map((step, idx) => (
              <StepCard key={step.id} step={step} index={idx} />
            ))}
          </div>

          {/* Cashier Shortcuts Component */}
          {currentRole.shortcuts && currentRole.shortcuts.length > 0 && (
            <div className="pt-4">
              <KeyboardShortcuts shortcuts={currentRole.shortcuts} />
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <FaqSection faqs={faqList} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
