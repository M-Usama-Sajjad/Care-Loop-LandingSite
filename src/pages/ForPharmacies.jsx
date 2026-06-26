import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Store, ShieldAlert, BarChart3, Database, HeartHandshake, Truck, 
  Settings, UserCheck, Smartphone, CheckCircle, FileText, ArrowRight,
  AlertCircle, Upload, Check, Activity
} from 'lucide-react';

export default function ForPharmacies({ setActivePage }) {
  const [csvFile, setCsvFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [csvPreviewData, setCsvPreviewData] = useState([]);

  // Mock CSV parser
  const handleCsvFileSelection = (file) => {
    if (!file || file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      setUploadStatus('error');
      return;
    }
    
    setCsvFile(file);
    setUploadStatus('uploading');

    setTimeout(() => {
      setUploadStatus('success');
      // Simulate inventory data preview
      setCsvPreviewData([
        { sku: 'CL-90182', name: 'Amoxicillin 500mg', stock: '250', status: 'Added/Updated', price: '$14.99' },
        { sku: 'CL-44182', name: 'Loratadine 10mg (Claritin)', stock: '410', status: 'Added/Updated', price: '$9.49' },
        { sku: 'CL-11239', name: 'Metformin 850mg', stock: '180', status: 'Added/Updated', price: '$18.00' },
        { sku: 'CL-33918', name: 'Atorvastatin 20mg', stock: '95', status: 'Low Stock Alarm', price: '$24.50' },
      ]);
    }, 1500);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleCsvFileSelection(e.dataTransfer.files[0]);
    }
  };

  const pharmacyFeatures = [
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Bulk CSV Inventory Sync',
      description: 'Export inventory from PioneerRx, Micro Merchant Systems, or Liberty, and sync thousands of SKU listings instantly.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Dynamic Prescription Audit',
      description: 'Review legally verified digital prescriptions issued by CareLoop certified clinicians before preparing products.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Order Velocity & Revenue',
      description: 'Access complete billing histories, item velocities, customer analytics, and weekly platform payouts from a clean dashboard.',
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: 'Direct Patient Communication',
      description: 'Message patients directly through a secure web terminal for order clarifications, generic alternatives, or drug safety alerts.',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Auto-Dispatch Courier Link',
      description: 'System automatically summons nearest GPS-verified CareLoop couriers to pick up prepared, tamper-sealed parcels.',
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Flexible Dispatch Rules',
      description: 'Define your processing hours, courier handover limits, regional zones, and holidays to suit store capabilities.',
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'Verified Pharmacist Profiles',
      description: 'Manage staff accounts, credentials, and access audits with robust permission-level controls.',
    },
  ];

  return (
    <div id="for-pharmacies-page" className="space-y-0">
      
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
            Express Pharmacy Partners
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-6"
          >
            Digital Commerce, <br className="hidden md:inline" />
            <span className="text-green-400">For Local Pharmacies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            Unlock thousands of local digital orders. CareLoop integrates seamlessly with your pharmacy’s POS system using standard CSV bulk syncing, managing prescriptions digitally, and coordinating express courier delivery.
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
              Partner with CareLoop
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. DEMONSTRATION WORKFLOW PLATFORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left Side: Explainer */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Ecosystem Synergy</span>
              <h2 className="text-3xl font-heading font-extrabold text-secondary tracking-tight leading-tight">
                Architectural Advantage of the Connected Loop
              </h2>
              <p className="text-secondary/75 font-sans text-sm md:text-base leading-relaxed">
                By participating in the loop, your pharmacy moves beyond manual phone coordination and physical script drop-offs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 bg-green-50 text-green-500 rounded-full shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-secondary">HIPAA Audited Transmissions</h4>
                    <p className="text-secondary/65 text-xs font-sans mt-0.5">Patient Rx scripts arrive legally vetted with verifiable digital signatures from authorized telehealth clinicians.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 bg-green-50 text-green-500 rounded-full shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-secondary">Instant Courier Dispatch</h4>
                    <p className="text-secondary/65 text-xs font-sans mt-0.5">Once you package the items and tap "Ready for Pickup", our system coordinates nearby express GPS courier couriers in seconds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: CSV Interactive Upload Simulator */}
            <div className="lg:col-span-7">
              <div className="bg-surface rounded-3xl p-6 md:p-8 border border-gray-100 shadow-md space-y-6">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl text-secondary">
                    Inventory Sync Sandbox
                  </h3>
                  <p className="text-secondary/60 text-xs font-sans">
                    Test how our bulk CSV synchronization catalog loader works with your POS files.
                  </p>
                </div>

                {/* Dropzone Container */}
                <div
                  id="csv-dropzone"
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 relative ${
                    dragActive
                      ? 'border-primary bg-primary/5'
                      : uploadStatus === 'success'
                      ? 'border-emerald-500/50 bg-emerald-50/10'
                      : 'border-gray-200 hover:border-primary/40 bg-gray-50/50'
                  }`}
                >
                  <input
                    type="file"
                    id="csv-file-input"
                    accept=".csv"
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    onChange={(e) => e.target.files && handleCsvFileSelection(e.target.files[0])}
                  />

                  <AnimatePresence mode="wait">
                    {uploadStatus === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3"
                      >
                        <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                          <Upload className="h-6 w-6" />
                        </div>
                        <div className="font-heading font-bold text-sm text-secondary">
                          Drag & drop store inventory CSV, or click to browse
                        </div>
                        <p className="text-[10px] text-secondary/40 max-w-sm mx-auto leading-relaxed">
                          Export catalog files from PioneerRx, Liberty, or Micro Merchant Systems. Requires sku, name, stock, price.
                        </p>
                      </motion.div>
                    )}

                    {uploadStatus === 'uploading' && (
                      <motion.div
                        key="uploading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 py-4"
                      >
                        <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
                          <svg className="animate-spin h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </div>
                        <div className="font-heading font-bold text-sm text-secondary">
                          Parsing catalog columns and syncing SKUs...
                        </div>
                      </motion.div>
                    )}

                    {uploadStatus === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3"
                      >
                        <div className="mx-auto w-12 h-12 bg-rose-100 text-rose-500 rounded-xl flex items-center justify-center">
                          <AlertCircle className="h-6 w-6" />
                        </div>
                        <div className="font-heading font-bold text-sm text-secondary">
                          Invalid File Extension
                        </div>
                        <p className="text-[11px] text-rose-600 font-medium">
                          Please submit a valid spreadsheet catalog in standard comma-separated (.csv) format.
                        </p>
                        <button
                          onClick={() => setUploadStatus('idle')}
                          className="text-xs text-primary font-bold hover:underline"
                        >
                          Try another file
                        </button>
                      </motion.div>
                    )}

                    {uploadStatus === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3"
                      >
                        <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center">
                          <Check className="h-6 w-6" />
                        </div>
                        <div className="font-heading font-bold text-sm text-secondary">
                          Sync Successful: {csvFile?.name}
                        </div>
                        <p className="text-[11px] text-emerald-600 font-semibold">
                          4 medicine catalog matches mapped and updated in your active store listing.
                        </p>
                        <button
                          onClick={() => {
                            setUploadStatus('idle');
                            setCsvFile(null);
                            setCsvPreviewData([]);
                          }}
                          className="text-xs text-primary font-bold hover:underline"
                        >
                          Clear & Reset Dashboard
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CSV Sync Mapped Results Table Display */}
                {csvPreviewData.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border border-gray-100 rounded-2xl overflow-hidden shadow-inner text-left"
                  >
                    <div className="bg-gray-50/50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">Mapped Inventory Preview</span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full uppercase">SYNCED LIVE</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-sans text-secondary">
                        <thead className="bg-gray-50/30 border-b border-gray-100 font-semibold text-secondary/60">
                          <tr>
                            <th className="px-4 py-2.5">SKU ID</th>
                            <th className="px-4 py-2.5">Medicine Name</th>
                            <th className="px-4 py-2.5">Price</th>
                            <th className="px-4 py-2.5">Qty Stock</th>
                            <th className="px-4 py-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 font-medium">
                          {csvPreviewData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50/30">
                              <td className="px-4 py-2.5 font-mono text-secondary/60">{row.sku}</td>
                              <td className="px-4 py-2.5 font-semibold text-secondary">{row.name}</td>
                              <td className="px-4 py-2.5">{row.price}</td>
                              <td className="px-4 py-2.5 font-semibold">{row.stock}</td>
                              <td className="px-4 py-2.5">
                                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  row.status === 'Low Stock Alarm' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                                }`}>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP BENEFITS FEATURES LIST */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
              Partner Capabilities
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              Unlocking the Complete Pharmacy Sandbox
            </p>
            <p className="text-secondary/60 text-sm md:text-base font-sans max-w-xl mx-auto">
              We provide local pharmacies with enterprise-level tools to command virtual orders and speed up delivery.
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
                className="bg-white rounded-3xl p-6 border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start text-left group"
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
                  CareLoop Partner API v2
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COURIER SIGNUP AND COMPLIANCE SIGNUP */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1F3A5F] to-[#112440] rounded-3xl p-8 md:p-12 text-white text-center space-y-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            
            <Store className="h-12 w-12 text-green-400 mx-auto" />
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold">
              Register Your Pharmacy on CareLoop
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We welcome independent pharmacists, national pharmacy chains, and specialized clinics. Note that <span className="text-green-400 font-semibold">all partner accounts require verification checkouts</span> and state board certifications review before going live.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-green-400 text-secondary font-bold rounded-full hover:bg-white hover:text-primary hover:scale-[1.02] transition-all duration-300 shadow cursor-pointer text-sm"
              >
                Start Pharmacy Verification
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
