import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components
import Home from './pages/Home';
import ForPatients from './pages/ForPatients';
import ForDoctors from './pages/ForDoctors';
import ForPharmacies from './pages/ForPharmacies';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'patients':
        return <ForPatients setActivePage={setActivePage} />;
      case 'doctors':
        return <ForDoctors setActivePage={setActivePage} />;
      case 'pharmacies':
        return <ForPharmacies setActivePage={setActivePage} />;
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ setActivePage={setActivePage} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div id="careloop-app-container" className="min-h-screen bg-surface flex flex-col antialiased">
      {/* 1. Header Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* 2. Main Content View area with Page transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
