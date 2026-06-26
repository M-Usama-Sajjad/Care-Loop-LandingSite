import { motion } from 'motion/react';
import { 
  Store, ClipboardList, FileSpreadsheet, RefreshCw, MessageCircle, 
  Map, BarChart, Undo2, Laptop, ShieldCheck, ArrowRight, CheckCircle 
} from 'lucide-react';
import { ActivePage } from '../types';

interface ForPharmaciesProps {
  setActivePage: (page: ActivePage) => void;
}

export default function ForPharmacies({ setActivePage }: ForPharmaciesProps) {
  const pharmacyFeatures = [
    {
      icon: <Store className="h-6 w-6" />,
      title: 'Verified Pharmacy Profile',
      description: 'Establish a trusted digital shop profile with hours, location, license data, and pharmacist credentials.',
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: 'Real-time Order Workflow',
      description: 'Manage incoming patient orders, package prescriptions, and automatically dispatch local CareLoop couriers.',
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6" />,
      title: 'CSV Bulk Inventory Sync',
      description: 'Export drug catalogs from any major POS and upload simple CSV sheets to update thousands of stock records in seconds.',
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Active Stock Management',
      description: 'Toggle critical medicine levels, manage over-the-counter stock, set localized pricing, or edit descriptions.',
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Secure Patient Live Chat',
      description: 'Consult directly with patients on specific orders, request clarification on external scripts, or suggest drug substitutes.',
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: 'Express Delivery Mapping',
      description: 'Integrate with our automated courier dispatch network for rapid 2-hour localized home delivery or curb-side pickups.',
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Real-time Sales Dashboard',
      description: 'Access thorough monthly sales analytics, check average delivery metrics, audit invoices, and evaluate growth.',
    },
    {
      icon: <Undo2 className="h-6 w-6" />,
      title: 'Refund & Discrepancy Manager',
      description: 'Reverse billing and initiate electronic refunds instantly for cancelled orders or prescription rejections.',
    },
  ];

  return (
    <div id="for-pharmacies-page" className="space-y-0">
      
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
            Digital Pharmacy Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-6"
          >
            Empower Your Pharmacy <br className="hidden md:inline" />
            <span className="text-green-400">Expand Local Sales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            Close the healthcare loop in your local city. Partner with CareLoop to capture local online medicine demand, process orders securely, sync inventories with easy CSV exports, and connect with immediate courier delivery.
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
              Apply as Partner Pharmacy
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL CALLOUT */}
      <section className="py-12 bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 bg-primary/10 rounded-2xl text-primary shrink-0">
                <Laptop className="h-8 w-8" />
              </div>
              <div className="text-left space-y-1">
                <h3 className="font-heading font-bold text-lg text-secondary">
                  Dedicated Web-Based Dashboard
                </h3>
                <p className="text-secondary/70 text-sm font-sans max-w-xl">
                  Unlike patients who use a mobile app, CareLoop pharmacies utilize an immersive, high-speed **Web Dashboard** on desktop for professional inventory, ticket management, and POS integrations.
                </p>
              </div>
            </div>
            <span className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase shrink-0">
              Desktop Native Experience
            </span>
          </div>
        </div>
      </section>

      {/* 3. PHARMACY FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              Partner Capabilities
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              A Complete Operating System for Retail Pharmacies
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans max-w-xl mx-auto">
              Our secure web panel simplifies digital pharmacy workflow from inventory ingestion to final courier delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pharmacyFeatures.map((feature, idx) => (
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
                  CareLoop Merchant Web
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SYNC EXPLAINER */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-full">CSV Integration</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight leading-tight">
                Connect your existing POS system in seconds
              </h2>
              <p className="text-secondary/70 font-sans text-sm md:text-base leading-relaxed">
                There is absolutely no need to manually enter thousands of SKU items or configure complex, expensive API integrations. CareLoop supports standard CSV syncing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-sans text-secondary/80">
                    **Export standard spreadsheet** from PioneerRx, Liberty, Micro Merchant, or other POS.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-sans text-secondary/80">
                    **Match 3 basic columns**: Medicine SKU, Retail Unit Price, and Stock Inventory Count.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-sans text-secondary/80">
                    **Upload via Web Panel** to instantly sync all active items and available quantities.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-md space-y-4 text-left font-mono text-xs text-secondary/70">
                <div className="flex items-center justify-between border-b pb-3 text-secondary/40">
                  <span>pos_inventory_sync.csv</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">READY FOR UPLOAD</span>
                </div>
                <div className="bg-surface p-4 rounded-xl space-y-1 border">
                  <div>sku,product_name,retail_price,stock_qty</div>
                  <div>9812-3211,Insulin Pen 3ml,24.50,150</div>
                  <div>3201-9428,Metformin 500mg (100 tabs),12.00,80</div>
                  <div>0554-1102,Atorvastatin 20mg (30 tabs),18.00,210</div>
                  <div>1132-0495,Amoxicillin 500mg,15.75,45</div>
                </div>
                <div className="text-[11px] text-secondary/40 font-sans">
                  * Note: For prescription items, our dashboard requires matching verified patient Rx scripts.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PHARMACY SIGNUP PROTOCOL */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center space-y-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            
            <ShieldCheck className="h-12 w-12 text-green-400 mx-auto" />
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold">
              Partner Your Pharmacy on CareLoop
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Become the default fulfillment node in your neighborhood. Note that <span className="text-green-400 font-semibold">all partner pharmacies require manual regulatory and license pre-approval</span> by our CareLoop operations team before receiving live patient orders.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-green-400 text-secondary font-bold rounded-full hover:bg-white hover:text-primary hover:scale-[1.02] transition-all duration-300 shadow cursor-pointer text-sm"
              >
                Apply for Pharmacy Vetting
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
