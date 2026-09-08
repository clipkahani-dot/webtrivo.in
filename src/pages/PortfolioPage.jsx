import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import { ArrowLeft, Award, ArrowUpRight } from 'lucide-react'
import { WHATSAPP_MAIN_URL, PORTFOLIO_ITEMS, getWhatsAppUrl } from '../constants'

export default function PortfolioPage() {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 mb-2">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                Live Client Proof & Case Studies
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
                Real Websites Built & Deployed
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                We believe in proof over promises. See how our clients generate direct patient and customer bookings every day.
              </p>
            </div>
            <a
              href={getWhatsAppUrl('Hello Webtrivo! I am browsing your portfolio. I want to see a live demo for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition hover:scale-105 self-start md:self-auto"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Get Demo on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Portfolio Component */}
      <Portfolio />

      {/* Additional Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">More Verified Industry Layouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_ITEMS.slice(1).map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 hover:border-sky-200 shadow-md hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-blue bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {item.rating}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">{item.description}</p>
                <div className="space-y-2 mb-6">
                  {item.results.map((res, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">{item.displayUrl}</span>
                <a
                  href={getWhatsAppUrl(`Hello Webtrivo! I am interested in a layout like ${item.title}. Can you share a preview?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
                >
                  <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-4 h-4 object-contain" />
                  <span>Request Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
