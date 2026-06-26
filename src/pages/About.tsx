import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap, Globe, Activity, Users, Award } from 'lucide-react';
import { ActivePage, TeamMember } from '../types';

interface AboutProps {
  setActivePage: (page: ActivePage) => void;
}

const values = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Care First',
    description: 'We prioritize patients’ clinical outcomes, mental comfort, and overall convenience above all else.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Absolute Trust',
    description: 'We hold our clinicians, pharmacies, and technical infrastructure to rigorous security and compliance audits.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Express Speed',
    description: 'We minimize diagnostic delay, prescription waiting times, and delivery times to under 2 hours.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Total Accessibility',
    description: 'We bring certified clinicians and medicines to individuals in under-served urban or rural settings.',
  },
];

const team: TeamMember[] = [
  {
    id: 'm1',
    name: 'Dr. Evelyn Martinez, MD',
    role: 'Co-Founder & Chief Medical Officer',
    initials: 'EM',
    color: 'bg-teal-600',
  },
  {
    id: 'm2',
    name: 'Vikram Sethi',
    role: 'Co-Founder & Chief Executive Officer',
    initials: 'VS',
    color: 'bg-secondary',
  },
  {
    id: 'm3',
    name: 'Sarah Chen',
    role: 'VP of Engineering & Security',
    initials: 'SC',
    color: 'bg-accent',
  },
];

export default function About({ setActivePage }: AboutProps) {
  return (
    <div id="about-page-view" className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 text-green-400 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            Our Mission & Core Values
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-6"
          >
            Making Quality Healthcare <br className="hidden md:inline" />
            <span className="text-green-400">Accessible to Everyone, Everywhere.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            We believe that consulting a doctor or obtaining vital medications shouldn't be a test of patience or endurance. CareLoop bridges the gap to provide integrated digital health solutions.
          </motion.p>
        </div>
      </section>

      {/* 2. VISION AND PLATFORM OVERVIEW */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual overview */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-sm h-96 bg-gradient-to-br from-primary/10 to-secondary/15 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between shadow-sm">
                <div className="flex items-center space-x-2">
                  <Activity className="h-8 w-8 text-primary" />
                  <span className="font-heading font-bold text-xl text-secondary">CareLoop Core</span>
                </div>
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-secondary">A Three-Sided Connected Ecosystem</div>
                  <div className="h-0.5 bg-gray-100 w-full" />
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full font-bold">1. Patients</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-bold">2. Doctors</span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full font-bold">3. Pharmacies</span>
                  </div>
                </div>
                <span className="text-xs text-secondary/40 font-medium">HIPAA Certified Healthcare Network</span>
              </div>
            </div>

            {/* Right Column: Text narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">The Future of Connected Healthcare</span>
              <h2 className="text-3xl font-heading font-extrabold text-secondary tracking-tight">
                Our Vision for Seamless Wellness
              </h2>
              <p className="text-secondary/70 font-sans text-sm md:text-base leading-relaxed">
                By unifying virtual consultation pipelines, cloud electronic health records (EHRs), and pharmacy inventories, we have built a seamless loop. No paper scripts, no lost records, and no delivery lag.
              </p>
              <div className="p-6 bg-surface rounded-2xl border border-gray-100 space-y-2">
                <h4 className="font-heading font-bold text-base text-secondary">
                  The Three-Sided Platform, Explained Simply
                </h4>
                <p className="text-secondary/65 text-xs md:text-sm font-sans leading-relaxed">
                  *Patients* receive virtual clinical oversight and medicine delivery. *Doctors* gain professional flexibility and administrative digital tools. *Pharmacies* unlock local digital business, managing orders with a dedicated POS CSV bulk-sync web dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              Our Principles
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              Values That Drive Our Product & Team
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans">
              We align our features, compliance protocols, and partner workflows to these four commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col items-start space-y-4"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary inline-block">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-secondary">
                  {v.title}
                </h3>
                <p className="text-secondary/70 font-sans text-xs md:text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FOUNDING TEAM PLACEHOLDERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              Our Leadership
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              The Innovators Behind CareLoop
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans">
              Meet our founding team combining deep clinical expertise, software engineering, and operations leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-[#F7F9FC] rounded-3xl p-6 border border-gray-100 text-center space-y-5 hover:shadow-md transition-shadow"
              >
                <div className="mx-auto h-24 w-24 rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl shadow-inner relative overflow-hidden">
                  <div className={`absolute inset-0 ${member.color}`} />
                  <span className="relative z-10">{member.initials}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-lg text-secondary">
                    {member.name}
                  </h4>
                  <p className="text-primary font-sans text-xs md:text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
                <p className="text-secondary/60 text-xs font-sans max-w-xs mx-auto leading-relaxed">
                  Committed to delivering pristine UI, absolute HIPAA security, and high clinical availability across our digital platform.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
