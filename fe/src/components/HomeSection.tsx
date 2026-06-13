/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language } from "../types";
import { TRANSLATIONS, IMAGES } from "../data";
import { Cpu, Layers, Cloud, TrendingUp, CheckCircle, ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";

interface HomeSectionProps {
  language: Language;
  onExplore: () => void;
  onBookBriefing: () => void;
}

export default function HomeSection({
  language,
  onExplore,
  onBookBriefing
}: HomeSectionProps) {
  const t = TRANSLATIONS[language];

  const serviceItems = [
    {
      icon: Cpu,
      title: t.service1Title,
      desc: t.service1Desc,
      tag: "Architectures"
    },
    {
      icon: Layers,
      title: t.service2Title,
      desc: t.service2Desc,
      tag: "Interactive Design"
    },
    {
      icon: Cloud,
      title: t.service3Title,
      desc: t.service3Desc,
      tag: "Infrastructure"
    },
    {
      icon: TrendingUp,
      title: t.service4Title,
      desc: t.service4Desc,
      tag: "CTO Advisory"
    }
  ];

  return (
    <div id="home-section-root" className="animate-fade-in space-y-24 pb-16">
      
      {/* 1. HERO MAIN SECTION */}
      <section id="home-hero" className="relative pt-8 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-xs font-semibold uppercase tracking-wider font-mono">
              <Zap className="w-3.5 h-3.5" />
              <span>{language === "en" ? "KORIX SPECIALIST FIRM" : "ĐƠN VỊ CÔNG NGHỆ CHUYÊN BIỆT"}</span>
            </div>
            
            <h1 
              id="hero-header-text"
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-slate-900 leading-[1.1] tracking-tight"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-slate-950">
                {t.heroTitle}
              </span>
            </h1>

            <p id="hero-sub-text" className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {t.heroSubtitle}
            </p>

            {/* Inquire Action Channels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-book-btn"
                onClick={onBookBriefing}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all flex items-center justify-center cursor-pointer hover:shadow-xl shadow-slate-950/20 active:scale-[0.98]"
              >
                <span>{t.ctaBookBriefing}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                id="hero-explore-btn"
                onClick={onExplore}
                className="px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
              >
                {t.ctaExploreSolutions}
              </button>
            </div>

            {/* Micro badges listing stats */}
            <div id="hero-stat-badges" className="grid grid-cols-3 gap-4 pt-6 select-none border-t border-slate-100">
              <div>
                <p className="font-display font-bold text-lg md:text-2xl text-blue-600">99.99%</p>
                <p className="text-xs text-slate-500 font-medium">{t.uptimeBadge}</p>
              </div>
              <div>
                <p className="font-display font-bold text-lg md:text-2xl text-slate-800">250+</p>
                <p className="text-xs text-slate-500 font-medium">{t.projectsBadge}</p>
              </div>
              <div>
                <p className="font-display font-bold text-lg md:text-2xl text-slate-800">100+</p>
                <p className="text-xs text-slate-500 font-medium">{t.engineersBadge}</p>
              </div>
            </div>
          </div>

          {/* Right Image Graphic Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 bg-slate-100">
              <img 
                id="hero-office-image"
                src={IMAGES.heroOffice} 
                alt="Korix high-end office workstation"
                className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 duration-700 transition-transform" 
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Absolute Decorative elements */}
            <div className="absolute -top-4 -right-4 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-2 animate-pulse">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="font-mono text-xs font-semibold text-slate-700">Engineering Deploy Live</span>
            </div>

            <div className="absolute -bottom-6 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-50 flex items-center space-x-3 max-w-[200px]">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">SECURE SYSTEMS</p>
                <p className="text-xs font-semibold text-slate-800">ISO 27001 Compliant</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CORPORATE CORE MISSION */}
      <section id="our-mission-section" className="bg-slate-50/70 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-4 text-left">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                {t.missionLabel}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                {t.missionTitle}
              </h2>
            </div>

            <div className="lg:col-span-8 text-left space-y-4">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {t.missionDesc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">
                    {language === "en" ? "Strict compliance with type-safety best practices" : "Tuyệt đối tuân thủ quy trình kiểm thử nghiêm ngặt"}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">
                    {language === "en" ? "Cloud serverless elasticity optimized for core scale" : "Kiến trúc máy chủ đám mây độc lập tự động tối ưu hóa"}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">
                    {language === "en" ? "Minimal visual UI clutter, maximizing focus paths" : "Đặt người dùng làm trọng tâm, tối giản hóa trải nghiệm"}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">
                    {language === "en" ? "Agile sprint releases backed by Senior support teams" : "Hỗ trợ kỹ thuật 24/7 trực tiếp cùng Kỹ sư trưởng"}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GRID OF OUR CORE SERVICES */}
      <section id="our-core-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-20">
        <div className="space-y-3 mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {serviceItems.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                id={`core-service-card-${idx}`}
                key={idx}
                className="group relative p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Service tag & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>{language === "en" ? "Examine System Specifications" : "Tìm hiểu cấu trúc hệ thống"}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CALL TO ACTION INTERACTIVE TRIGGERS */}
      <section id="main-footer-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <div className="relative rounded-3xl bg-slate-900 py-12 px-6 sm:p-12 md:p-16 overflow-hidden text-center text-white">
          {/* Subtle cosmic background lights */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-120 h-120 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight">
              {t.footerCtaTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
              {t.footerCtaDesc}
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="footer-cta-action-btn"
                onClick={onBookBriefing}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/20"
              >
                {t.footerCtaBtn}
              </button>
              <button
                id="footer-cta-secondary-btn"
                onClick={onExplore}
                className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all"
              >
                {language === "en" ? "Browse Our Work" : "Khám phá danh mục giải pháp"}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
