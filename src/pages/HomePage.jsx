import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import HowItWorks from '../components/HowItWorks'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Stethoscope, 
  Store, 
  Briefcase, 
  GraduationCap,
  Calculator as CalcIcon,
  HelpCircle,
  XCircle,
  Layers
} from 'lucide-react'
import { WHATSAPP_MAIN_URL, PRICING_PLANS, NICHES_DATA, getWhatsAppUrl } from '../constants'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Main Hero Section (High Impact, Mobile Optimized) */}
      <Hero />

      {/* 2. Desktop-Only Official Brand Banner (Hidden on Mobile) */}
      <section className="hidden md:block py-6 bg-gradient-to-b from-white via-slate-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-300/40 group hover:shadow-sky-500/25 transition-all duration-500 bg-slate-950">
            <img 
              src="/images/webtrivo_banner.webp" 
              alt="Webtrivo AI Web Agency Official Banner" 
              width="1200"
              height="415"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Ambient Cyber Accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-8 right-8 flex items-center justify-between text-white text-xs font-semibold pointer-events-none">
              <span className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-bold">Webtrivo • AI Web Development Agency</span>
              </span>
              <span className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg hidden lg:inline">
                🚀 Fast 2–3 Days Launch • Pan-India Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Compact Industry Quick-Filter Strip */}
      <section className="py-6 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span>Tailored Solutions For:</span>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition shadow-sm"
              >
                <Stethoscope className="w-3.5 h-3.5 text-brand-blue" />
                <span>Doctors & Clinics</span>
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition shadow-sm"
              >
                <Store className="w-3.5 h-3.5 text-amber-500" />
                <span>Retail & Shops</span>
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition shadow-sm"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                <span>Lawyers & CAs</span>
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 hover:border-purple-500 hover:text-purple-600 transition shadow-sm"
              >
                <GraduationCap className="w-3.5 h-3.5 text-purple-500" />
                <span>Coaching</span>
              </Link>
            </div>

            <Link 
              to="/services" 
              className="text-xs font-extrabold text-brand-blue hover:underline flex items-center gap-1"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Flagship Live Proof Spotlight (Dr. Rajesh Pathak MD) */}
      <Portfolio />

      {/* 4. Compact 3-Tier Pricing Overview */}
      <section className="py-12 lg:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-brand-red border border-red-200 mb-2">
              Simple & Transparent Packages
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-sans">
              Choose Your Growth Plan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Quick demo preview on WhatsApp before 50% advance. 2–3 working days fast delivery.
            </p>
          </div>

          {/* 3 Compact Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular 
                    ? 'border-brand-blue bg-sky-50/50 shadow-xl' 
                    : 'border-slate-200 bg-white hover:border-sky-200 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-extrabold text-slate-900">{plan.name}</h3>
                    <span className="text-[11px] font-bold text-slate-500">{plan.delivery}</span>
                  </div>

                  {/* Scope Badge */}
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      <Layers className="w-3 h-3" />
                      {plan.scopeBadge}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 my-2">
                    <span className="text-3xl font-black text-slate-900 font-sans">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-medium">/ one-time</span>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">{plan.description}</p>

                  {/* Top Core Features */}
                  <div className="space-y-2 mb-3 border-t border-slate-100 pt-3">
                    {plan.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Prominent Exclusion for Starter / Lower Plans */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="mb-5 space-y-1.5 bg-rose-50/70 p-2.5 rounded-xl border border-rose-100">
                      {plan.notIncluded.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                          <XCircle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                          <span className="line-through decoration-rose-300 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <a
                    href={getWhatsAppUrl(plan.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-md ${
                      plan.popular 
                        ? 'bg-brand-red hover:bg-red-700 text-white' 
                        : 'bg-slate-900 hover:bg-brand-blue text-white'
                    }`}
                  >
                    <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="16" height="16" className="w-4 h-4 object-contain" />
                    <span>{plan.ctaText}</span>
                  </a>
                  <Link 
                    to="/pricing" 
                    className="block text-center text-[11px] font-bold text-brand-blue hover:underline py-1"
                  >
                    View Full Inclusions & Compare →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-700 hover:text-brand-blue bg-slate-100 hover:bg-sky-50 px-5 py-2.5 rounded-full border border-slate-200 transition"
            >
              <span>Explore Detailed Pricing Comparison & Domain Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. How It Works (Simple 4 Steps) */}
      <HowItWorks />

      {/* 6. Interactive Calculator Banner Teaser */}
      <section className="py-10 bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 shadow-lg">
                <CalcIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black font-sans">Want an Exact Budget Estimate?</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Customize pages, features, and add-ons with our Interactive Price Calculator.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                to="/calculator"
                className="px-6 py-3 bg-brand-blue hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition hover:scale-105 flex items-center gap-2"
              >
                <span>Open Price Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/faq"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl transition"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
