import { 
  Check, 
  X,
  Sparkles, 
  Zap, 
  Clock, 
  MessageCircle, 
  ShieldCheck,
  Star,
  Layers,
  HelpCircle
} from 'lucide-react'
import { PRICING_PLANS, getWhatsAppUrl, DELIVERY_TIME } from '../constants'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-red-100 text-brand-red border border-red-200 mb-3 shadow-sm">
            <Zap className="w-4 h-4 fill-brand-red" />
            100% Transparent Pricing • No Hidden Traps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Choose The Right Package For Your Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Every package is a <strong>one-time design investment</strong> with free cloud hosting (Netlify) and 100% client domain ownership.
          </p>
        </div>

        {/* 2 Clear Pricing Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-sky-50/90 via-white to-white border-2 border-brand-blue shadow-2xl scale-100 lg:-translate-y-2 ring-4 ring-brand-blue/10'
                    : 'bg-white border-2 border-slate-200 hover:border-sky-300 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-blue to-sky-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  
                  {/* Plan Top Header */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {plan.name}
                    </h3>
                    {!plan.popular && (
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-bold text-brand-blue mb-2">
                    {plan.nameHi}
                  </p>

                  {/* Scope Highlight Badge */}
                  <div className={`mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold ${
                    plan.popular 
                      ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20' 
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    <Layers className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{plan.scopeBadge}</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-sans">
                        {plan.price}
                      </span>
                      <span className="text-sm text-slate-400 line-through font-semibold">
                        {plan.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded ml-auto">
                        One-Time
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                      <span className="flex items-center gap-1 text-brand-darkblue font-semibold">
                        <Clock className="w-3 h-3 text-brand-blue" />
                        {plan.delivery} Turnaround
                      </span>
                      <span className="text-emerald-700 font-semibold">₹0/Mo Hosting Fee</span>
                    </div>
                  </div>

                  {/* Included Features List */}
                  <div className="space-y-2.5 mb-5">
                    <p className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span>What's Included:</span>
                    </p>

                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explicit Not Included Section */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="space-y-2 pt-3 pb-3 px-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 mb-6">
                      <p className="text-[10px] font-extrabold text-rose-700 uppercase tracking-wider flex items-center gap-1">
                        <X className="w-3 h-3 stroke-[3]" />
                        <span>Not Included in this Plan:</span>
                      </p>
                      {plan.notIncluded.map((item, nIdx) => (
                        <div key={nIdx} className="flex items-start gap-2 text-[11px] text-slate-500">
                          <div className="w-3.5 h-3.5 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="line-through decoration-rose-300 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Best For Note */}
                  <div className="mb-6 p-3 rounded-xl bg-slate-100/70 text-[11px] text-slate-600">
                    <strong className="text-slate-800">Best For: </strong>
                    <span>{plan.idealFor}</span>
                  </div>

                </div>

                {/* Plan CTA Button */}
                <div>
                  <a
                    href={getWhatsAppUrl(plan.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95 shadow-md ${
                      plan.popular
                        ? 'bg-brand-red hover:bg-red-700 text-white shadow-brand-red/30'
                        : 'bg-slate-900 hover:bg-brand-blue text-white shadow-slate-900/20'
                    }`}
                  >
                    <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="20" height="20" className="w-5 h-5 object-contain flex-shrink-0" />
                    <span>{plan.ctaText}</span>
                  </a>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    Direct WhatsApp Demo Preview
                  </p>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Transparent Policy Note */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200 text-slate-700 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <strong className="text-slate-900">Domain & Hosting Ownership Policy: </strong>
            Your domain (~₹800–₹900 direct registrar fee) is purchased directly under your own Gmail/payment account so you retain 100% ownership. We provide free Netlify cloud hosting, free SSL, 1 consolidated revision round, and 7-day post-launch bug fixing support.
          </div>
        </div>

      </div>
    </section>
  )
}
