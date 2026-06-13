/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Language } from "../types";
import { TRANSLATIONS, MILESTONES, TEAM_MEMBERS } from "../data";
import { Compass, Users, Award, Calendar, Lightbulb, Target, Trophy, ArrowRight, Linkedin, Mail } from "lucide-react";

interface AboutSectionProps {
  language: Language;
}

export default function AboutSection({
  language
}: AboutSectionProps) {
  const t = TRANSLATIONS[language];
  const [activeMilestoneYear, setActiveMilestoneYear] = useState<string>("2024");

  const coreValues = [
    {
      icon: Target,
      title: language === "en" ? "Our Mission" : "Sứ Mệnh",
      desc: language === "en" ? "Translate hyper-complex technical hurdles into streamlined, stable, and secure software ecosystems." : "Chuyển hóa các thách thức hệ thống phức tạp nhất thành các hệ sinh thái phần mềm tinh gọn, ổn định và an toàn cấu trúc."
    },
    {
      icon: Lightbulb,
      title: language === "en" ? "Our Vision" : "Tầm Nhìn",
      desc: language === "en" ? "Setting the gold standard for global digital transformations by combining beautiful interface design with extreme engineering precision." : "Thiết lập tiêu chuẩn vàng về chuyển đổi số toàn cầu nhờ sự nhất quán hoàn hảo giữa thiết kế giao diện tinh xảo và kỹ năng lập trình đỉnh cao."
    },
    {
      icon: Trophy,
      title: language === "en" ? "Our Culture" : "Giá Trị Cốt Lõi",
      desc: language === "en" ? "Continuous R&D, structural accountability, complete type-safety compliance, and transparent collaborative reporting." : "Nghiên cứu liên tục (R&D), đề cao trách nhiệm lập trình, cam kết an toàn mã nguồn và báo cáo tiến trình cuốn chiếu minh bạch."
    }
  ];

  return (
    <div id="about-section-root" className="animate-fade-in space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section id="about-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-xs font-semibold uppercase tracking-wider font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>{language === "en" ? "ABOUT KORIX" : "HÀNH TRÌNH PHÁT TRIỂN"}</span>
            </div>

            <h1 
              id="about-title" 
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight uppercase"
            >
              {t.aboutHeroTitle}
            </h1>

            <p id="about-desc" className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
              {t.aboutHeroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR VALUES CORE */}
      <section id="our-values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                id={`core-value-card-${idx}`}
                key={idx}
                className="bg-white rounded-2xl border border-slate-150 p-6 sm:p-8 flex flex-col space-y-4 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-12 h-12 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {val.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TIMELINE JOURNEY (Vietnamese "Hành Trình Phát Triển") */}
      <section id="milestones-timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            {t.timelineTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t.timelineSubtitle}
          </p>
        </div>

        {/* Dynamic Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left max-w-5xl mx-auto">
          {/* Timeline Buttons list */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto gap-2.5 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-100 pr-0 lg:pr-8">
            {MILESTONES.map((stone) => {
              const isActive = activeMilestoneYear === stone.year;
              return (
                <button
                  key={stone.year}
                  onClick={() => setActiveMilestoneYear(stone.year)}
                  className={`px-4.5 py-3 rounded-xl border text-sm font-bold flex items-center justify-between transition-all shrink-0 lg:shrink ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/10"
                      : "border-slate-200 text-slate-650 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-mono text-base">{stone.year}</span>
                  <span className="ml-4 text-xs font-medium uppercase tracking-wider opacity-85 hidden sm:inline">
                    {language === "en" ? stone.title : stone.titleVi}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card Detail */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 relative min-h-[160px] flex flex-col justify-center">
            {MILESTONES.map((stone) => {
              if (stone.year !== activeMilestoneYear) return null;
              return (
                <div key={stone.year} className="space-y-4 animate-fade-in text-left">
                  <div className="flex items-center space-x-3 text-blue-600 font-mono text-xs font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>ANNUAL REVIEW MODULE</span>
                  </div>
                  
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-tight">
                    {language === "en" ? stone.title : stone.titleVi}
                  </h3>
                  
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {language === "en" ? stone.description : stone.descriptionVi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP GRID (Images 9, 10, 11, 12) */}
      <section id="leadership-team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            {t.teamTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t.teamSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              id={`team-member-card-${idx}`}
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Photo Area */}
              <div className="aspect-square bg-slate-100 overflow-hidden relative group">
                <img 
                  src={member.imageUrl} 
                  alt={`Korix management profile photo: ${member.name}`}
                  className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 duration-500 transition-transform" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bio Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono font-medium text-blue-600">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed pt-2.5 border-t border-slate-100">
                    {member.bio}
                  </p>
                </div>

                {/* Social communication linkages */}
                <div className="flex items-center space-x-3 pt-3 text-slate-400 hover:text-slate-600 transition-colors">
                  <a href="#linkedin" className="hover:text-blue-600 transition-colors" title={`Connect with ${member.name} on LinkedIn`}>
                    <Linkedin className="w-4.5 h-4.5" />
                  </a>
                  <a href="#email" className="hover:text-blue-600 transition-colors" title={`Send email to ${member.name}`}>
                    <Mail className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PARTNERS STRIP */}
      <section id="corporate-partners" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-slate-50 rounded-3xl border border-slate-100">
        <div className="text-center space-y-4">
          <p className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
            {t.partnersTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-60">
            <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-500 tracking-tight font-mono select-none">
              TECHBANK
            </span>
            <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-500 tracking-tight font-mono select-none">
              LOGIWARE
            </span>
            <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-500 tracking-tight font-mono select-none">
              MEDISYNC
            </span>
            <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-500 tracking-tight font-mono select-none">
              ECORP
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
