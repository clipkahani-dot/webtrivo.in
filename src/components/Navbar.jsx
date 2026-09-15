import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { 
  Menu, 
  X, 
  MessageCircle, 
  Zap
} from 'lucide-react'
import { 
  AGENCY_NAME, 
  PHONE_DISPLAY, 
  PHONE_NUMBER, 
  WHATSAPP_MAIN_URL, 
  DELIVERY_TIME, 
  LOCATION 
} from '../constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* ── Top Announcement Ticker ── */}
      <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-brand-red text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              <Zap className="w-3 h-3 fill-white" /> Limited Offer
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Websites from <strong>₹4,999</strong> • Quick Demo Preview • <strong>{DELIVERY_TIME}</strong> Fast Launch
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium ml-auto">
            <span className="hidden md:inline text-slate-400">
              📍 Pan-India Service (Roots in {LOCATION})
            </span>
            <a 
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-white transition font-bold"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="16" height="16" className="w-4 h-4 object-contain" />
              <span>WhatsApp: {PHONE_DISPLAY}</span>
            </a>
          </div>

        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white py-4 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img 
              src="/images/webtivo_logo.webp" 
              alt="Webtrivo Website Agency Logo" 
              width="40"
              height="40"
              className="w-10 h-10 rounded-xl object-cover shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform duration-300 border border-slate-800 bg-slate-950"
            />

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">
                  Web<span className="text-brand-blue">trivo</span>
                </span>
                <span className="text-[10px] font-bold text-brand-red bg-red-50 border border-red-200 px-1.5 py-0.2 rounded font-mono">
                  .in
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 tracking-tight -mt-0.5">
                High-Speed Website Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm">
            <NavLink 
              to="/services" 
              className={({isActive}) => isActive ? "text-brand-blue font-bold border-b-2 border-brand-blue pb-0.5" : "text-slate-700 hover:text-brand-blue transition font-semibold"}
            >
              Services
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({isActive}) => isActive ? "text-brand-blue font-bold flex items-center gap-1 border-b-2 border-brand-blue pb-0.5" : "text-slate-700 hover:text-brand-blue transition flex items-center gap-1 font-semibold"}
            >
              <span>Live Work</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded-full">Proof</span>
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({isActive}) => isActive ? "text-brand-blue font-bold border-b-2 border-brand-blue pb-0.5" : "text-slate-700 hover:text-brand-blue transition font-semibold"}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/calculator" 
              className={({isActive}) => isActive ? "text-brand-blue font-bold border-b-2 border-brand-blue pb-0.5" : "text-slate-700 hover:text-brand-blue transition font-semibold"}
            >
              Cost Estimator
            </NavLink>
            <NavLink 
              to="/faq" 
              className={({isActive}) => isActive ? "text-brand-blue font-bold border-b-2 border-brand-blue pb-0.5" : "text-slate-700 hover:text-brand-blue transition font-semibold"}
            >
              FAQs
            </NavLink>
          </div>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-brand-red/25 flex items-center gap-2.5 transition hover:scale-105 active:scale-95"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="20" height="20" className="w-5 h-5 object-contain flex-shrink-0" />
              <span>Quick Demo Preview</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2.5 rounded-xl text-slate-700 hover:text-brand-blue hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* ── Mobile Menu Dropdown ── */}
        {mobileMenu && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3 text-sm font-bold text-slate-700">
              <Link 
                to="/" 
                onClick={() => setMobileMenu(false)}
                className="p-2.5 hover:bg-sky-50 rounded-xl text-slate-900 flex items-center justify-between"
              >
                <span>🏠 Home</span>
                <span className="text-xs text-brand-blue font-semibold">Overview</span>
              </Link>
              <Link 
                to="/services" 
                onClick={() => setMobileMenu(false)}
                className="p-2.5 hover:bg-sky-50 rounded-xl text-slate-900"
              >
                💼 Services & Industries
              </Link>
              <Link 
                to="/portfolio" 
                onClick={() => setMobileMenu(false)}
                className="p-2.5 hover:bg-sky-50 rounded-xl text-slate-900 flex items-center justify-between"
              >
                <span>🌟 Live Work & Client Proof</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Live</span>
              </Link>
              <Link 
                to="/pricing" 
                onClick={() => setMobileMenu(false)}
                className="p-2.5 hover:bg-sky-50 rounded-xl text-slate-900"
              >
                🏷️ Pricing Packages (From ₹4,999)
              </Link>
              <Link 
                to="/calculator" 
                onClick={() => setMobileMenu(false)}
                className="p-2.5 hover:bg-sky-50 rounded-xl text-slate-900"
              >
                🧮 Interactive Price Estimator
              </Link>
              <Link 
                to="/faq" 
                onClick={() => setMobileMenu(false)}
                className="p-2.5 hover:bg-sky-50 rounded-xl text-slate-900"
              >
                ❓ FAQs & About Us
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={WHATSAPP_MAIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center py-3 text-sm font-bold bg-brand-red text-white rounded-xl shadow-md flex items-center gap-2"
              >
                <img src="/images/whatsapp-icon.webp" alt="WhatsApp" width="20" height="20" className="w-5 h-5 object-contain" />
                <span>Get Quick Demo on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </nav>
    </header>
  )
}
