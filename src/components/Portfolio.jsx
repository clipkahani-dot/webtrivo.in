import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  MessageCircle, 
  Award,
  ArrowUpRight
} from 'lucide-react'
import { PORTFOLIO_ITEMS, getWhatsAppUrl } from '../constants'

export default function Portfolio() {
  const flagship = PORTFOLIO_ITEMS[0]

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3 shadow-sm">
            <Award className="w-4 h-4 text-emerald-700" />
            Proof That Sells • 100% Live Client Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Our Live Work & Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            We let our work speak for itself. Explore how we designed and deployed a high-converting web portal for a real clinic.
          </p>
        </div>

        {/* ── Featured Flagship Live Project Card (Dr. Rajesh Pathak) ── */}
        <div className="bg-white rounded-3xl border-2 border-sky-200 shadow-2xl p-6 sm:p-10 card-trust mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Col: Live Website Info */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  ★ Flagship Live Client
                </span>
                <span className="bg-sky-100 text-brand-darkblue text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
                  Doctor & Clinic Website
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                {flagship.title}
              </h3>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-semibold">
                <span className="text-amber-500 font-bold flex items-center gap-1">
                  ★ 4.9 (32 Google Reviews)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" /> {flagship.location}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {flagship.description}
              </p>

              {/* Key Features Implemented */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {flagship.results.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Link to Live Site */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-blue hover:bg-brand-darkblue text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center gap-2 transition hover:scale-105"
                >
                  <span>Open Live Website ({flagship.displayUrl})</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppUrl(`Hello Webtrivo! I liked the live work for Dr. Rajesh Pathak. I want a similar website for my business/clinic. Please share a Quick Demo Preview.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold rounded-xl border border-emerald-300 flex items-center gap-2.5 transition hover:scale-105"
                >
                  <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-6 h-6 object-contain flex-shrink-0" />
                  <span>Get Website Like This</span>
                </a>
              </div>

            </div>

            {/* Right Col: Live Website Visual Mockup (Real Production Screenshot) */}
            <div className="lg:col-span-6">
              
              <div className="bg-slate-900 rounded-2xl p-2.5 sm:p-3 shadow-2xl border-4 border-slate-800 relative group overflow-hidden">
                
                {/* Browser top pill */}
                <div className="bg-slate-800 px-3 py-2 rounded-xl flex items-center justify-between mb-2.5 text-[11px] text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="truncate px-2 text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="text-emerald-400">🔒</span> https://drrajeshpathak.com/
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    100% LIVE
                  </span>
                </div>

                {/* Real Live Production Website Screenshot */}
                <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-slate-700 relative group/img">
                  <img
                    src="/images/live-proof-dr-pathak.png"
                    alt="Dr. Rajesh Pathak MD - Live Doctor Website Portal Built by Webtrivo"
                    className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                    loading="lazy"
                  />
                  
                  {/* Floating verification badge overlay */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real Client Website Proof</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
