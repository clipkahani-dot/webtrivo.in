import { useState } from 'react'
import { 
  Calculator as CalcIcon, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Zap, 
  ArrowRight 
} from 'lucide-react'
import { getWhatsAppUrl, DELIVERY_TIME, DEMO_PREVIEW } from '../constants'

export default function Calculator() {
  const [businessType, setBusinessType] = useState('Doctor / Clinic')
  const [tier, setTier] = useState('growth')
  const [addons, setAddons] = useState({
    video: false,
    email: false,
    googleRank: true
  })

  // Pricing Calculation logic
  const basePrices = {
    starter: 4999,
    growth: 9999,
    ultimate: 14999
  }

  let total = basePrices[tier]
  if (tier !== 'ultimate' && addons.video) total += 2000
  if (addons.email) total += 999

  const handleToggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const getCustomWhatsAppQuote = () => {
    const selectedTierName = tier === 'starter' ? 'Starter (₹4,999)' : tier === 'growth' ? 'Growth Clinic Pro (₹9,999)' : 'Ultimate Brand (₹14,999)'
    const addonList = []
    if (addons.video && tier !== 'ultimate') addonList.push('Video Testimonial Player (+₹2,000)')
    if (addons.email) addonList.push('Professional Business Email (+₹999)')
    if (addons.googleRank) addonList.push('Google Maps & Local SEO (Free)')

    const msg = `Hello Webtrivo! I calculated an estimate on your website:\n• Business Type: ${businessType}\n• Selected Package: ${selectedTierName}\n• Add-ons: ${addonList.length > 0 ? addonList.join(', ') : 'None'}\n• Estimated Total: ₹${total.toLocaleString('en-IN')}\n• Turnaround: ${DELIVERY_TIME}\n\nPlease share details for a Quick Demo Preview.`
    return getWhatsAppUrl(msg)
  }

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-brand-darkblue border border-sky-200 mb-3">
            <CalcIcon className="w-4 h-4 text-brand-blue" />
            Instant Estimate • Transparent Budgeting
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Website Cost Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Select your business category and desired features to get an instant, transparent quote for your project.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-sky-50/50 rounded-3xl p-6 sm:p-10 border-2 border-sky-100 shadow-2xl card-trust">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Options Controls (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* 1. Select Business Type */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Your Business Category
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full p-3.5 bg-white rounded-2xl border-2 border-slate-200 focus:border-brand-blue focus:outline-none text-sm font-semibold text-slate-800 shadow-sm"
                >
                  <option>Doctor / Clinic (डॉक्टर या क्लीनिक)</option>
                  <option>Retail Shop / Showroom (दुकान या शोरूम)</option>
                  <option>Lawyer / CA / Consultant (सलाहकार या वकील)</option>
                  <option>Salon / Spa / Gym (सैलून, स्पा या जिम)</option>
                  <option>Coaching / Tuition Center (कोचिंग संस्थान)</option>
                  <option>Other Business (अन्य व्यवसाय)</option>
                </select>
              </div>

              {/* 2. Select Website Tier */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  2. Choose Package Tier
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTier('starter')}
                    className={`p-3 rounded-2xl border-2 text-center transition-all ${
                      tier === 'starter'
                        ? 'border-brand-blue bg-sky-100 text-brand-darkblue font-extrabold shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 font-semibold hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs">Starter</div>
                    <div className="text-sm font-black mt-1">₹4,999</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('growth')}
                    className={`p-3 rounded-2xl border-2 text-center transition-all relative ${
                      tier === 'growth'
                        ? 'border-brand-blue bg-sky-100 text-brand-darkblue font-extrabold shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 font-semibold hover:border-slate-300'
                    }`}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full">
                      Popular
                    </span>
                    <div className="text-xs">Growth Pro</div>
                    <div className="text-sm font-black mt-1">₹9,999</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('ultimate')}
                    className={`p-3 rounded-2xl border-2 text-center transition-all ${
                      tier === 'ultimate'
                        ? 'border-brand-blue bg-sky-100 text-brand-darkblue font-extrabold shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 font-semibold hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs">Ultimate</div>
                    <div className="text-sm font-black mt-1">₹14,999</div>
                  </button>
                </div>
              </div>

              {/* 3. Optional Add-ons */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  3. Optional Upgrades
                </label>
                <div className="space-y-2 text-xs">
                  
                  {tier !== 'ultimate' && (
                    <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition">
                      <span className="flex items-center gap-2 font-medium text-slate-800">
                        <input
                          type="checkbox"
                          checked={addons.video}
                          onChange={() => handleToggleAddon('video')}
                          className="w-4 h-4 text-brand-blue rounded accent-brand-blue"
                        />
                        <span>Real Video Testimonials Player (+₹2,000)</span>
                      </span>
                    </label>
                  )}

                  <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition">
                    <span className="flex items-center gap-2 font-medium text-slate-800">
                      <input
                        type="checkbox"
                        checked={addons.email}
                        onChange={() => handleToggleAddon('email')}
                        className="w-4 h-4 text-brand-blue rounded accent-brand-blue"
                      />
                      <span>Professional Business Email Setup (+₹999)</span>
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition">
                    <span className="flex items-center gap-2 font-medium text-slate-800">
                      <input
                        type="checkbox"
                        checked={addons.googleRank}
                        onChange={() => handleToggleAddon('googleRank')}
                        className="w-4 h-4 text-brand-blue rounded accent-brand-blue"
                      />
                      <span>Google Maps & Local Search SEO (Included Free)</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      FREE
                    </span>
                  </label>

                </div>
              </div>

            </div>

            {/* Right Summary & WhatsApp CTA Card (5 cols) */}
            <div className="md:col-span-5 bg-white rounded-2xl p-6 border-2 border-sky-200 shadow-xl flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue bg-sky-100 px-2.5 py-1 rounded-full">
                  Estimated Summary
                </span>

                <div className="mt-4 pb-4 border-b border-slate-100">
                  <div className="text-xs text-slate-500">Estimated Project Budget:</div>
                  <div className="text-4xl font-black text-slate-900 mt-1 font-sans">
                    ₹{total.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                    ✓ One-Time Design Fee (Zero Monthly Lock-in)
                  </div>
                </div>

                <div className="py-4 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Delivery Turnaround:</span>
                    <strong className="text-slate-900">{DELIVERY_TIME}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Cloud Hosting (Netlify):</span>
                    <strong className="text-emerald-700">Free + Free SSL</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Revisions:</span>
                    <strong className="text-slate-900">1 Consolidated Round</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Post-Launch Bug Fix:</span>
                    <strong className="text-slate-900">7 Days Included</strong>
                  </div>
                </div>
              </div>

              {/* 1-Click WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={getCustomWhatsAppQuote()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 bg-brand-red hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2.5 transition hover:scale-105 active:scale-95"
                >
                  <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-6 h-6 object-contain flex-shrink-0" />
                  <span>Get This Quote on WhatsApp</span>
                </a>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  Includes a Quick Demo Preview before final commitment
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
