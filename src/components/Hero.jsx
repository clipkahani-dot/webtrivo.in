import { Link } from 'react-router-dom'
import { 
  MessageCircle, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu,
  Star
} from 'lucide-react'
import { 
  WHATSAPP_MAIN_URL, 
  DELIVERY_TIME, 
  DEMO_PREVIEW 
} from '../constants'

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Content (7 cols) ── */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Hook Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-indigo-600" />
                AI-Powered Web Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-brand-darkblue border border-sky-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                {DEMO_PREVIEW} Included
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-red-50 text-brand-red border border-red-200 shadow-sm">
                From ₹4,999
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                {DELIVERY_TIME} Turnaround
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight font-sans">
                Get Your Business Online in <span className="text-brand-blue underline decoration-brand-blue/30 underline-offset-8">2–3 Working Days</span>
              </h1>
              <p className="text-base sm:text-xl font-semibold text-slate-700 leading-relaxed">
                Professional websites for clinics, shops, consultants & local businesses — starting at <span className="text-brand-red font-bold">₹4,999</span>.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-bold shadow-sm">
                <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="20" height="20" className="w-5 h-5 object-contain flex-shrink-0" />
                <span>See your website demo on WhatsApp before you pay.</span>
              </div>
            </div>

            {/* Dual High Impact CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              <a
                href={WHATSAPP_MAIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-brand-red hover:bg-red-700 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-brand-red/30 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 group"
              >
                <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="28" height="28" className="w-7 h-7 object-contain group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>Get Quick Demo Preview on WhatsApp</span>
              </a>

              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-sky-50 text-slate-800 font-bold text-base rounded-2xl border-2 border-sky-200 hover:border-brand-blue shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>View Live Proof (Client Site)</span>
                <ArrowRight className="w-4 h-4 text-brand-blue" />
              </Link>

            </div>

            {/* 4 Core Value Props */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Quick Demo</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Lock design first</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">2–3 Days</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Fast turnaround</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">AI Architecture</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Lightning-fast code</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Free Cloud Hosting</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Netlify + Free SSL</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right Column: Interactive Browser Showcase Card (5 cols) ── */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-red-400/20 rounded-3xl blur-2xl -z-10" />

            {/* Mockup Device Frame */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 border-2 border-sky-100 shadow-2xl card-trust relative overflow-hidden">
              
              {/* Browser Window Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-slate-100 px-3 py-1 rounded-full text-[11px] font-mono text-slate-600 flex items-center gap-1 font-medium">
                  <span className="text-emerald-600">🔒</span> https://drrajeshpathak.com/
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                  Live Client
                </span>
              </div>

              {/* Real Live Production Website Screenshot */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner border border-slate-200 group max-h-72 sm:max-h-none">
                <img
                  src="/images/live-proof-dr-pathak.webp"
                  alt="Dr. Rajesh Pathak MD - Live Doctor Website Built by Webtrivo"
                  width="512"
                  height="372"
                  fetchPriority="high"
                  className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Floating WhatsApp Live Proof Banner */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-950/90 backdrop-blur-md text-white p-2.5 rounded-xl border border-white/20 shadow-xl flex items-center gap-2.5">
                  <img 
                    src="/images/whatsapp-icon.webp" 
                    alt="WhatsApp" 
                    width="28"
                    height="28"
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <div className="text-[11px] leading-tight text-slate-200">
                    <span className="text-emerald-400 font-extrabold block">Live Client Portal</span>
                    "Dr. Rajesh Pathak MD receives patient bookings directly on WhatsApp."
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 text-brand-darkblue font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> Delivered in 2–3 Days
                </span>
                <a 
                  href="https://drrajeshpathak.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1"
                >
                  drrajeshpathak.com ↗
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
