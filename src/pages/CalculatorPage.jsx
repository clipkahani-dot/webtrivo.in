import Calculator from '../components/Calculator'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calculator as CalcIcon, ShieldCheck } from 'lucide-react'
import { WHATSAPP_MAIN_URL } from '../constants'

export default function CalculatorPage() {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-brand-darkblue mb-2">
                <CalcIcon className="w-3.5 h-3.5 text-brand-blue" />
                Transparent Cost Estimator
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
                Interactive Website Cost Calculator
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Configure your exact website features, pages, and integrations. Get an honest price quote instantly on WhatsApp.
              </p>
            </div>
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition hover:scale-105 self-start md:self-auto"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Talk to an Expert</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Calculator Component */}
      <Calculator />
    </div>
  )
}
