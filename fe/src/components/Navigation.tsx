/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Language, NavTab } from "../types";
import { TRANSLATIONS } from "../data";
import { Menu, X, Globe, ArrowRight, Server } from "lucide-react";

interface NavigationProps {
  currentTab: NavTab;
  setTab: (tab: NavTab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onInquireClick: () => void;
}

export default function Navigation({
  currentTab,
  setTab,
  language,
  setLanguage,
  onInquireClick
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems: { id: NavTab; label: string }[] = [
    { id: "home", label: t.navHome },
    { id: "solutions", label: t.navSolutions },
    { id: "services", label: t.navServices },
    { id: "about", label: t.navAbout }
  ];

  return (
    <header id="main-navigation" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div 
            id="brand-logo"
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => setTab("home")}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white font-display font-bold text-lg shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              K
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                KORIX
              </span>
              <span className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded">
                Tech
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Tabs */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  id={`nav-tab-${item.id}`}
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-blue-600 bg-blue-50/50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* System Control Settings (Language + Inquire) */}
          <div id="nav-controls" className="hidden md:flex items-center space-x-4">
            {/* Language Switcher Button */}
            <div className="flex items-center border border-slate-200 rounded-md p-0.5 bg-slate-50">
              <button
                id="lang-en-btn"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                  language === "en"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                EN
              </button>
              <button
                id="lang-vi-btn"
                onClick={() => setLanguage("vi")}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                  language === "vi"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                VI
              </button>
            </div>

            {/* Prompt Call to Action */}
            <button
              id="desktop-cta-btn"
              onClick={onInquireClick}
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 transition-all cursor-pointer"
            >
              <span>{t.ctaInquire}</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile Language Cycle Button */}
            <button
              id="mobile-lang-cycle"
              onClick={() => setLanguage(language === "en" ? "vi" : "en")}
              className="p-2 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center space-x-1"
              title="Change Language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">{language}</span>
            </button>

            {/* Mobile Nav Drawer toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Panel */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  id={`mobile-nav-tab-${item.id}`}
                  key={item.id}
                  onClick={() => {
                    setTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50/50 font-semibold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-slate-500">Language / Ngôn ngữ</span>
              <div className="flex items-center space-x-1 border border-slate-200 rounded p-0.5 bg-slate-50">
                <button
                  id="mobile-lang-en"
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 text-xs font-semibold rounded ${
                    language === "en" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
                  }`}
                >
                  English
                </button>
                <button
                  id="mobile-lang-vi"
                  onClick={() => setLanguage("vi")}
                  className={`px-3 py-1 text-xs font-semibold rounded ${
                    language === "vi" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
                  }`}
                >
                  Tiếng Việt
                </button>
              </div>
            </div>

            <button
              id="mobile-inquire-btn"
              onClick={() => {
                onInquireClick();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              <span>{t.ctaInquire}</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
