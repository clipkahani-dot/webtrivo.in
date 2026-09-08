import { 
  ShieldCheck, 
  HeartHandshake, 
  Zap, 
  Clock, 
  Smartphone, 
  Headphones,
  CheckCircle2,
  MapPin,
  Globe,
  MessageCircle
} from 'lucide-react'
import { LOCATION, SERVICE_AREA, DELIVERY_TIME } from '../constants'

export default function WhyUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'AI-Powered Speed & Precision',
      desc: 'We use advanced AI-assisted coding and design workflows to build clean, ultra-fast, bug-free websites in just 2–3 working days.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First & Ultra Fast',
      desc: 'Over 90% of your visitors browse on mobile. We engineer lightweight, mobile-responsive pages that load in 1–2 seconds.'
    },
    {
      icon: Globe,
      title: '100% Client-Owned Domain',
      desc: 'Your domain is purchased directly under your own Gmail and payment account. You retain 100% ownership with zero agency lock-in.'
    },
    {
      icon: ShieldCheck,
      title: 'Free Cloud Hosting & SSL',
      desc: 'Hosted on Netlify high-speed global CDN with lifetime free SSL (🔒 security padlock) and ₹0 recurring hosting maintenance fees.'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Lead Engine',
      desc: 'Smart click-to-WhatsApp buttons connect prospective patients and clients directly to your chat without phone delays or commissions.'
    },
    {
      icon: Headphones,
      title: '7 Days Dedicated Bug Support',
      desc: 'Once live on your domain, we provide 7 days of active bug-fixing support to guarantee every button, form, and mobile view works flawlessly.'
    }
  ]

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-gradient-to-b from-sky-50/60 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-brand-darkblue border border-sky-200 mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            Trust, Speed & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Why Choose Webtrivo?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            We combine high-performance modern web engineering with friendly, transparent service designed for Indian businesses.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border-2 border-slate-100 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Webtrivo Standard</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Local Origin Banner */}
        <div className="mt-14 bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-sans">
                Roots in Ara, Bhojpur (Bihar) • Serving Clients Across India
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Local trustworthiness paired with world-class digital craft. Empowering clinics and businesses pan-India.
              </p>
            </div>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-semibold text-sky-300 border border-white/10 whitespace-nowrap">
            🇮🇳 100% Made in India
          </div>
        </div>

      </div>
    </section>
  )
}
