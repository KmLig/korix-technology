/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Language } from "../types";
import { TRANSLATIONS, CASE_STUDIES, SOLUTIONS_LIST, IMAGES } from "../data";
import { Layers2, Cpu, Check, LineChart, BarChart3, Sliders, Database, UserCheck, Shield, HelpCircle, Sparkles } from "lucide-react";

interface SolutionsSectionProps {
  language: Language;
  onBookBriefing: () => void;
}

export default function SolutionsSection({
  language,
  onBookBriefing
}: SolutionsSectionProps) {
  const t = TRANSLATIONS[language];

  // Interactive Sandbox state
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>("enterprise");
  const [activeUsersValue, setActiveUsersValue] = useState<number>(10000); // 10k to 1M
  const [dbShardsValue, setDbShardsValue] = useState<number>(3); // 1 to 16 shards
  const [deliverySpeed, setDeliverySpeed] = useState<"standard" | "expedited" | "hyper">("standard");

  // Calculated values
  const [estimatedBudget, setEstimatedBudget] = useState<number>(18000);
  const [estimatedSprints, setEstimatedSprints] = useState<number>(6);
  const [currentRecommendedStack, setCurrentRecommendedStack] = useState<string[]>(["React", "NodeJS", "PostgreSQL"]);

  // Calculate whenever params modify
  useEffect(() => {
    // find base price and multipliers
    let basePrice = 12000;
    let categoryMultiplier = 1.0;
    let stack = ["React", "Express", "PostgreSQL", "Docker"];

    if (selectedSolutionId === "ai") {
      basePrice = 18000;
      categoryMultiplier = 1.3;
      stack = ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker", "Nvidia Triton"];
    } else if (selectedSolutionId === "cloud") {
      basePrice = 15000;
      categoryMultiplier = 1.15;
      stack = ["AWS", "Kubernetes", "TypeScript", "Node.js", "Redis", "Terraform"];
    } else if (selectedSolutionId === "data") {
      basePrice = 11000;
      categoryMultiplier = 1.25;
      stack = ["React", "D3.js", "Apache Kafka", "PostgreSQL", "Go", "ClickHouse"];
    } else if (selectedSolutionId === "health") {
      basePrice = 22000;
      categoryMultiplier = 1.4;
      stack = ["Next.js", "PostgreSQL", "GraphQL", "AWS KMS", "HIPAA Guard", "AuditTrail"];
    }

    // multiply based on active users (increase size adds to difficulty)
    // 10k = 1.0x, 1M = 2.0x
    const usersMultiplier = 1.0 + (activeUsersValue - 10000) / 1000000;

    // multiply based on DB shards
    // 1 shard = 1.0x, 10 shards = 1.35x
    const shardsMultiplier = 1.0 + (dbShardsValue - 1) * 0.05;

    // speed multiplier
    let speedMultiplier = 1.0;
    let sprints = 6;
    if (deliverySpeed === "standard") {
      speedMultiplier = 1.0;
      sprints = 6 + Math.ceil(dbShardsValue / 3);
    } else if (deliverySpeed === "expedited") {
      speedMultiplier = 1.3;
      sprints = 4 + Math.ceil(dbShardsValue / 4);
    } else if (deliverySpeed === "hyper") {
      speedMultiplier = 1.65;
      sprints = 3;
    }

    const calculatedCost = Math.round(basePrice * categoryMultiplier * usersMultiplier * shardsMultiplier * speedMultiplier);
    setEstimatedBudget(calculatedCost);
    setEstimatedSprints(sprints);
    setCurrentRecommendedStack(stack);

  }, [selectedSolutionId, activeUsersValue, dbShardsValue, deliverySpeed]);

  const toggleSolution = (id: string) => {
    setSelectedSolutionId(id);
  };

  return (
    <div id="solutions-section-root" className="animate-fade-in space-y-24 pb-16">
      
      {/* 1. HERO MAIN SECTION */}
      <section id="solutions-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-xs font-semibold uppercase tracking-wider font-mono">
            <Layers2 className="w-3.5 h-3.5" />
            <span>{language === "en" ? "GLOBAL ECOSYSTEM" : "HỆ SINH THÁI KHÁCH QUAN"}</span>
          </div>

          <h1 
            id="solutions-title" 
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight uppercase"
          >
            {t.solutionsHeroTitle}
          </h1>

          <p id="solutions-desc" className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {t.solutionsHeroDesc}
          </p>
        </div>

        {/* Large featured dashboard screenshot visual mock (Image 3) */}
        <div id="dashboard-mockup" className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900/5 aspect-[16/10] sm:aspect-[16/9] max-w-5xl mx-auto relative group">
          <img 
            src={IMAGES.analysisDashboard} 
            alt="Korix real-time analytics operational dashboard layout"
            className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* 2. THE SOLUTION ECOSYSTEM CARD LIST (Screen 2 style) */}
      <section id="solution-ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            {t.ecosystemTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t.ecosystemSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: AI & Industrial Automation (Image 6) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden relative">
              <img 
                src={IMAGES.warehouseRobotics} 
                alt="Automated robotic fulfillment storage warehouse"
                className="w-full h-full object-cover block select-none pointer-events-none" 
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                {language === "en" ? "Computer Vision" : "Thị Giác AI"}
              </span>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {t.sol1Title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t.sol1Desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex flex-wrap gap-2">
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">TensorFlow</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">FastAPI</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">Docker</span>
              </div>
            </div>
          </div>

          {/* Card 2: Cloud Ecosystem & Microservices (Image 4) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden relative">
              <img 
                src={IMAGES.lightSkyscraper} 
                alt="Light architecture office skyscraper building lines"
                className="w-full h-full object-cover block select-none pointer-events-none" 
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                {language === "en" ? "Microservices" : "Kiến Trúc Microservices"}
              </span>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {t.sol2Title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t.sol2Desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex flex-wrap gap-2">
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">AWS / GCP</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">Kubernetes</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">Node.js</span>
              </div>
            </div>
          </div>

          {/* Card 3: Data Analytics & Core Intelligence (Image 13) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden relative">
              <img 
                src={IMAGES.laptopCode} 
                alt="Laptop running programming code editor screen"
                className="w-full h-full object-cover block select-none pointer-events-none" 
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                {language === "en" ? "Big Data" : "Dữ Liệu Lớn"}
              </span>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {t.sol3Title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t.sol3Desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex flex-wrap gap-2">
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">React / D3</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">PostgreSQL</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">Apache Kafka</span>
              </div>
            </div>
          </div>

          {/* Card 4: Digital Healthcare & Secure Platforms (Image 7) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden relative">
              <img 
                src={IMAGES.healthLab} 
                alt="Pharma medical research healthcare lab"
                className="w-full h-full object-cover block select-none pointer-events-none" 
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                {language === "en" ? "Healthcare Tech" : "Y Tế Số"}
              </span>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {t.sol4Title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t.sol4Desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex flex-wrap gap-2">
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">Next.js</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">GraphQL</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">AWS KMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SOLUTIONS BUDGET ESTIMATOR SANDBOX */}
      <section id="solutions-estimator-sandbox" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="sandbox-card" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            {/* Left sliders side */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-blue-900/60 text-blue-300 rounded text-[10px] font-mono font-bold tracking-wider uppercase mb-2">
                  <Sliders className="w-3 h-3 mr-1" />
                  {language === "en" ? "KORIX ARCHITECT LAB" : "PHÒNG THIẾT KẾ KORIX"}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {t.calculatorTitle}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  {t.calculatorDesc}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="space-y-5 pt-2">
                {/* 1. Pick Categories Module */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                    {t.selectCategory}
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: "enterprise", label: "Enterprise Software", labelVi: "Hệ Quản Trị Lõi" },
                      { id: "ai", label: "AI & Automation", labelVi: "Hạ Tầng AI" },
                      { id: "data", label: "Realtime Analytics", labelVi: "Hồng Tâm Dữ Liệu" },
                      { id: "health", label: "Healthcare Node", labelVi: "Cổng Y Tế Bảo Mật" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        onClick={() => toggleSolution(btn.id)}
                        className={`px-3 py-2.5 text-xs font-bold rounded-lg transition-all border text-center ${
                          selectedSolutionId === btn.id
                            ? "bg-blue-600 border-blue-600 text-white shadow-md"
                            : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                        }`}
                      >
                        {language === "en" ? btn.label : btn.labelVi}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Range Active Users */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wide">{t.estimatedUsers}</span>
                    <span className="font-mono text-blue-400 font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900">
                      {activeUsersValue.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={activeUsersValue}
                    onChange={(e) => setActiveUsersValue(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono font-semibold">
                    <span>10,000</span>
                    <span>500,000</span>
                    <span>1,000,000+</span>
                  </div>
                </div>

                {/* 3. Range Database Shards */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wide">{t.databaseScale}</span>
                    <span className="font-mono text-blue-400 font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900">
                      {dbShardsValue} {dbShardsValue === 1 ? "Node / Shard" : "Distributed Shards"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="16"
                    step="1"
                    value={dbShardsValue}
                    onChange={(e) => setDbShardsValue(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono font-semibold">
                    <span>1 Node</span>
                    <span>8 Shards (Highly Scalable)</span>
                    <span>16 Shards (Hyper Distributed)</span>
                  </div>
                </div>

                {/* 4. Speed Preference Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                    {t.projectSpeed}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "standard", label: t.speedStandard },
                      { id: "expedited", label: t.speedExpedited },
                      { id: "hyper", label: t.speedHyper }
                    ].map((sp) => (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() => setDeliverySpeed(sp.id as any)}
                        className={`py-2 px-1 text-[10px] sm:text-xs font-bold rounded-md transition-all border text-center ${
                          deliverySpeed === sp.id
                            ? "bg-blue-600 border-blue-500 text-white shadow-sm"
                            : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                        }`}
                      >
                        {sp.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Estimator results side */}
            <div className="lg:col-span-5 bg-slate-950/60 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-[10px] font-mono font-bold text-slate-500 tracking-wider">
                  ARCHITECT DESIGN MATRIX
                </div>

                {/* Suggested tech stack */}
                <div className="space-y-1.5">
                  <p className="text-xs text-slate-400 font-semibold flex items-center">
                    <Database className="w-3.5 h-3.5 text-blue-500 mr-1" />
                    {t.optimalStack}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {currentRecommendedStack.map((item, idio) => (
                      <span key={idio} className="px-2 py-0.5 bg-blue-950 text-blue-300 font-mono text-[10px] font-semibold rounded border border-blue-900">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-900">
                  {/* development sprints */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">
                      {t.estimatedTime}
                    </span>
                    <span className="font-display font-extrabold text-lg sm:text-xl text-white">
                      {estimatedSprints} {language === "en" ? "Sprints" : "Phân Đoạn Sprints"}
                    </span>
                  </div>
                  
                  {/* security rating */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">
                      {language === "en" ? "Isolations Rating" : "Độ Cô Lập Bảo Mật"}
                    </span>
                    <span className="font-mono text-sm font-semibold text-emerald-400 flex items-center mt-1">
                      <Shield className="w-3.5 h-3.5 mr-1" />
                      {dbShardsValue > 8 ? "Tier-IV Isol" : "Tier-III Standard"}
                    </span>
                  </div>
                </div>

                <div className="space-y-0.5 pt-4 border-t border-slate-900">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                    {t.estimatedBudget}
                  </span>
                  <p className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-blue-400 transition-all">
                    ${estimatedBudget.toLocaleString()} <span className="text-xs text-slate-550 font-normal">USD</span>
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  id="get-blueprint-btn"
                  onClick={onBookBriefing}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-blue-600/10 active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.getBlueprintBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER CASE STUDIES (Success Stories from images translation) */}
      <section id="customer-success-stories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-20">
        <div className="space-y-3 mb-12">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            {t.caseStudiesTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t.caseStudiesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {CASE_STUDIES.map((cs, idcs) => (
            <div 
              id={`case-study-card-${idcs}`}
              key={idcs}
              className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {language === "en" ? cs.tag : cs.tagVi}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">{cs.client}</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-950 leading-relaxed">
                  {language === "en" ? cs.title : cs.titleVi}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {language === "en" ? "Result Achievement" : "Cột Mốc Đạt Được"}
                  </p>
                  <p className="font-display font-extrabold text-base sm:text-lg text-slate-900 mt-0.5">
                    {language === "en" ? cs.metric : cs.metricVi}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <UserCheck className="w-4.5 h-4.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
