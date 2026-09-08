import { 
  MessageCircle, 
  Palette, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react'
import { WHATSAPP_MAIN_URL, DELIVERY_TIME, DEMO_PREVIEW } from '../constants'

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Share Business Details',
      subtitle: 'WhatsApp पर बेसिक जानकारी भेजें',
      desc: 'Send your business name, services, contact number, and photos via WhatsApp (+91 9229840686).',
      icon: MessageCircle,
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Quick Demo Preview',
      subtitle: 'डिजाइन, कलर्स और लेआउट लॉक करें',
      desc: 'We create an interactive demo preview so you can verify the look, colors, and mobile responsiveness upfront.',
      icon: Palette,
      badge: 'Step 2'
    },
    {
      step: '03',
      title: '50% Advance & 2–3 Days Build',
      subtitle: 'फाइनल कंटेंट व निर्माण कार्य',
      desc: 'Approve the demo, pay 50% advance, and submit all final details. We build the full website within 2–3 working days.',
      icon: Clock,
      badge: 'Step 3'
    },
    {
      step: '04',
      title: '1 Revision, Balance & Live Domain',
      subtitle: 'रिवीजन, बैलेंस पेमेंट एवं डोमेन लाइव',
      desc: 'Review on preview link, 1 round of minor text/alignment tweaks, clear balance, and we connect your live domain with 7-day bug support!',
      icon: Rocket,
      badge: 'Step 4'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-brand-darkblue border border-sky-200 mb-3">
            <Clock className="w-4 h-4 text-brand-blue" />
            Simple & Stress-Free Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            How It Works in 4 Clear Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Zero technical confusion, 100% transparency. A structured process that guarantees quality and fast delivery.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border-2 border-slate-100 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-sky-200 group-hover:text-brand-blue transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center transition-colors shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-blue mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span className="text-brand-blue">{item.badge}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Stress-Free Terms Banner */}
        <div className="mt-12 bg-sky-50 rounded-2xl p-6 border border-sky-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700">
            <strong className="text-slate-900 block sm:inline">Stress-Free Agency Guarantee: </strong>
            You see a Quick Demo Preview first to lock the design before committing 50% advance. Includes 1 consolidated revision round and 7 days post-launch bug fixing support.
          </div>
        </div>

        {/* Middle CTA */}
        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_MAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-brand-red/25 transition hover:scale-105"
          >
            <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-6 h-6 object-contain flex-shrink-0" />
            <span>Start Your Project — Get Quick Demo on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  )
}
