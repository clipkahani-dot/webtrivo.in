import { 
  Stethoscope, 
  Store, 
  Briefcase, 
  Sparkles, 
  GraduationCap, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react'
import { NICHES_DATA, getWhatsAppUrl } from '../constants'

export default function Niches() {
  const iconMap = {
    Stethoscope: Stethoscope,
    Store: Store,
    Briefcase: Briefcase,
    Sparkles: Sparkles,
    GraduationCap: GraduationCap
  }

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-brand-darkblue border border-sky-200 mb-3">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            Tailored For Indian Small Businesses & Clinics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Specialized Solutions For Your Industry
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            We have pre-built conversion architectures for core industries — ready for a Quick Demo Preview and fast launch.
          </p>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NICHES_DATA.map((niche) => {
            const Icon = iconMap[niche.icon] || Store
            const customMsg = `Hello Webtrivo! I am looking for a website for my ${niche.title}. Please share a Quick Demo Preview.`
            
            return (
              <div 
                key={niche.id}
                className="bg-slate-50 hover:bg-white rounded-3xl p-7 border-2 border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${niche.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      {niche.liveCase}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {niche.title}
                  </h3>
                  <p className="text-xs font-bold text-brand-blue uppercase tracking-wide mb-3">
                    {niche.titleHi}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {niche.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(customMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-red-700 transition"
                  >
                    <span>Request Quick Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </a>
                  <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="16" height="16" className="w-4 h-4 object-contain" />
                </div>
              </div>
            )
          })}

          {/* 6th Card: Custom Request Card */}
          <div className="bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-3xl p-7 shadow-xl flex flex-col justify-between border-2 border-slate-800">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center shadow-md mb-5">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Custom Industry / Brand
              </h3>
              <p className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-3">
                Real Estate, Restaurants, Event Management, etc.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have a unique business model? We build fully custom, high-converting websites tailored to your specific audience in just 2–3 working days.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={getWhatsAppUrl('Hello Webtrivo! I have a custom business requirement. Can you create a custom website and demo for me?')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-brand-red hover:bg-red-700 px-4 py-2.5 rounded-xl transition shadow"
              >
                <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="16" height="16" className="w-4 h-4 object-contain" />
                <span>Ask on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
