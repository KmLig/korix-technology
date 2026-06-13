/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Language, NavTab } from "../types";
import { TRANSLATIONS } from "../data";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Terminal,
  ArrowUp,
} from "lucide-react";

interface FooterProps {
  language: Language;
  setTab: (tab: NavTab) => void;
}

export default function Footer({ language, setTab }: FooterProps) {
  const t = TRANSLATIONS[language];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="global-footer"
      className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core detailed links grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900 text-left">
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-4">
            <div
              className="flex items-center space-x-2.5 cursor-pointer"
              onClick={() => setTab("home")}
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-display font-bold text-base flex items-center justify-center">
                K
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                KORIX
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {language === "en"
                ? "Scalable software engineering meets gorgeous user interface designs. Building modular enterprise-ready digital ecosystems."
                : "Kiến trúc mã nguồn chuẩn mực gặp gỡ thiết kế trực quan hiện đại. Đơn vị cung cấp giải pháp chuyển đổi số bền vững."}
            </p>

            <div className="space-y-2.5 text-xs text-slate-500 pt-2">
              <p className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-2 text-blue-500 shrink-0" />
                <span>Ho Chi Minh City</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-blue-500 shrink-0" />
                <span>liaison@korix.tech</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-blue-500 shrink-0" />
                <span>+84 (0) 902 xxx xxx</span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-xs sm:text-sm uppercase tracking-wider">
              {language === "en" ? "Company Navigation" : "Định Hướng"}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setTab("home")}
                  className="hover:text-blue-400 hover:underline transition-all"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTab("solutions")}
                  className="hover:text-blue-400 hover:underline transition-all"
                >
                  {t.navSolutions}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTab("services")}
                  className="hover:text-blue-400 hover:underline transition-all"
                >
                  {t.navServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTab("about")}
                  className="hover:text-blue-400 hover:underline transition-all"
                >
                  {t.navAbout}
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance spec certifications column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-white text-xs sm:text-sm uppercase tracking-wider">
              {language === "en"
                ? "Engineering Standards"
                : "Tiêu Chuẩn Lập Trình"}
            </h4>
            <div className="space-y-4 text-xs">
              <div className="flex items-start">
                <Shield className="w-4 h-4 mr-2.5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">ISO 27001 Security</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    High-security endpoints guarding sensitive corporate patient
                    accounts.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Terminal className="w-4 h-4 mr-2.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    Full Type-Safety Rigor
                  </p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Type-safe linted pipelines matching global enterprise source
                    configurations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>
            © {new Date().getFullYear()} Korix Technology. All rights reserved.
            Built with precision.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={handleScrollToTop}
              className="flex items-center text-slate-500 hover:text-white transition-colors"
            >
              <span>{language === "en" ? "Top" : "Về đầu trang"}</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
