export const AGENCY_NAME = 'Webtrivo'
export const AGENCY_TAGLINE = 'AI-Powered High-Converting Websites for Clinics & Businesses'
export const DOMAIN = 'webtrivo.in'

// Contact & Location Info
export const PHONE_NUMBER = '9229840686'
export const PHONE_DISPLAY = '+91 92298 40686'
export const EMAIL_ADDRESS = 'contact@webtrivo.in'
export const LOCATION = 'Ara, Bhojpur, Bihar, India'
export const SERVICE_AREA = 'Pan-India (Online Service)'
export const DELIVERY_TIME = '2–3 Working Days'
export const DEMO_PREVIEW = 'Quick Demo Preview'

// Direct WhatsApp URL generator
export const getWhatsAppUrl = (msg = '') => {
  const defaultMsg = 'Hello Webtrivo! I want to get a professional website for my business/clinic. Please share details and a Quick Demo Preview.'
  const text = msg || defaultMsg
  return `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(text)}`
}

export const WHATSAPP_MAIN_URL = getWhatsAppUrl()

// Pricing Packages (Transparent, stress-free agency model)
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter Business Profile',
    nameHi: '1-Page Express Digital Card',
    price: '₹4,999',
    originalPrice: '₹8,999',
    delivery: '2–3 Working Days',
    idealFor: 'Solo local shops, freelance consultants, lawyers, and single-service businesses',
    description: 'Ultra-fast 1-page digital presence to display your basic contact, store/office location on Google Maps, and accept direct WhatsApp messages.',
    popular: false,
    badge: 'Basic Express',
    scopeBadge: '1 Single Page • Up to 5 Services',
    features: [
      '1-Page Clean Responsive Web Presence',
      'Up to 5 Basic Services or Products',
      'Direct 1-Click WhatsApp Inquiry Button',
      'Google Maps Location & Contact Details Embed',
      'About Business & General Working Hours',
      'Customer Photo Gallery (Up to 6 images)',
      'Free High-Speed Cloud Hosting (Netlify) + SSL',
      'Client-Owned Domain Guidance (~₹800 direct fee)',
      '1 Consolidated Revision Round',
      '7 Days Basic Post-Launch Bug Support'
    ],
    notIncluded: [
      'No Founder / Doctor / Team Profile Showcase',
      'No Shift Timings / Consultation Schedule Table',
      'No 15–20 In-Depth Catalog of Services / Treatments',
      'No Google 4.9★ Reviews Badge & Grid Showcase',
      'No Customer Video Testimonials Player'
    ],
    ctaText: 'Choose Starter (₹4,999)',
    whatsappMsg: 'Hello Webtrivo! I want to get the Starter Business Profile plan (₹4,999). Please share details for a Quick Demo Preview.'
  },
  {
    id: 'growth',
    name: 'Growth Business Pro',
    nameHi: 'Complete Interactive Website (Most Popular)',
    price: '₹9,999',
    originalPrice: '₹16,999',
    delivery: '2–3 Working Days',
    idealFor: 'Clinics, doctors, retail showrooms, salons, gyms, CAs, lawyers & coaching centers',
    description: 'Full multi-section website with 15–20 detailed services/treatments, founder/team qualifications, shift/consultation timings, and Google reviews.',
    popular: true,
    badge: 'Most Popular • 90% Businesses Choose This ⭐',
    scopeBadge: 'Multi-Section Complete • 15–20 Services/Products',
    features: [
      'Multi-Section Complete Interactive Platform (5+ Sections)',
      '15–20 In-Depth Services / Treatments / Products with Descriptions',
      'Founder / Doctor / Team Profile with Experience & Credentials',
      'Interactive Working Hours & Consultation / Shift Schedule',
      'Live 4.9★ Google Reviews & Customer Trust Badges',
      '4 Sticky WhatsApp Action CTAs Across Key Sections',
      'Complete Local SEO Setup (Google Search & Maps Rank Ready)',
      'Social Media Integration (Instagram, FB, YouTube, LinkedIn)',
      'Free High-Speed Cloud Hosting (Netlify) + SSL',
      'Client-Owned Domain Setup Guidance (~₹800 direct)',
      '1 Consolidated Revision Round (Priority Turnaround)',
      '7 Days Dedicated Priority Bug Support'
    ],
    notIncluded: [
      'No Customer Video Testimonials Player Wall',
      'No Custom Interactive Cost / Budget Calculator'
    ],
    ctaText: 'Choose Growth Pro (₹9,999)',
    whatsappMsg: 'Hello Webtrivo! I want to get the Growth Business Pro package (₹9,999). Please guide me with a Quick Demo Preview.'
  },
  {
    id: 'ultimate',
    name: 'Ultimate Brand Authority',
    nameHi: 'Flagship Multi-Location Platform',
    price: '₹14,999',
    originalPrice: '₹24,999',
    delivery: '3–4 Working Days',
    idealFor: 'Multi-branch showrooms, hospitals, corporate firms & expanding brands',
    description: 'Elite authority platform featuring embedded customer video reviews wall, multi-branch directory, schema SEO, and direct developer VIP support.',
    popular: false,
    badge: 'Flagship Multi-Location Brand',
    scopeBadge: 'Unlimited Scale • Video Wall • Multi-Branch',
    features: [
      'Everything in Growth Business Pro Included',
      'Embedded Customer / Patient Video Testimonials Wall',
      'Multiple Branch / Store / Clinic Locations Directory',
      'Interactive Service Cost / Budget Estimator Tool',
      'Google Schema Markup (LocalBusiness / Medical / Professional)',
      'Custom Domain Business Email Setup Guidance (@brand.in)',
      '2 Comprehensive Revision Rounds',
      '14 Days Direct VIP Developer Support'
    ],
    notIncluded: [],
    ctaText: 'Choose Ultimate (₹14,999)',
    whatsappMsg: 'Hello Webtrivo! I am interested in the Ultimate Brand Authority package (₹14,999). Please connect with me for a Quick Demo Preview.'
  }
]

// Target Categories / Niches
export const NICHES_DATA = [
  {
    id: 'clinics',
    title: 'Doctors & Clinics',
    titleHi: 'डॉक्टर्स एवं क्लीनिक्स',
    icon: 'Stethoscope',
    description: 'OPD timings, treatment catalogs, 4.9★ Google reviews showcase, and direct 1-click WhatsApp appointment booking.',
    liveCase: 'drrajeshpathak.com (Live Client)',
    gradient: 'from-sky-500 to-blue-600'
  },
  {
    id: 'retail',
    title: 'Local Shops & Showrooms',
    titleHi: 'दुकानें एवं शोरूम्स',
    icon: 'Store',
    description: 'Product catalogs, store location, Google Maps, and direct 1-click WhatsApp inquiry buttons.',
    liveCase: 'Storefront Demo Ready',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'professionals',
    title: 'Lawyers, CAs & Consultants',
    titleHi: 'वकील, सीए एवं सलाहकार',
    icon: 'Briefcase',
    description: 'Professional legal & financial portfolio, experience credentials, and private client consultation forms.',
    liveCase: 'Consultant Profile Ready',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'beauty',
    title: 'Salons, Spas & Gyms',
    titleHi: 'सैलून, स्पा व फिटनेस सेंटर',
    icon: 'Sparkles',
    description: 'Service menus, transparent pricing lists, client transformation photos, and slot booking flows.',
    liveCase: 'Lifestyle Demo Ready',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'coaching',
    title: 'Coaching & Tutors',
    titleHi: 'कोचिंग संस्थान व टीचर्स',
    icon: 'GraduationCap',
    description: 'Course details, faculty profiles, topper student results, and online admission inquiry forms.',
    liveCase: 'Academy Demo Ready',
    gradient: 'from-indigo-500 to-purple-600'
  }
]

// Portfolio Case Studies (Live Evidence)
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Dr. Rajesh Pathak MD (Homoeopath)',
    category: 'Doctor & Hospital Website',
    url: 'https://drrajeshpathak.com/',
    displayUrl: 'drrajeshpathak.com',
    location: 'Surat, Gujarat',
    rating: '4.9 ★★★★★ (32 Google Reviews)',
    highlight: '₹500 WhatsApp Appointment & Dual OPD/IPD Video Testimonials',
    description: 'Complete clinic & hospital web portal for an 18+ year experienced specialist doctor. Features 20 chronic disease treatments, hospital infrastructure gallery, Google Maps, and 1-click WhatsApp appointment flow.',
    results: [
      '4.9★ Google Reviews Integration',
      'Direct WhatsApp Patient Leads',
      'Dual Real Video Players (OPD/IPD)',
      '100% Mobile First Architecture'
    ],
    image: '/images/live-proof-dr-pathak.png',
    tag: 'Flagship Live Project'
  },
  {
    id: 2,
    title: 'Apex Business & Corporate Profile',
    category: 'Corporate / Consulting Demo',
    url: '#',
    displayUrl: 'demo.webtrivo.in/corporate',
    location: 'Pan-India',
    rating: '5.0 ★★★★★ Client Rated',
    highlight: 'Lead Generation & Brand Trust Portfolio',
    description: 'Modern corporate layout built for consulting and service firms, designed to build instant authority and drive inbound client inquiries.',
    results: [
      'Instant WhatsApp Lead Form',
      'Google Maps & Location Embed',
      'Services & Portfolio Showcase'
    ],
    tag: 'Verified Layout'
  }
]

// FAQs for Ad Traffic & Inquiries
export const FAQS_DATA = [
  {
    q: 'Do I need any coding or technical knowledge?',
    qHi: 'क्या मुझे कोडिंग या कंप्यूटर की कोई जानकारी होनी चाहिए?',
    a: 'Not at all! You do not need any technical knowledge. Simply share your business name, services, phone number, and photos on WhatsApp (+91 9229840686). Our team handles the design, cloud hosting, and domain connection end-to-end.'
  },
  {
    q: 'How does domain ownership work?',
    qHi: 'वेबसाइट का डोमेन (Domain) कैसे मिलेगा?',
    a: 'The domain (e.g. yourbusiness.com or .in) is 100% owned by you. We guide you step-by-step on WhatsApp to purchase it directly on GoDaddy/Hostinger (~₹800–₹900) using your own Gmail and payment method. This guarantees you own your digital asset without any agency lock-in.'
  },
  {
    q: 'Are there any hidden monthly or yearly hosting fees?',
    qHi: 'क्या कोई मासिक या सालाना होस्टिंग चार्ज लगेगा?',
    a: 'Zero hidden fees! We host your website on ultra-fast, modern Cloud Hosting (Netlify) with lifetime free SSL (🔒 security padlock) at ₹0 recurring hosting cost. You only pay our one-time design fee and your direct annual domain renewal.'
  },
  {
    q: 'What is the step-by-step development process and timeline?',
    qHi: 'वेबसाइट बनने का पूरा प्रोसेस और समय क्या है?',
    a: '1) You send basic details, and we provide a Quick Demo Preview to lock the layout, theme, and colors. 2) Upon approval, you pay a 50% advance and send final content. 3) We build the complete final website in 2–3 working days. 4) After 1 revision round and final review on the preview link, you clear the balance and we connect your live domain!'
  },
  {
    q: 'What are the revision and post-launch support terms?',
    qHi: 'रिवीजन और सपोर्ट का क्या नियम है?',
    a: 'You get 1 consolidated revision round to adjust minor text, contact numbers, or element alignments. Once live on your domain, we provide 7 Days of dedicated bug-fixing support to ensure every link, button, and mobile view works flawlessly.'
  },
  {
    q: 'Do I need a payment gateway on my website?',
    qHi: 'क्या इसमें पेमेंट गेटवे (Payment Gateway) की जरूरत होती है?',
    a: 'For local businesses and clinics, payment gateways add unnecessary friction, merchant fees, and technical headaches. Instead, we equip your site with direct 1-click WhatsApp buttons so leads connect with you directly, and you receive payments directly via UPI / GPay / QR without commissions.'
  }
]
