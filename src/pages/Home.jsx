import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Activity, Calendar, ShieldCheck, HeartPulse, Store, 
  MapPin, ShoppingCart, MessageSquare, Star, ArrowLeftRight, CheckCircle, Flame
} from 'lucide-react';
import StatsBar from '../components/StatsBar';

const testimonials = [
  {
    id: 't1',
    name: 'Rebecca Thompson',
    role: 'Patient',
    quote: 'CareLoop changed everything for me. I booked a consult with a GP for my allergies and had my prescription medication in my hands within 90 minutes. Unbelievably easy.',
    initials: 'RT',
    color: 'bg-[#0F6E56]',
  },
  {
    id: 't2',
    name: 'Dr. Marcus Vance, MD',
    role: 'On-Call Clinician',
    quote: 'The Electronic Health Records (EHR) layout and the digital prescription tools are the best I’ve used in telehealth. It streamlines my clinical decisions immensely.',
    initials: 'MV',
    color: 'bg-primary',
  },
  {
    id: 't3',
    name: 'David Oh, PharmD',
    role: 'Independent Pharmacy Owner',
    quote: 'The bulk CSV inventory loader synced 3,000 SKUs in seconds. We started receiving local delivery orders the same afternoon. A fantastic way to boost revenue.',
    initials: 'DO',
    color: 'bg-accent',
  },
];

export default function Home({ setActivePage }) {
  const [selectedRole, setSelectedRole] = useState('patients');

  const roleDetails = {
    patients: {
      title: 'Get Care, Order Medicine, Track Delivery.',
      description: 'Consult fully licensed physicians via text, voice, or video. Receive digital prescription sheets that sync directly with a courier network for 2-hour doorstep deliveries.',
      cta: 'Get Patient App',
      badge: 'For Patients',
      color: 'border-emerald-500/20 bg-emerald-50/10 text-emerald-800',
      features: [
        'Immediate walk-in or scheduled telehealth consults',
        'Direct medicine ordering with digital prescriptions',
        'Real-time GPS order tracking from preparation to doorstep',
        'Fully secure, HIPAA-compliant patient dashboard',
      ],
    },
    doctors: {
      title: 'Practice Medicine with Digital Autonomy.',
      description: 'Conduct consultations, review certified histories, and write digital prescriptions. Set your own schedules, fees, and earn direct payouts with ease.',
      cta: 'Apply to Practice',
      badge: 'For Doctors',
      color: 'border-blue-500/20 bg-blue-50/10 text-blue-800',
      features: [
        'HD video, clear audio, and encrypted text chats',
        'In-built digital prescription generator',
        'Custom calendar and instant availability toggles',
        'Direct, secure weekly bank transfers',
      ],
    },
    pharmacies: {
      title: 'Connect Your Catalog to local digital buyers.',
      description: 'Upload your medicine stocks using standard CSV bulk sync. Prepare orders securely, and leverage the CareLoop courier network to fulfill prescriptions.',
      cta: 'Register Pharmacy',
      badge: 'For Pharmacies',
      color: 'border-amber-500/20 bg-amber-50/10 text-amber-800',
      features: [
        'Bulk CSV inventory loader synced in seconds',
        'Vetted digital prescription auditing sandbox',
        'Auto-dispatch GPS courier routing',
        'Staff permission-level dashboard controls',
      ],
    },
  };

  const steps = [
    {
      number: '01',
      title: 'Select Role & Setup Profile',
      desc: 'Patients register credentials, doctors upload medical boards certifications, and pharmacies sync product stock CSVs.',
    },
    {
      number: '02',
      title: 'Perform Digital Consultation',
      desc: 'Connect securely using our text, voice, or video portal. Certified clinicians author HIPAA-compliant prescriptions instantly.',
    },
    {
      number: '03',
      title: 'Express Doorstep Delivery',
      desc: 'Partner pharmacies fulfill order baskets, summoning localized CareLoop couriers to deliver medical parcels in under 2 hours.',
    },
  ];

  return (
    <div id="home-page-container" className="space-y-0">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-[#1F3A5F] via-[#152945] to-[#0F6E56] text-white overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-[-200px] left-[-200px] w-96 h-96 bg-[#3AAFA9]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#0F6E56]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-green-400 tracking-wider uppercase"
              >
                <Flame className="h-4 w-4 shrink-0 text-green-400 animate-pulse" />
                <span>Next-Generation Connected Healthcare</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]"
              >
                Connecting Patients, <br />
                Doctors & Pharmacies in <br className="hidden sm:inline" />
                <span className="text-green-400">One Seamless Loop.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 font-sans text-base md:text-lg max-w-2xl leading-relaxed font-light"
              >
                CareLoop is a unified three-sided digital health marketplace. Speak to vetted medical clinicians via text, voice, or HD video, obtain digital prescriptions, and receive home pharmacy courier deliveries in under 2 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button
                  id="hero-primary-cta"
                  onClick={() => {
                    setActivePage('patients');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-green-400 text-[#152945] hover:bg-white hover:text-[#1F3A5F] font-bold text-sm rounded-full transition-all duration-300 shadow-md transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Explore Patient App
                </button>
                <button
                  id="hero-secondary-cta"
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full transition-all duration-300 border border-white/10 cursor-pointer"
                >
                  Our Core Mission
                </button>
              </motion.div>
            </div>

            {/* Right Column: Mini Interactive Feature Board */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 text-secondary"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-6 w-6 text-primary" />
                    <span className="font-heading font-extrabold text-lg text-secondary">CareLoop Core</span>
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-black rounded-full uppercase tracking-wider">
                    SECURE LOOP
                  </span>
                </div>

                <div className="space-y-4 font-sans text-sm text-secondary/85 text-left">
                  <div className="p-4 bg-gray-50 rounded-2xl flex items-start space-x-3.5">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold text-secondary text-sm">HIPAA Certified Network</h4>
                      <p className="text-secondary/60 text-xs mt-0.5">End-to-end 256-bit encryption covering EHRs and video consultations.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl flex items-start space-x-3.5">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold text-secondary text-sm">Express Courier Service</h4>
                      <p className="text-secondary/60 text-xs mt-0.5">Automated geo-dispatch routing for swift pharmacy parcel delivery.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl flex items-start space-x-3.5">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold text-secondary text-sm">Integrated Digital EHR</h4>
                      <p className="text-secondary/60 text-xs mt-0.5">Central medical folder syncing doctor clinical records and pharmacy SKUs.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR SECTION */}
      <StatsBar />

      {/* 3. THREE-SIDED MARKETPLACE DEMO TAB */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              The CareLoop Ecosystem
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              One Unified Medical Marketplace
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans">
              CareLoop integrates the three critical poles of healthcare into a secure, synergistic loop. Click each profile role below to see what we offer.
            </p>

            {/* Role Buttons */}
            <div className="flex justify-center p-1 bg-gray-100 rounded-full max-w-md mx-auto shadow-inner mt-8">
              {['patients', 'doctors', 'pharmacies'].map((role) => (
                <button
                  key={role}
                  id={`marketplace-tab-btn-${role}`}
                  onClick={() => setSelectedRole(role)}
                  className={`flex-1 text-center py-3 rounded-full text-xs font-semibold capitalize transition-all duration-300 cursor-pointer ${
                    selectedRole === role
                      ? 'bg-[#1F3A5F] text-white shadow-md'
                      : 'text-secondary/75 hover:text-primary hover:bg-white/50'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Role Details Display Card */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-surface rounded-3xl p-6 md:p-12 border border-gray-100 shadow-sm text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                
                {/* Left col: Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${roleDetails[selectedRole].color}`}>
                    {roleDetails[selectedRole].badge}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-secondary leading-snug">
                    {roleDetails[selectedRole].title}
                  </h3>
                  <p className="text-secondary/70 font-sans text-sm md:text-base leading-relaxed font-light">
                    {roleDetails[selectedRole].description}
                  </p>
                  
                  {/* Features Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {roleDetails[selectedRole].features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        <span className="text-xs md:text-sm font-sans text-secondary font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right col: CTA box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-col justify-between h-64 shadow-inner">
                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-lg text-secondary">
                      Ready to join the loop?
                    </h4>
                    <p className="text-secondary/55 text-xs font-sans">
                      Start your registration, configure secure credentials, and experience medical consultations with unified delivery.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActivePage(selectedRole === 'patients' ? 'patients' : selectedRole === 'doctors' ? 'doctors' : 'pharmacies');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full inline-flex items-center justify-center py-3.5 bg-primary hover:bg-opacity-95 text-white font-bold text-sm rounded-full transition-all duration-300 shadow cursor-pointer group"
                  >
                    <span>{roleDetails[selectedRole].cta}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              The Workflow
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              A Complete Patient & Partner Journey
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans">
              Three seamless steps bridging medical triage, digital consultation, and home dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left space-y-6"
              >
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-heading font-black text-primary/10 tracking-tight">
                    {step.number}
                  </span>
                  <span className="p-2 bg-primary/5 text-primary rounded-xl font-bold text-xs">
                    Phase {idx + 1}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-xl text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-secondary/70 font-sans text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              User Stories
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              What Healthcare Providers & Patients Say
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans">
              Real feedback from verified platform users across our medical community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-surface rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow text-left"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-secondary/85 font-sans text-sm md:text-base leading-relaxed font-light italic">
                    "{test.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-gray-100">
                  <div className={`h-11 w-11 rounded-full ${test.color} text-white flex items-center justify-center font-heading font-bold text-sm shadow-inner shrink-0`}>
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-secondary">
                      {test.name}
                    </h4>
                    <p className="text-primary font-sans text-xs font-semibold">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PLATFORM CTA BANNER */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" />
            
            <Activity className="h-12 w-12 text-green-400 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
              Begin Your Connected Care Today
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Experience the three-sided advantage. Download the mobile app or apply as a provider partner to complete the loop.
            </p>
            
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-green-400 hover:bg-white text-secondary hover:text-primary font-bold text-sm rounded-full transition-all duration-300 shadow cursor-pointer"
              >
                Get App Instructions
              </button>
              <button
                onClick={() => {
                  setActivePage('faq');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full transition-all duration-300 border border-white/10 cursor-pointer"
              >
                Read Support FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
