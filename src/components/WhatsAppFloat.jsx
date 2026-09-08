import { WHATSAPP_MAIN_URL } from '../constants'

export default function WhatsAppFloat() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip pill for mobile and desktop */}
      <a
        href={WHATSAPP_MAIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-800 text-xs font-extrabold rounded-full shadow-xl border border-emerald-200 hover:text-emerald-700 transition hover:shadow-2xl"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <img src="/images/whatsapp-icon.webp" alt="WhatsApp" className="w-5 h-5 object-contain" />
        <span>Quick Demo on WhatsApp</span>
      </a>

      {/* Floating Pulse Button */}
      <a
        href={WHATSAPP_MAIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse transition-transform hover:scale-110 active:scale-95"
        title="Chat with Webtrivo on WhatsApp"
      >
        <img 
          src="/images/whatsapp-icon.webp" 
          alt="Chat on WhatsApp" 
          className="w-full h-full object-cover rounded-full drop-shadow-xl"
        />
      </a>
    </aside>
  )
}
