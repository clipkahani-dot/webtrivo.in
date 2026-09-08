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
          <h2 className="text-2xl font-bold text-slate-900">Feature Comparison Overview</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">Side-by-side breakdown of all deliverables</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
                <th className="p-4 sm:p-5 font-bold">Deliverable / Feature</th>
                <th className="p-4 sm:p-5 font-bold text-center">Starter (₹4,999)</th>
                <th className="p-4 sm:p-5 font-bold text-center text-brand-blue bg-sky-50/70">Clinic Pro (₹9,999)</th>
                <th className="p-4 sm:p-5 font-bold text-center">Ultimate (₹14,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-4 sm:p-5 font-medium">Delivery Timeline</td>
                <td className="p-4 sm:p-5 text-center font-bold">2–3 Days</td>
                <td className="p-4 sm:p-5 text-center font-bold text-brand-blue bg-sky-50/40">2–3 Days</td>
                <td className="p-4 sm:p-5 text-center font-bold">3–4 Days</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">Quick Demo Preview Upfront</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-sky-50/40">✓ Included</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">Free Netlify Cloud Hosting & SSL</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Free</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-sky-50/40">✓ Free</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Free</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">1-Click WhatsApp Booking / Lead Flow</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-sky-50/40">✓ Priority Flow</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Multi-Service Flow</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">Google Reviews & Rating Showcase</td>
                <td className="p-4 sm:p-5 text-center text-slate-400">Basic</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-sky-50/40">✓ 4.9★ Live Badge</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Full Reviews Carousel</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">Google Maps & Local Search Embed</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-sky-50/40">✓ Included</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Optimized</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">Video Testimonials Player</td>
                <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-sky-50/40">✓ Dual OPD/IPD Player</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Unlimited Video Wall</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">Client-Owned Domain Setup</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Guided</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-sky-50/40">✓ Guided</td>
                <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ 1-on-1 Assistance</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-medium">Post-Launch Bug Fix Support</td>
                <td className="p-4 sm:p-5 text-center font-semibold">7 Days</td>
                <td className="p-4 sm:p-5 text-center font-bold text-brand-blue bg-sky-50/40">7 Days Priority</td>
                <td className="p-4 sm:p-5 text-center font-bold text-emerald-700">14 Days Dedicated</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Plan Selector Decision Guide Card */}
        <div className="mt-10 bg-gradient-to-br from-slate-900 to-brand-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-slate-800 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold rounded-full border border-sky-400/30">
                💡 Need Help Deciding?
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans">
                Confused Between Starter (₹4,999) & Clinic Pro (₹9,999)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                • <strong>Choose Starter (₹4,999):</strong> If you run a local retail shop, single-service consultancy, or just need a high-speed digital visiting card with photos, timing, and Google Maps.<br/>
                • <strong>Choose Clinic Pro (₹9,999):</strong> If you are a Doctor, Clinic, Dental, Gym, or Salon where patients need to see your degrees, 15–20 treatments, and 4.9★ Google Reviews before booking.<br/>
                • <strong>Choose Ultimate (₹14,999):</strong> If you are a Hospital, Multi-Branch Center, or expanding brand needing real patient video interview players.
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
