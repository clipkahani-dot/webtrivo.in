import Pricing from '../components/Pricing'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import { WHATSAPP_MAIN_URL, PRICING_PLANS } from '../constants'

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Top Page Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-8 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-blue mb-4 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-brand-red mb-2">
                <Zap className="w-3.5 h-3.5 fill-brand-red" />
                Transparent Pricing Packages
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
                Plans & Detailed Comparison
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Simple one-time investment. Zero monthly agency lock-in traps. You own your domain 100%.
              </p>
            </div>
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition hover:scale-105 self-start md:self-auto"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Ask a Question on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Pricing Component */}
      <Pricing />

      {/* Comparison Feature Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-brand-blue mb-2">
            📊 Clear & Honest Breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Compare Packages Side-by-Side
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            See exactly what is included and what is excluded in each package so you never pay for features you don't need.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 sm:p-5 font-bold w-1/3">Key Feature / Deliverable</th>
                <th className="p-4 sm:p-5 font-bold text-center w-1/5">
                  <div>Starter Profile</div>
                  <div className="text-sm sm:text-base font-black text-amber-400 mt-0.5">₹4,999</div>
                  <div className="text-[10px] text-slate-300 font-normal">1-Page Express</div>
                </th>
                <th className="p-4 sm:p-5 font-bold text-center w-1/4 bg-brand-blue text-white relative">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                    Most Popular ⭐
                  </span>
                  <div className="mt-1">Clinic Pro</div>
                  <div className="text-sm sm:text-base font-black text-white mt-0.5">₹9,999</div>
                  <div className="text-[10px] text-sky-100 font-normal">Multi-Section Complete</div>
                </th>
                <th className="p-4 sm:p-5 font-bold text-center w-1/5">
                  <div>Ultimate Brand</div>
                  <div className="text-sm sm:text-base font-black text-emerald-400 mt-0.5">₹14,999</div>
                  <div className="text-[10px] text-slate-300 font-normal">Flagship Scale</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              
              {/* Category 1: Website Architecture */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  📐 1. Architecture, Pages & Treatments Scope
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Page Structure & Size
                  <p className="text-[11px] font-normal text-slate-500">Overall layout and section volume</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-slate-800">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">1 Single Express Page</span>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold bg-sky-50/50 text-brand-blue">
                  <span className="px-2.5 py-1 rounded-lg bg-sky-100 text-brand-blue border border-sky-200">Multi-Section (5+ Sections)</span>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800">Custom Multi-Department</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Services / Treatments Showcase
                  <p className="text-[11px] font-normal text-slate-500">Number of treatments client can list</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-slate-600">
                  Up to 5 Basic Services
                </td>
                <td className="p-4 sm:p-5 text-center font-bold bg-sky-50/50 text-emerald-700">
                  ✓ 15–20 In-Depth Treatments (with cards & icons)
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Unlimited Treatments (Multi-category)
                </td>
              </tr>

              {/* Category 2: Medical & Clinic Specific Features */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  🩺 2. Medical & Clinic Authority (Doctor / Patient Conversion)
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Doctor / Staff Profile & Qualifications
                  <p className="text-[11px] font-normal text-slate-500">MBBS/MD degrees, years of experience badge</p>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Full Doctor Profile + Degrees
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Multi-Specialist Team Directory
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  OPD & Consultation Timings Schedule
                  <p className="text-[11px] font-normal text-slate-500">Morning & evening shift matrix for appointments</p>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">(Only basic shop hours)</div>
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Interactive OPD Shifts Table
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Multi-Branch OPD Timings Matrix
                  </span>
                </td>
              </tr>

              {/* Category 3: Trust, Social Proof & Video */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  ⭐ 3. Social Proof, Video & Lead Flow
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Google Reviews & Star Rating Showcase
                  <p className="text-[11px] font-normal text-slate-500">Patient trust badge and review cards</p>
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500">
                  Basic text rating only
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  ✓ 4.9★ Live Badge + Google Reviews Grid
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Interactive Review Carousel + Google QR Code
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Patient Video Testimonials Player
                  <p className="text-[11px] font-normal text-slate-500">Embedded real video clips of recovered patients</p>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">(Available as add-on)</div>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Real OPD/IPD Patient Video Wall
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  WhatsApp Lead Flow & CTAs
                  <p className="text-[11px] font-normal text-slate-500">Pre-filled messages for instant patient inquiries</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-medium text-slate-700">
                  1 Direct Contact Button
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  ✓ 4 Sticky CTAs + Treatment-Specific Booking
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Smart Multi-Department Routing
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Interactive Cost / Budget Calculator
                  <p className="text-[11px] font-normal text-slate-500">Allows patients to calculate treatment estimates</p>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Interactive Treatment Calculator
                  </span>
                </td>
              </tr>

              {/* Category 4: SEO, Hosting & Speed */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  ⚡ 4. Speed, SEO, Hosting & Guarantee
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Google SEO & Maps Setup
                  <p className="text-[11px] font-normal text-slate-500">Visibility in local search searches</p>
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-600">
                  Basic Title & Meta Tags
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  ✓ Full Local SEO + Google Maps Rank Ready
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Advanced Medical Schema Markup
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Cloud Hosting & SSL Certificate
                  <p className="text-[11px] font-normal text-slate-500">High-speed global Netlify edge servers</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Free Lifetime (₹0/mo)
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  ✓ Free Lifetime (₹0/mo)
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Free Lifetime (₹0/mo)
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Domain Ownership Setup
                  <p className="text-[11px] font-normal text-slate-500">Purchased under your own Gmail account</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-medium text-slate-700">
                  ✓ 100% Client-Owned (~₹800 direct)
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-brand-blue">
                  ✓ 100% Client-Owned (~₹800 direct)
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ 100% Client-Owned + Custom Email (@brand.in)
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Delivery Timeline
                  <p className="text-[11px] font-normal text-slate-500">Days required to go live with demo</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-slate-900">
                  2–3 Working Days
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-brand-blue">
                  2–3 Working Days
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-slate-900">
                  3–4 Working Days
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Post-Launch Bug Fix Support
                  <p className="text-[11px] font-normal text-slate-500">Free technical support after delivery</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-semibold text-slate-700">
                  7 Days Standard
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-brand-blue">
                  7 Days Dedicated Priority
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  14 Days Direct VIP Support
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* 3 Clear Client Scenarios (Pitch Guide for Clients) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 relative">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-800">
              Pick Starter (₹4,999) If:
            </span>
            <h4 className="text-base font-extrabold text-slate-900 mt-3 mb-2">
              You Just Need a Fast Digital Visiting Card
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Best for small local shops, single-service freelancers, or solo consultants who only want their address on Google Maps, basic phone number, and a direct WhatsApp button.
            </p>
            <p className="text-[11px] font-bold text-rose-600 mt-3">
              ✕ Avoid if you are a clinic needing OPD timings or 15+ treatments.
            </p>
          </div>

          <div className="bg-sky-50/80 border-2 border-brand-blue rounded-3xl p-6 relative shadow-lg">
            <span className="px-3 py-1 rounded-full text-[11px] font-black bg-brand-blue text-white shadow-sm">
              ⭐ Pick Clinic Pro (₹9,999) If (Recommended):
            </span>
            <h4 className="text-base font-extrabold text-slate-900 mt-3 mb-2">
              You Are a Clinic, Doctor, Dental, Salon or Gym
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Patients never book appointments without seeing your <strong>MBBS/MD degrees</strong>, <strong>OPD morning/evening shift timings</strong>, and <strong>15–20 detailed treatments</strong> (like <em>drrajeshpathak.com</em>). This package delivers maximum return on investment.
            </p>
            <p className="text-[11px] font-bold text-emerald-700 mt-3">
              ✓ 90% of our successful medical clients choose this package.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 relative">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-900 text-white">
              Pick Ultimate (₹14,999) If:
            </span>
            <h4 className="text-base font-extrabold text-slate-900 mt-3 mb-2">
              You Are a Hospital or Multi-Branch Center
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Best for multi-speciality hospitals and expanding brands that need embedded <strong>video testimonial players</strong> of patients, multiple branch locations, and interactive cost calculators.
            </p>
            <p className="text-[11px] font-bold text-brand-blue mt-3">
              ✓ Includes 14 days direct developer VIP support.
            </p>
          </div>

        </div>

        {/* WhatsApp Callout Card */}
        <div className="bg-gradient-to-br from-slate-900 to-brand-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-slate-800 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-400/30">
                💬 Still Confused Which Plan Fits You?
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans">
                Tell Us Your Business Type & We Will Suggest The Right Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Send us a message on WhatsApp. We will analyze your requirements and tell you honestly whether you need Starter (₹4,999) or Clinic Pro (₹9,999) — zero pressure, zero upsell traps.
              </p>
            </div>

            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl flex items-center gap-2.5 transition hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Ask Advice on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
