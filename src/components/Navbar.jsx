import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Activity } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'For Patients', value: 'patients' },
    { label: 'For Doctors', value: 'doctors' },
    { label: 'For Pharmacies', value: 'pharmacies' },
    { label: 'About', value: 'about' },
    { label: 'FAQ', value: 'faq' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-white/95 backdrop-blur-md py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          >
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-secondary">
              Care<span className="text-primary">Loop</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePage === item.value;
              return (
                <button
                  key={item.value}
                  id={`nav-link-${item.value}`}
                  onClick={() => handleNavClick(item.value)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-primary bg-primary/5 font-semibold'
                      : 'text-secondary/80 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <button
              id="nav-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="bg-primary hover:bg-opacity-95 text-white text-sm font-semibold rounded-full px-6 py-2.5 shadow-sm hover:shadow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-secondary hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-gray-100 bg-white shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activePage === item.value;
                return (
                  <button
                    key={item.value}
                    id={`mobile-nav-link-${item.value}`}
                    onClick={() => handleNavClick(item.value)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-secondary hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <button
                  id="mobile-nav-cta-btn"
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-primary hover:bg-opacity-95 text-white font-semibold text-center py-3.5 rounded-full shadow transition-all duration-300 cursor-pointer"
                >
                  Download App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
