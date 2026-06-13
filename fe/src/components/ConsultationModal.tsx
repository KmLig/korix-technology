/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";
import { X, Check, Calendar, Mail, Building, User, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  language
}: ConsultationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [projectCategory, setProjectCategory] = useState<string>("Enterprise Software");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirements: "",
    date: "",
    additionalContext: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = TRANSLATIONS[language];

  if (!isOpen) return null;

  const categories = [
    { id: "enterprise", label: "Enterprise Software & Cloud Platforms", labelVi: "Phần Mềm Doanh Nghiệp & Cloud" },
    { id: "ai", label: "AI Integration & Process Automation", labelVi: "Tích Hợp AI & Tự Động Hóa" },
    { id: "uiux", label: "Modern Design System & Custom UI/UX", labelVi: "Hệ Thống UI/UX & Thiết Kế" },
    { id: "other", label: "General Technology Consult", labelVi: "Tư Vấn Kỹ Thuật Tổng Hợp" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as any);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert(language === "en" ? "Please fill in your name and email." : "Vui lòng nhập họ tên và email liên hệ.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      requirements: "",
      date: "",
      additionalContext: ""
    });
    setProjectCategory("Enterprise Software");
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div id="consultation-modal-root" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Dim Backdrop */}
      <div 
        id="modal-backdrop" 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Real-time Popup Container */}
      <div 
        id="modal-container"
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header bar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 id="modal-heading" className="font-display font-bold text-lg text-slate-900">
              {t.ctaInquireTitle}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Secure SSL Connection | Korix Engineering
            </p>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic step states indicators */}
        {!isSubmitted && (
          <div className="px-6 pt-5 pb-1 flex items-center justify-between border-b border-slate-100/60">
            <div className="flex items-center space-x-1 flex-1">
              {/* Step indicator 1 */}
              <div className={`flex items-center space-x-1.5 ${step >= 1 ? "text-blue-600 font-semibold" : "text-slate-400"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs border ${step > 1 ? "bg-blue-600 text-white border-blue-600" : step === 1 ? "border-blue-600 text-blue-600" : "border-slate-300"}`}>
                  {step > 1 ? <Check className="w-3 h-3" /> : "1"}
                </span>
                <span className="text-xs hidden sm:inline">{t.formStep1}</span>
              </div>
              <div className={`h-px flex-1 ${step >= 2 ? "bg-blue-300" : "bg-slate-200"}`} />
              
              {/* Step indicator 2 */}
              <div className={`flex items-center space-x-1.5 ${step >= 2 ? "text-blue-600 font-semibold" : "text-slate-400"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs border ${step > 2 ? "bg-blue-600 text-white border-blue-600" : step === 2 ? "border-blue-600 text-blue-600" : "border-slate-300"}`}>
                  {step > 2 ? <Check className="w-3 h-3" /> : "2"}
                </span>
                <span className="text-xs hidden sm:inline">{t.formStep2}</span>
              </div>
              <div className={`h-px flex-1 ${step >= 3 ? "bg-blue-300" : "bg-slate-200"}`} />
              
              {/* Step indicator 3 */}
              <div className={`flex items-center space-x-1.5 ${step >= 3 ? "text-blue-600 font-semibold" : "text-slate-400"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs border ${step === 3 ? "border-blue-600 text-blue-600 font-semibold" : "border-slate-300"}`}>
                  3
                </span>
                <span className="text-xs hidden sm:inline">{t.formStep3}</span>
              </div>
            </div>
          </div>
        )}

        {/* Form Body Viewport */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSubmitted ? (
            <div id="submit-success-view" className="text-center py-8 px-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mb-5 animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900 mb-3">
                {language === "en" ? "Booking Confirmed!" : "Đăng Ký Thành Công!"}
              </h4>
              <p className="text-slate-600 text-sm max-w-md leading-relaxed mb-6">
                {t.formSuccess}
              </p>

              {/* Submitted summaries */}
              <div className="text-left w-full max-w-sm bg-slate-50 border border-slate-100 rounded-xl p-4.5 space-y-2 mb-8">
                <div className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                  PROJECT TICKET SUMMARY
                </div>
                <div className="text-sm font-medium text-slate-800 flex justify-between">
                  <span className="text-slate-400">FullName:</span>
                  <span>{formData.name}</span>
                </div>
                <div className="text-sm font-medium text-slate-800 flex justify-between">
                  <span className="text-slate-400">Business Email:</span>
                  <span>{formData.email}</span>
                </div>
                <div className="text-sm font-medium text-slate-800 flex justify-between">
                  <span className="text-slate-400">Company Name:</span>
                  <span>{formData.company || "N/A"}</span>
                </div>
                <div className="text-sm font-medium text-slate-800 flex justify-between">
                  <span className="text-slate-400">Preferred Date:</span>
                  <span className="text-blue-600">{formData.date || "ASAP"}</span>
                </div>
                <div className="text-sm font-medium text-slate-800 flex justify-between">
                  <span className="text-slate-400">Focus Core:</span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-semibold">{projectCategory}</span>
                </div>
              </div>

              <button
                id="reset-form-btn"
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-colors"
              >
                {language === "en" ? "Return to Site" : "Quay Lại Trang Chủ"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* STEP 1: Categories selector */}
              {step === 1 && (
                <div id="step-1-content" className="space-y-4 animate-fade-in">
                  <label className="block text-sm font-bold text-slate-800 uppercase tracking-wide">
                    {language === "en" ? "What kind of project do you want to build?" : "Bạn đang muốn triển khai giải pháp nào?"}
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {categories.map((cat) => {
                      const isSelected = projectCategory === cat.label;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setProjectCategory(cat.label)}
                          className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between ${
                            isSelected
                              ? "border-blue-600 bg-blue-50/50 text-blue-900 font-semibold shadow-sm shadow-blue-500/5 label"
                              : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <div>
                            <p className="font-semibold">{language === "en" ? cat.label : cat.labelVi}</p>
                            <p className="text-xs text-slate-400 mt-0.5 font-normal">
                              {cat.id === "enterprise" && (language === "en" ? "Highly scalable systems & custom APIs" : "Các ứng dụng chịu tải cao & kết nối hệ thống")}
                              {cat.id === "ai" && (language === "en" ? "Machine learning models & automation channels" : "Hệ học máy, nhận dạng ảnh và tự động hóa")}
                              {cat.id === "uiux" && (language === "en" ? "Visual brand guidelines & frontend execution" : "Sáng tạo giao diện và tối ưu tương tác người dùng")}
                              {cat.id === "other" && (language === "en" ? "In-depth engineering audits & consultations" : "Tư vấn lộ trình kỹ thuật và giám sát phát triển")}
                            </p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300"}`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Basic Contacts */}
              {step === 2 && (
                <div id="step-2-content" className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center">
                      <User className="w-3.5 h-3.5 mr-1" />
                      {t.formName} <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={language === "en" ? "e.g. John Doe" : "Ví dụ: Nguyễn Văn A"}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center">
                      <Mail className="w-3.5 h-3.5 mr-1" />
                      {t.formEmail} <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center">
                      <Building className="w-3.5 h-3.5 mr-1" />
                      {t.formCompany}
                    </label>
                    <input
                      id="input-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={language === "en" ? "e.g. Acme Corp" : "Tên doanh nghiệp của bạn"}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Planning Dates & Messages */}
              {step === 3 && (
                <div id="step-3-content" className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {t.formDate}
                    </label>
                    <input
                      id="input-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {t.formMessage}
                    </label>
                    <textarea
                      id="input-message"
                      name="additionalContext"
                      rows={4}
                      value={formData.additionalContext}
                      onChange={handleInputChange}
                      placeholder={language === "en" ? "Describe your systems scope, anticipated timeline, and user load..." : "Chia sẻ thêm về quy mô người dùng, tiến độ mong muốn, và hệ thống hiện hành..."}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons bar */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 bg-white sticky bottom-0">
                <button
                  id="prev-btn"
                  type="button"
                  onClick={handlePrev}
                  className={`px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center rounded-lg hover:bg-slate-50 ${
                    step === 1 ? "invisible" : ""
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 mr-1.5" />
                  {t.btnPrev}
                </button>

                {step < 3 ? (
                  <button
                    id="next-btn"
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm rounded-lg flex items-center cursor-pointer hover:shadow-lg transition-all"
                  >
                    <span>{t.btnNext}</span>
                    <ChevronRight className="w-4 h-4 ml-1.5" />
                  </button>
                ) : (
                  <button
                    id="submit-consultation"
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg flex items-center cursor-pointer hover:shadow-lg shadow-blue-500/15 transition-all"
                  >
                    <span>{t.formSubmit}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
