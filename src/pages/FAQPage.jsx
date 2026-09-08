import FAQ from '../components/FAQ'
import WhyUs from '../components/WhyUs'
import { Link } from 'react-router-dom'
import { ArrowLeft, HelpCircle } from 'lucide-react'
import { WHATSAPP_MAIN_URL } from '../constants'

export default function FAQPage() {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                Frequently Asked Questions
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
                Clear Answers to Common Questions
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Got doubts about domains, hosting, advance payments, or delivery? Everything is transparent here.
              </p>
            </div>
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition hover:scale-105 self-start md:self-auto"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Ask Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main FAQ Component */}
      <FAQ />

      {/* Why Choose Webtrivo Credential Section */}
      <WhyUs />
    </div>
  )
}
