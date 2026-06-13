/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language } from "../types";
import { TRANSLATIONS, IMAGES } from "../data";
import { Hammer, Code2, Cpu, Repeat, Sparkles, CheckCircle2, ChevronRight, Globe, Lock, Code } from "lucide-react";

interface ServicesSectionProps {
  language: Language;
  onBookBriefing: () => void;
}

export default function ServicesSection({
  language,
  onBookBriefing
}: ServicesSectionProps) {
  const t = TRANSLATIONS[language];

  const techSuite = [
    { name: "React / Vite", category: "Frontend", level: "Senior Expertise" },
    { name: "TypeScript", category: "Type safety", level: "Strict Conformity" },
    { name: "Node.js / Express", category: "Backend", level: "Hyper-throughput" },
    { name: "PostgreSQL", category: "Data Storage", level: "Distributed Shards" },
    { name: "AWS / Google Cloud", category: "Cloud Platform", level: "Multi-region Failover" },
    { name: "Kubernetes / Docker", category: "Virtualization", level: "Elastic Orchestration" }
  ];

  const processSteps = [
    {
      num: "01",
      title: t.process1Title,
      desc: t.process1Desc
    },
    {
      num: "02",
      title: t.process2Title,
      desc: t.process2Desc
    },
    {
      num: "03",
      title: t.process3Title,
      desc: t.process3Desc
    },
    {
      num: "04",
      title: t.process4Title,
      desc: t.process4Desc
    }
  ];

  return (
    <div id="services-section-root" className="animate-fade-in space-y-24 pb-16">
      
      {/* 1. HERO BANNER MAIN */}
      <section id="services-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-xs font-semibold uppercase tracking-wider font-mono">
              <Code className="w-3.5 h-3.5" />
              <span>{language === "en" ? "PROFESSIONAL DELIVERY" : "DỊCH VỤ CHUYÊN NGHIỆP"}</span>
            </div>

            <h1 
              id="services-title" 
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight uppercase"
            >
              {t.servicesHeroTitle}
            </h1>

            <p id="services-desc" className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {t.servicesHeroDesc}
            </p>

            <button
              id="services-hero-cta"
              onClick={onBookBriefing}
              className="px-6 py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all inline-flex items-center space-x-2"
            >
              <span>{t.ctaBookBriefing}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image (Image 14 - Glass Room Meeting) */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 bg-slate-150">
              <img 
                src={IMAGES.teamMeeting} 
                alt="Korix team strategic engineering session inside glass room"
                className="w-full h-full object-cover select-none pointer-events-none" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODERN TECHNOLOGY SYSTEM METRICS */}
      <section id="technology-suite" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            {t.techStackTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t.techStackSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
          {techSuite.map((tech, idx) => (
            <div 
              id={`tech-node-card-${idx}`}
              key={idx}
              className="p-5 bg-white rounded-xl border border-slate-100 hover:border-blue-150 hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block">
                  {tech.category}
                </span>
                <p className="font-display font-bold text-slate-900 text-sm sm:text-base">
                  {tech.name}
                </p>
                <p className="text-[11px] text-slate-400 font-mono font-medium">
                  {tech.level}
                </p>
              </div>
              <div className="p-2 bg-slate-50 text-blue-600 rounded-lg">
                <Code className="w-4.5 h-4.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WORKING WORKFLOW PROCESS */}
      <section id="workflow-steps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            {t.processTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t.processSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {processSteps.map((step, idx) => (
            <div 
              id={`workflow-step-card-${idx}`}
              key={idx}
              className="relative p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:bg-white hover:border-blue-150 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <span className="font-display font-black text-3xl text-blue-100 group-hover:text-blue-200 block">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY TRUST US? FEATURES SECTION (Image 8) */}
      <section id="why-trust-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos (Image 8) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 bg-slate-150">
              <img 
                src={IMAGES.officeSkyline} 
                alt="Korix executive workspace corridor looking out at highrise city skyscraper"
                className="w-full h-full object-cover select-none pointer-events-none" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Detailed Points */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                {t.trustTitle}
              </h2>
              <p className="text-slate-550 text-sm sm:text-base mt-2">
                {t.trustSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              {/* Trust point 1 */}
              <div id="trust-point-1" className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-950">
                    {t.trust1Title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {t.trust1Desc}
                  </p>
                </div>
              </div>

              {/* Trust point 2 */}
              <div id="trust-point-2" className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-950">
                    {t.trust2Title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {t.trust2Desc}
                  </p>
                </div>
              </div>

              {/* Trust point 3 */}
              <div id="trust-point-3" className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-950">
                    {t.trust3Title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {t.trust3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
