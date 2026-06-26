import { motion } from 'motion/react';
import { 
  Heart, Calendar, Users, Video, FileText, History, BarChart3, 
  Wallet, ShieldCheck, Award, FileSpreadsheet, ArrowRight, ClipboardCheck 
} from 'lucide-react';
import { ActivePage } from '../types';

interface ForDoctorsProps {
  setActivePage: (page: ActivePage) => void;
}

export default function ForDoctors({ setActivePage }: ForDoctorsProps) {
  const doctorFeatures = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Verified Professional Profile',
      description: 'Display your board credentials, specialties, publications, and patient reviews on a public profile.',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Availability & Calendar Engine',
      description: 'Define your custom consult schedules, block vacation dates, or toggle on-demand walk-in hours with a click.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Real-time Consultation Queue',
      description: 'Seamlessly track incoming digital consults, triage requests, and manage active session times from a central panel.',
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: 'High-speed Voice/Video/Chat',
      description: 'Enjoy high-definition encrypted video, crisp voice calling, and rich real-time chat with file attachment support.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Digital Prescription Generator',
      description: 'Generate legally certified Rx scripts from within the live session using structured database auto-fills.',
    },
    {
      icon: <History className="h-6 w-6" />,
      title: 'Consent-based EHR Access',
      description: 'Consult patient medical background, drug allergies, past diagnoses, and historic charts with patient pin authorization.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Earning Metrics Analytics',
      description: 'Evaluate daily and monthly consultation volumes, billing details, platform stats, and performance scores.',
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: 'Direct Weekly Bank Payouts',
      description: 'Connect your corporate or personal checking account for swift automated weekly earnings payouts.',
    },
  ];

  const trustBadges = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: '100% HIPAA-Compliant',
      description: 'All server data, media feeds, and EHR records utilize 256-bit encryption protecting patient confidentiality.',
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
      title: 'Rigorous Board Verification',
      description: 'We manually query national databases to audit and certify medical licenses before activation.',
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      title: 'Malpractice Coverage Bridges',
      description: 'Our digital EHR integrations maintain structured logging and timestamps protecting clinical validity.',
    },
  ];

  return (
    <div id="for-doctors-page" className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#1F3A5F] via-[#152945] to-[#0F6E56] text-white overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 text-green-400 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            Digital Practice Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-6"
          >
            Practicing Medicine, <br className="hidden md:inline" />
            <span className="text-green-400">Reimagined.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            Expand your clinical reach. CareLoop offers licensed medical practitioners a premium, secure suite to run a flexible telehealth practice, generate certified digital prescriptions, and monitor earnings weekly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8"
          >
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-green-400 text-secondary font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-md cursor-pointer"
            >
              Apply to Join Platform
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. DOCTOR FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              Clinical Toolkit
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              Tools Designed for Modern Clinical Autonomy
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans max-w-xl mx-auto">
              Our HIPAA-compliant desktop and mobile portal supports clinical workflows from intake to prescription.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.1 }}
                className="bg-surface rounded-3xl p-6 border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start text-left group"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-secondary">
                    {feature.title}
                  </h3>
                  <p className="text-secondary/70 font-sans text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-bold text-primary tracking-wider uppercase">
                  CareLoop EHR v2
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TRUST & VERIFICATION SECTION */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              Safety First
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              A Platform Built on Trust & Verification
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans max-w-xl mx-auto">
              We maintain absolute legal, technical, and clinical compliance across every digital consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col space-y-4"
              >
                <div className="p-4 bg-primary/10 rounded-2xl inline-block self-start">
                  {badge.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-secondary">
                  {badge.title}
                </h3>
                <p className="text-secondary/70 font-sans text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLINICAL SIGNUP PROTOCOL */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1F3A5F] to-[#112440] rounded-3xl p-8 md:p-12 text-white text-center space-y-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            
            <Heart className="h-12 w-12 text-green-400 mx-auto" />
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold">
              Apply to Practice on CareLoop
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We welcome licensed general practitioners, pediatricians, endocrinologists, and medical specialists. Note that <span className="text-green-400 font-semibold">all joining accounts require manual admin credential approval</span> and license vetting before being authorized to accept live patient consults.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-green-400 text-secondary font-bold rounded-full hover:bg-white hover:text-primary hover:scale-[1.02] transition-all duration-300 shadow cursor-pointer text-sm"
              >
                Start Verification Application
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
