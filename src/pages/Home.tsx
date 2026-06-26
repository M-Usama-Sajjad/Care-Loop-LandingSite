import { motion } from 'motion/react';
import { Shield, User, Heart, Smartphone, ArrowRight, Store, Calendar, CheckCircle, Award } from 'lucide-react';
import { ActivePage, Testimonial } from '../types';
import StatsBar from '../components/StatsBar';

interface HomeProps {
  setActivePage: (page: ActivePage) => void;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Sarah Jenkins',
    role: 'Pediatrician, 12 Years Exp.',
    quote: 'CareLoop has completely streamlined my virtual practice. I can manage text consults during free slots and run high-quality video sessions seamlessly. The digital prescriptions go directly to the patient\'s chosen pharmacy instantly.',
    initials: 'SJ',
    color: 'bg-teal-500',
  },
  {
    id: 't2',
    name: 'Michael Thompson',
    role: 'Chronic Patient (Type-2 Diabetes)',
    quote: 'Being able to consult my endocrinologist and have my monthly medicines delivered within 2 hours is life-changing. I track the delivery rider on the map directly. CareLoop has connected all my healthcare needs.',
    initials: 'MT',
    color: 'bg-amber-500',
  },
  {
    id: 't3',
    name: 'Amina Patel',
    role: 'Director, CareFirst Pharmacy',
    quote: 'We synced our POS inventory using a simple CSV upload on CareLoop. We now process 40+ new orders a day, serving local patients with ease. Our couriers love the streamlined order-routing app.',
    initials: 'AP',
    color: 'bg-blue-500',
  },
];

export default function Home({ setActivePage }: HomeProps) {
  const handleLearnMore = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-view" className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section
        id="hero-banner"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white overflow-hidden"
      >
        {/* Background Decorative Blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-2/3 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide border border-white/10"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span>Smart Care Platform is Live in 50+ Cities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight"
              >
                Your Health, <br />
                <span className="text-green-400">Connected.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/85 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                The ultimate three-sided digital marketplace linking Patients, Doctors, and Pharmacies. Experience high-definition virtual care, instant prescriptions, and express medicine delivery in one cohesive circle.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button
                  id="hero-download-btn"
                  onClick={() => handleLearnMore('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center cursor-pointer"
                >
                  Download the App
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
                <button
                  id="hero-learn-btn"
                  onClick={() => handleLearnMore('about')}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/35 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  Learn Our Story
                </button>
              </motion.div>
            </div>

            {/* Right Graphic Placeholder */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-md h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-6 border border-white/15 flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
              >
                {/* Simulated UI Screen */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-white/40 font-mono">CARELOOP EHR v2.1</span>
                </div>

                <div className="my-auto space-y-4">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-400/20 rounded-lg text-green-400">
                        <User className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/50">Consulting Pediatrician</div>
                        <div className="text-sm font-semibold">Dr. Jenkins</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-green-400/10 text-green-400 text-[10px] font-bold rounded-full uppercase">Active HD Video</span>
                  </div>

                  <div className="bg-white/10 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-400/20 rounded-lg text-blue-400">
                        <Store className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/50">Medicine Order</div>
                        <div className="text-sm font-semibold">Insulin Pen + Syringes</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-yellow-400/10 text-yellow-400 text-[10px] font-bold rounded-full uppercase">On the Way</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-[11px] text-white/60">
                  <span>HIPAA Encrypted</span>
                  <span>SSL Certified</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <StatsBar />

      {/* 3. THREE-SIDED MARKETPLACE FEATURES */}
      <section id="marketplace-features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              One Unified Ecosystem
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              Smarter Healthcare, Three Connected Verticals
            </p>
            <p className="text-secondary/70 font-sans text-base max-w-2xl mx-auto">
              We bridge the gap between consults and cures, enabling three separate stakeholder flows to sync in perfect real-time harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Patients Feature Card */}
            <motion.div
              id="feature-card-patients"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="bg-[#F7F9FC] rounded-3xl p-8 border border-gray-100 hover:border-primary/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <User className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-2xl text-secondary">
                    For Patients
                  </h3>
                  <p className="text-secondary/70 font-sans text-sm leading-relaxed">
                    Consult certified doctors, receive verified digital prescriptions, search local pharmacies, order meds with express 2-hour home delivery, and track your health metrics.
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <button
                  id="feature-btn-patients"
                  onClick={() => handleLearnMore('patients')}
                  className="inline-flex items-center text-primary font-bold hover:text-secondary group/btn transition-colors duration-200 cursor-pointer text-sm"
                >
                  Explore Patient Portal
                  <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Doctors Feature Card */}
            <motion.div
              id="feature-card-doctors"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F7F9FC] rounded-3xl p-8 border border-gray-100 hover:border-primary/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Heart className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-2xl text-secondary">
                    For Medical Professionals
                  </h3>
                  <p className="text-secondary/70 font-sans text-sm leading-relaxed">
                    Build your virtual practice, manage patient EHRs, consult via high-speed encrypted voice, video, or chat, issue digital prescriptions, and check your earning dashboard.
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <button
                  id="feature-btn-doctors"
                  onClick={() => handleLearnMore('doctors')}
                  className="inline-flex items-center text-primary font-bold hover:text-secondary group/btn transition-colors duration-200 cursor-pointer text-sm"
                >
                  Explore Doctor Portal
                  <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Pharmacies Feature Card */}
            <motion.div
              id="feature-card-pharmacies"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#F7F9FC] rounded-3xl p-8 border border-gray-100 hover:border-primary/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Store className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-2xl text-secondary">
                    For Partner Pharmacies
                  </h3>
                  <p className="text-secondary/70 font-sans text-sm leading-relaxed">
                    Sync medicine stock via simple CSV upload, fulfill local orders securely, map out delivery routes automatically, message patients directly, and access analytics dashboards.
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <button
                  id="feature-btn-pharmacies"
                  onClick={() => handleLearnMore('pharmacies')}
                  className="inline-flex items-center text-primary font-bold hover:text-secondary group/btn transition-colors duration-200 cursor-pointer text-sm"
                >
                  Explore Pharmacy Portal
                  <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              As Simple As It Gets
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              Connecting You in Three Easy Steps
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans leading-relaxed">
              We have eliminated the friction of old-school medicine, booking, and pickup queues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 -z-1" />

            {/* Step 1 */}
            <div className="text-center space-y-5 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:scale-[1.03] transition-transform duration-300">
              <span className="absolute top-4 right-4 text-sm font-extrabold text-primary/15 bg-primary/5 px-2.5 py-1 rounded-full">STEP 01</span>
              <div className="mx-auto p-4 bg-primary/10 rounded-2xl text-primary inline-flex justify-center items-center">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary">
                Register & Verify
              </h3>
              <p className="text-secondary/70 text-sm font-sans leading-relaxed">
                Download the app, authenticate using secure biometric login, and define your medical profile and allergies list once.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-5 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:scale-[1.03] transition-transform duration-300">
              <span className="absolute top-4 right-4 text-sm font-extrabold text-primary/15 bg-primary/5 px-2.5 py-1 rounded-full">STEP 02</span>
              <div className="mx-auto p-4 bg-primary/10 rounded-2xl text-primary inline-flex justify-center items-center">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary">
                Connect Instantly
              </h3>
              <p className="text-secondary/70 text-sm font-sans leading-relaxed">
                Browse on-duty general practitioners or specialists and launch text, voice, or video consults immediately.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-5 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:scale-[1.03] transition-transform duration-300">
              <span className="absolute top-4 right-4 text-sm font-extrabold text-primary/15 bg-primary/5 px-2.5 py-1 rounded-full">STEP 03</span>
              <div className="mx-auto p-4 bg-primary/10 rounded-2xl text-primary inline-flex justify-center items-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary">
                Get Care & Delivery
              </h3>
              <p className="text-secondary/70 text-sm font-sans leading-relaxed">
                The doctor writes a secure digital prescription synced to your app. Select a nearby pharmacy to deliver express to your door.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              Proven Outcomes
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              Trusted by Professionals & Patients
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans">
              Don't just take our word for it—read real feedback from members of our connected loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                id={`testimonial-card-${t.id}`}
                className="bg-[#F7F9FC] rounded-3xl p-6 border border-gray-50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Quote Icon styling */}
                  <span className="text-4xl font-serif text-primary/20 block leading-none select-none">“</span>
                  <p className="text-secondary/85 text-sm font-sans leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200/50 mt-6">
                  {/* Colored Circle Avatar */}
                  <div className={`h-11 w-11 rounded-full ${t.color} text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 shadow-inner`}>
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-sm text-secondary">
                      {t.name}
                    </h4>
                    <p className="text-secondary/65 text-xs font-sans font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APP STORE & GOOGLE PLAY DOWNLOADS */}
      <section id="app-download-cta" className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary to-[#112440] rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden shadow-xl">
            {/* Background vector flair */}
            <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-primary/10 rounded-full blur-2xl" />

            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold leading-tight">
                Manage your complete healthcare, <br />
                <span className="text-green-400">on the move.</span>
              </h2>
              <p className="text-white/80 font-sans text-sm md:text-base max-w-xl leading-relaxed">
                Take virtual appointments, order chronic medications, and consult in real-time. Download the mobile app on App Store or Google Play and close the healthcare loop today.
              </p>
              
              {/* App Store / Google Play Mock Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                {/* App Store Button */}
                <button
                  id="appstore-mock-btn"
                  onClick={() => handleLearnMore('contact')}
                  className="flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94.1.08.2.12.31.12.9 0 2.01-.59 2.5-1.45z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase text-white/60">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </button>

                {/* Google Play Button */}
                <button
                  id="googleplay-mock-btn"
                  onClick={() => handleLearnMore('contact')}
                  className="flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5.27v13.46c0 .54.29 1.03.76 1.27l8.4-8.4L3.76 4c-.47.24-.76.73-.76 1.27zm11.76 6.73L4.85 22h12.56c.64 0 1.2-.41 1.4-.99l-4.05-4.01-4.14-4.01zM21.2 5.01C21 4.41 20.44 4 19.8 4H4.85l12.21 12.21 4.14-4.14c.56-.56.56-1.5 0-2.06l-4.14-4.14z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase text-white/60">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-sm h-72 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl border border-white/10 p-6 flex flex-col justify-center items-center text-center space-y-4">
                <Smartphone className="h-16 w-16 text-green-400" />
                <span className="px-4 py-1.5 bg-primary/20 text-green-400 rounded-full text-xs font-bold tracking-wider">CARELOOP MOBILE V2.0</span>
                <span className="text-white/70 text-sm font-sans">Scan code on app store or download via links.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section id="final-cta-banner" className="py-20 bg-gradient-to-br from-primary to-secondary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-1" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Award className="h-12 w-12 text-green-400 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
            Ready to experience smarter, connected healthcare?
          </h2>
          <p className="text-white/80 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Close the health loop. Join thousands of patients, doctors, and pharmacy owners. Registration is secure, straightforward, and 100% HIPAA-compliant.
          </p>
          <div className="pt-4">
            <button
              id="cta-bottom-btn"
              onClick={() => handleLearnMore('contact')}
              className="inline-flex items-center justify-center px-10 py-4 bg-green-400 text-secondary font-bold text-base rounded-full hover:bg-white hover:text-primary hover:scale-[1.03] transition-all duration-300 shadow-md cursor-pointer"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
