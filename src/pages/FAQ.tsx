import { motion } from 'motion/react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';
import FAQAccordion from '../components/FAQAccordion';

interface FAQProps {
  setActivePage: (page: ActivePage) => void;
}

export default function FAQ({ setActivePage }: FAQProps) {
  return (
    <div id="faq-page-view" className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-[#1F3A5F] via-[#152945] to-[#0F6E56] text-white overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 text-green-400 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            Got Questions?
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-6"
          >
            CareLoop Help Center
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            Find comprehensive answers on medical credentials vetting, express delivery mapping rules, HIPAA security encryption standards, and platform usage.
          </motion.p>
        </div>
      </section>

      {/* 2. FAQ ACCORDION DISPLAY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Categorized Answers</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-secondary tracking-tight">
              Select your platform role below
            </h2>
            <p className="text-secondary/60 text-sm font-sans">
              Click through the tabs to find detailed compliance, usage, and technical support FAQs.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* 3. ADDITIONAL SUPPORT BANNER */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center space-y-5">
            <div className="mx-auto p-4 bg-primary/10 text-primary rounded-2xl inline-flex justify-center items-center">
              <HelpCircle className="h-7 w-7" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-secondary">
              Still have questions about CareLoop?
            </h3>
            <p className="text-secondary/70 font-sans text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              If you couldn’t find an answer to your query in our documentation, our support and partnership desk is open 24/7.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-bold text-sm rounded-full hover:bg-secondary hover:scale-[1.02] transition-all duration-300 shadow cursor-pointer"
              >
                Contact Support Desk
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
