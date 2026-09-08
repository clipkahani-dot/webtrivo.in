import { Link } from 'react-router-dom'
import { 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock
} from 'lucide-react'
import { 
  AGENCY_NAME, 
  PHONE_DISPLAY, 
  PHONE_NUMBER, 
  EMAIL_ADDRESS, 
  LOCATION, 
  SERVICE_AREA, 
  DELIVERY_TIME, 
  WHATSAPP_MAIN_URL,
  DOMAIN
} from '../constants'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-700 rounded-3xl p-8 sm:p-10 mb-14 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Start Your Project Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-sans leading-tight">
              Ready to take your business online?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
              Starting at just ₹4,999 with a Quick Demo Preview. Get a high-converting website live on your domain in {DELIVERY_TIME}.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-brand-red hover:bg-red-700 text-white font-extrabold text-sm rounded-2xl shadow-lg flex items-center gap-2.5 transition hover:scale-105"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain flex-shrink-0" />
              <span>Get Quick Demo on WhatsApp</span>
            </a>
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center gap-2.5 transition hover:scale-105"
            >
              <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain flex-shrink-0" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img 
                src="/images/webtivo_logo.png" 
                alt="Webtrivo AI Web Agency Logo" 
                className="w-11 h-11 rounded-xl object-cover shadow-lg border border-slate-800 bg-slate-950"
              />
              <span className="text-xl font-black text-white tracking-tight">
                Web<span className="text-brand-blue">trivo</span><span className="text-brand-red font-mono text-xs">.in</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              High-converting website development agency for Indian businesses, doctors, and clinics. Fast turnaround, client-owned domains, and zero monthly lock-in traps.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div>📍 <strong>Location:</strong> {LOCATION}</div>
              <div>⚡ <strong>Service:</strong> {SERVICE_AREA}</div>
              <div>⏱️ <strong>Turnaround:</strong> {DELIVERY_TIME}</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services & Niches</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition">Live Portfolio (Proof)</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition">Pricing Plans</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition">Cost Estimator</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQs & About Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Covered */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Website Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>🏥 Doctors & Hospital Portals</li>
              <li>🏬 Retail Shops & Showrooms</li>
              <li>⚖️ Legal, CA & Consultant Profiles</li>
              <li>💇 Salons, Spas & Fitness Centers</li>
              <li>📚 Coaching & Institute Portals</li>
              <li>⚡ Fast 2–3 Days Launch</li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Official WhatsApp:</div>
                  <a href={WHATSAPP_MAIN_URL} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-emerald-400 block">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">WhatsApp Inquiry:</div>
                  <a href={WHATSAPP_MAIN_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline block">
                    Chat with Webtrivo Team
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Email ID:</div>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-300 hover:text-white block">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Office Location:</div>
                  <p className="text-slate-400 leading-tight">
                    {LOCATION}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {AGENCY_NAME} ({DOMAIN}). All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted in Bihar</span>
            <span className="text-brand-red">❤️</span>
            <span>Serving Clients Across India</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
