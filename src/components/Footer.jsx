import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleLinkClick = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1F3A5F] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Logo & About */}
          <div className="flex flex-col space-y-4">
            <button
              id="footer-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="flex items-center space-x-2 text-left self-start group focus:outline-none cursor-pointer"
            >
              <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Activity className="h-6 w-6 text-primary-light text-green-400" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Care<span className="text-green-400">Loop</span>
              </span>
            </button>
            <p className="text-white/60 text-sm max-w-sm font-sans leading-relaxed">
              CareLoop is a three-sided digital healthcare marketplace seamlessly connecting patients, doctors, and pharmacies for unified medical consultation and delivery.
            </p>
            <span className="inline-block text-accent font-semibold text-sm italic">
              "Your Health, Connected."
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-0.5 after:bg-green-400">
              Quick Links
            </h3>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-green-400 transition-colors duration-200 cursor-pointer"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-green-400 transition-colors duration-200 cursor-pointer"
                >
                  About Our Mission
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-green-400 transition-colors duration-200 cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => handleLinkClick('faq')}
                  className="hover:text-green-400 transition-colors duration-200 cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: For Users */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-0.5 after:bg-green-400">
              For Platform Users
            </h3>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li>
                <button
                  id="footer-link-patients"
                  onClick={() => handleLinkClick('patients')}
                  className="hover:text-green-400 transition-colors duration-200 cursor-pointer"
                >
                  For Patients (Get Care)
                </button>
              </li>
              <li>
                <button
                  id="footer-link-doctors"
                  onClick={() => handleLinkClick('doctors')}
                  className="hover:text-green-400 transition-colors duration-200 cursor-pointer"
                >
                  For Doctors (Consultations)
                </button>
              </li>
              <li>
                <button
                  id="footer-link-pharmacies"
                  onClick={() => handleLinkClick('pharmacies')}
                  className="hover:text-green-400 transition-colors duration-200 cursor-pointer"
                >
                  For Pharmacies (Deliveries)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-white mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-0.5 after:bg-green-400">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 font-sans text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span>support@careloop.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span>+1 (800) 555-CARE (2273)</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span>100 Health Science Parkway, Suite 400, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons row */}
        <div className="flex justify-center space-x-6 py-6 border-t border-b border-white/10 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-white/5 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-white/5 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-white/5 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-white/5 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white/50 text-xs text-center md:text-left space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} CareLoop Technologies, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-green-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <span>&bull;</span>
            <a href="#terms" className="hover:text-green-400 transition-colors duration-200">
              Terms of Service
            </a>
            <span>&bull;</span>
            <a href="#hipaa" className="hover:text-green-400 transition-colors duration-200">
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
