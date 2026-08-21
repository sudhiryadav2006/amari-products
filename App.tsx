/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ScalePrecision } from './components/ScalePrecision';
import { AboutUs } from './components/AboutUs';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { QualityStandards } from './components/QualityStandards';
import { OurExpertise } from './components/OurExpertise';
import { ManufacturingPartnerships } from './components/ManufacturingPartnerships';
import { PrivateWhiteLabel } from './components/PrivateWhiteLabel';
import { OurLocation } from './components/OurLocation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PortfolioModal } from './components/PortfolioModal';

export default function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const handleStartScaling = () => {
    const element = document.getElementById('partnerships-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-zinc-900 selection:bg-amber-600 selection:text-white antialiased">
      {/* Top Fixed Header */}
      <Header onOpenPortfolio={() => setIsPortfolioOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home Hero */}
        <Hero onStartScaling={handleStartScaling} />

        {/* 2. Scale & Precision */}
        <ScalePrecision />

        {/* 3. About Us */}
        <AboutUs />

        {/* 4. Manufacturing Capabilities */}
        <ManufacturingCapabilities />

        {/* 5. Quality Standards */}
        <QualityStandards />

        {/* 6. Our Expertise */}
        <OurExpertise onSelectCategory={() => setIsPortfolioOpen(true)} />

        {/* 7. Manufacturing Partnerships */}
        <ManufacturingPartnerships />

        {/* 8. Private & White Label / Capabilities */}
        <PrivateWhiteLabel />

        {/* 9. Our Location & Facility Map */}
        <OurLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Portfolio Showcase Modal */}
      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
      />
    </div>
  );
}
