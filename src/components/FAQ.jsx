import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { FAQS_DATA, WHATSAPP_MAIN_URL } from '../constants'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-brand-darkblue border border-sky-200 mb-3">
            <HelpCircle className="w-4 h-4 text-brand-blue" />
            Clear Answers • Zero Doubts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Everything you need to know about our process, domain ownership, cloud hosting, and delivery timelines.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-brand-blue transition-colors"
                >
                  <div>
                    <span>{faq.q}</span>
                    {faq.qHi && (
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">
                        {faq.qHi}
                      </span>
                    )}
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-sky-100 text-brand-blue' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center bg-sky-50 rounded-2xl p-6 border border-sky-200">
          <p className="text-xs sm:text-sm font-bold text-slate-800 mb-2">
            Have a specific question not listed here?
          </p>
          <a
            href={WHATSAPP_MAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-red hover:underline"
          >
            <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-4 h-4 object-contain" />
            <span>Chat directly with the Webtrivo team on WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  )
}
