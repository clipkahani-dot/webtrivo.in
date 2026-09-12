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
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="20" height="20" className="w-5 h-5 object-contain" />
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
                  <div className="text-[10px] text-slate-300 font-normal">1-Page Express Card</div>
                </th>
                <th className="p-4 sm:p-5 font-bold text-center w-1/4 bg-brand-blue text-white relative">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                    Most Popular ⭐
                  </span>
                  <div className="mt-1">Growth Business Pro</div>
                  <div className="text-sm sm:text-base font-black text-white mt-0.5">₹9,999</div>
                  <div className="text-[10px] text-sky-100 font-normal">Multi-Section Complete</div>
                </th>
                <th className="p-4 sm:p-5 font-bold text-center w-1/5">
                  <div>Ultimate Brand</div>
                  <div className="text-sm sm:text-base font-black text-emerald-400 mt-0.5">₹14,999</div>
                  <div className="text-[10px] text-slate-300 font-normal">Multi-Location Scale</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              
              {/* Category 1: Website Architecture & Scope */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  📐 1. Architecture, Pages & Catalog Scope
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Page Layout & Structure
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
                  Services / Products / Treatments Catalog
                  <p className="text-[11px] font-normal text-slate-500">Number of services, products or treatments listed</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-slate-600">
                  Up to 5 Basic Items
                </td>
                <td className="p-4 sm:p-5 text-center font-bold bg-sky-50/50 text-emerald-700">
                  ✓ 15–20 Detailed Items (with cards, pricing & descriptions)
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Unlimited Catalog (Multi-category & filters)
                </td>
              </tr>

              {/* Category 2: Credibility, Team & Booking Schedule */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  💼 2. Business Credibility, Team Profile & Timings Schedule
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Founder, Doctor & Team Profile Showcase
                  <p className="text-[11px] font-normal text-slate-500">Professional qualifications, degrees, experience & credentials</p>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Full Profile with Degrees & Experience
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
                  Working Hours & Shift / Consultation Schedule
                  <p className="text-[11px] font-normal text-slate-500">Morning & evening shifts, consultation slots or batch timings</p>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-200">
                    ✕ Not Included
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">(Only basic opening hours text)</div>
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Interactive Shifts / Schedule Table
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
                    ✓ Multi-Location Shift & Batch Matrix
                  </span>
                </td>
              </tr>

              {/* Category 3: Customer Trust, Video & Leads */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  ⭐ 3. Customer Reviews, Video Proof & WhatsApp Leads
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Google Reviews & Star Rating Showcase
                  <p className="text-[11px] font-normal text-slate-500">Verified customer trust badge and review cards</p>
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500">
                  Basic text rating only
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  ✓ 4.9★ Live Badge + Reviews Grid
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Interactive Review Carousel + Google QR Code
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Customer Video Testimonials Player
                  <p className="text-[11px] font-normal text-slate-500">Embedded real video interviews of satisfied clients / patients</p>
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
                    ✓ Full Video Testimonials Wall
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Direct WhatsApp Action CTAs
                  <p className="text-[11px] font-normal text-slate-500">Pre-filled messages for instant customer inquiries</p>
                </td>
                <td className="p-4 sm:p-5 text-center font-medium text-slate-700">
                  1 Direct Contact Button
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  ✓ 4 Sticky CTAs + Service-Specific Inquiries
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Smart Multi-Department Routing
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Interactive Price / Cost Calculator
                  <p className="text-[11px] font-normal text-slate-500">Allows customers to estimate service/product budget</p>
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
                    ✓ Interactive Cost Estimator
                  </span>
                </td>
              </tr>

              {/* Category 4: Speed, SEO, Hosting & Guarantee */}
              <tr className="bg-slate-100/80 font-bold text-slate-900 text-xs uppercase tracking-wider">
                <td colSpan={4} className="p-3.5 px-5 bg-slate-100 text-slate-800">
                  ⚡ 4. Speed, Local SEO, Cloud Hosting & Support
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="p-4 sm:p-5 font-semibold text-slate-900">
                  Google Local Search & SEO Setup
                  <p className="text-[11px] font-normal text-slate-500">Google search index and local Google Maps presence</p>
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-600">
                  Basic Title & Meta Tags
                </td>
                <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-emerald-700">
                  ✓ Full Local SEO + Google Maps Rank Ready
                </td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">
                  ✓ Advanced Business & Schema Markup
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
                  <p className="text-[11px] font-normal text-slate-500">Purchased directly under your own account</p>
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

        {/* 3 Clear Client Scenarios (Pitch Guide for All Businesses) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 relative">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-800">
              Pick Starter (₹4,999) If:
            </span>
            <h4 className="text-base font-extrabold text-slate-900 mt-3 mb-2">
              You Need a Fast Digital Visiting Card
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Best for small local shops, freelance consultants, solo lawyers, repair technicians, or home businesses who only need their office location on Google Maps, basic phone number, photo gallery, and a direct WhatsApp chat button.
            </p>
            <p className="text-[11px] font-bold text-rose-600 mt-3">
              ✕ Avoid if you need team profiles, shift timings, or 15+ detailed services.
            </p>
          </div>

          <div className="bg-sky-50/80 border-2 border-brand-blue rounded-3xl p-6 relative shadow-lg">
            <span className="px-3 py-1 rounded-full text-[11px] font-black bg-brand-blue text-white shadow-sm">
              ⭐ Pick Growth Pro (₹9,999) If (Recommended):
            </span>
            <h4 className="text-base font-extrabold text-slate-900 mt-3 mb-2">
              You Are a Clinic, Showroom, Salon, Gym, CA or Coaching
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Customers never book without seeing your <strong>team qualifications</strong>, <strong>morning/evening shift timings</strong>, <strong>15–20 detailed services/products</strong>, and verified <strong>4.9★ Google Reviews</strong>. This package delivers the highest client conversion rate.
            </p>
            <p className="text-[11px] font-bold text-emerald-700 mt-3">
              ✓ 90% of our local business & clinic clients choose this package.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 relative">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-900 text-white">
              Pick Ultimate (₹14,999) If:
            </span>
            <h4 className="text-base font-extrabold text-slate-900 mt-3 mb-2">
              You Have Multiple Branches or Need Video Proof
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Best for multi-branch showrooms, hospitals, regional diagnostic centers, or expanding brands that need an embedded <strong>video review wall</strong> of happy customers, branch directory, and custom price estimators.
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
                Send us a message on WhatsApp. We will analyze your requirements and tell you honestly whether you need Starter (₹4,999) or Growth Business Pro (₹9,999) — zero pressure, zero upsell traps.
              </p>
            </div>

            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl flex items-center gap-2.5 transition hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="20" height="20" className="w-5 h-5 object-contain" />
              <span>Ask Advice on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
