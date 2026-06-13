/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Language, NavTab } from "./types";
import Navigation from "./components/Navigation";
import HomeSection from "./components/HomeSection";
import SolutionsSection from "./components/SolutionsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

export default function App() {
  const [currentTab, setTab] = useState<NavTab>("home");
  const [language, setLanguage] = useState<Language>("vi"); // Defaulting to 'vi' as requested on Vietnam-specific pages or easily toggleable
  const [inquireModalOpen, setInquireModalOpen] = useState(false);

  // Scroll to top of window automatically on active tab modification
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTab]);

  const handleInquireOpen = () => {
    setInquireModalOpen(true);
  };

  const handleInquireClose = () => {
    setInquireModalOpen(false);
  };

  const handleSetTab = (tab: NavTab) => {
    setTab(tab);
  };

  return (
    <div id="korix-app" className="min-h-screen bg-slate-50/50 flex flex-col font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Absolute decorative gradient highlights */}
      <div className="absolute top-0 left-1/4 w-120 h-120 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-150 h-150 bg-blue-105/5 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Global Header & Nav bar */}
      <Navigation
        currentTab={currentTab}
        setTab={handleSetTab}
        language={language}
        setLanguage={setLanguage}
        onInquireClick={handleInquireOpen}
      />

      {/* Main Container */}
      <main className="flex-1 w-full pt-6 md:pt-10">
        {currentTab === "home" && (
          <HomeSection
            language={language}
            onExplore={() => setTab("solutions")}
            onBookBriefing={handleInquireOpen}
          />
        )}

        {currentTab === "solutions" && (
          <SolutionsSection
            language={language}
            onBookBriefing={handleInquireOpen}
          />
        )}

        {currentTab === "services" && (
          <ServicesSection
            language={language}
            onBookBriefing={handleInquireOpen}
          />
        )}

        {currentTab === "about" && (
          <AboutSection
            language={language}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        language={language}
        setTab={handleSetTab}
      />

      {/* Multi-step Project Booking Form Container */}
      <ConsultationModal
        isOpen={inquireModalOpen}
        onClose={handleInquireClose}
        language={language}
      />
    </div>
  );
}
