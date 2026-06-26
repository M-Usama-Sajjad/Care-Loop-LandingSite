import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Address',
      content: 'support@careloop.com',
      sub: 'Replies within 12 hours',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone Support',
      content: '+1 (800) 555-CARE (2273)',
      sub: 'Mon-Fri, 9am - 6pm PST',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Corporate Headquarters',
      content: '100 Health Science Parkway, Suite 400',
      sub: 'San Francisco, CA 94107',
    },
  ];

  return (
    <div id="contact-page-view" className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 text-green-400 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            We're Here to Help
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-6"
          >
            Connect with CareLoop.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            Inquiries about licensing, strategic pharmacy partnerships, technical dashboard support, or general comments? Reach out and our specialized care team will connect shortly.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Contact details & Map Placeholder */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Direct Channels</span>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-secondary tracking-tight">
                  Reach our teams directly
                </h2>
                <p className="text-secondary/70 font-sans text-sm leading-relaxed">
                  We maintain separate desks for consumer questions, healthcare clinician credential vetting, and enterprise pharmacy CSV dashboard support.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-surface rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      {info.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-heading font-bold text-sm text-secondary">
                        {info.title}
                      </h4>
                      <p className="text-secondary font-sans text-sm font-semibold mt-1">
                        {info.content}
                      </p>
                      <p className="text-secondary/55 text-xs font-sans font-medium mt-0.5">
                        {info.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-surface rounded-3xl p-8 border border-gray-100 flex flex-col justify-center items-center text-center space-y-3 h-52 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 -z-1" />
                <Globe className="h-8 w-8 text-secondary/40 animate-pulse" />
                <h4 className="font-heading font-bold text-sm text-secondary">
                  Interactive Map coming soon
                </h4>
                <p className="text-secondary/60 text-xs font-sans max-w-xs">
                  We are deploying custom Mapbox location pins for nearby clinical nodes and participating express courier stations.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
