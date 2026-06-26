import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = {
  patients: [
    {
      question: 'How do I book a doctor appointment?',
      answer: 'Booking an appointment on CareLoop is simple. Open the mobile app, browse available doctors by specialty or location, select your preferred time slot, choose your consultation format (text, voice, or high-definition video), and confirm your booking. You will receive a reminder notification 15 minutes before your scheduled start.',
    },
    {
      question: 'Can I order medicine without a prescription?',
      answer: 'CareLoop adheres to legal pharmacy regulations. You can order over-the-counter (OTC) medicines freely. For prescription-only drugs, you must upload a valid digital prescription issued through a CareLoop doctor consultation, or submit an external paper prescription which our pharmacist partners will verify before processing.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your medicine order is confirmed, you can track it in real-time on our live map. You will see when the pharmacist prepares the order, when the courier picks it up, and its exact location on a map until it arrives safely at your doorstep.',
    },
    {
      question: 'Is my medical data secure?',
      answer: 'Absolute security and user privacy is our highest priority. CareLoop is fully HIPAA-compliant. All chat messages, consultation audio/video feeds, and prescription histories are protected by end-to-end 256-bit encryption. Doctors can only view your medical file with your explicit digital consent.',
    },
    {
      question: 'How do I reorder a previous medicine order?',
      answer: 'Navigate to your Profile tab in the CareLoop app, select "Order History," find the specific order you want to repeat, and tap "Reorder." This will automatically populate your basket with the exact items, ready for a speedy checkout.',
    },
  ],
  doctors: [
    {
      question: 'How do I get verified on CareLoop?',
      answer: 'Doctors joining CareLoop must undergo a rigorous credentialing process. When registering, you will be prompted to submit your medical license, board certifications, and proof of identity. Our admin team verifies these details with national healthcare registries within 48 to 72 hours before your professional profile goes live.',
    },
    {
      question: 'How are earnings calculated and paid out?',
      answer: 'Earnings are generated based on the consultation rates you set and completed medical consultations. CareLoop takes a flat 15% platform service fee, and the remaining 85% goes directly to you. Earnings are aggregated and paid out securely via weekly automated bank transfers.',
    },
    {
      question: 'Can I set my own availability hours?',
      answer: 'Yes! You have complete autonomy. Our advanced scheduling system allows you to define your own working hours, block out break times, or toggle dynamic "Instant Availability" when you are open for immediate walk-in chat consultations.',
    },
    {
      question: 'What consultation types are supported?',
      answer: 'We support rich communication formats designed for effective telehealth. This includes high-speed encrypted Text messaging (perfect for quick check-ups), interactive Voice calls, and immersive high-definition Video conferencing. You can easily transition between modes within a live session.',
    },
    {
      question: 'How do I access patient history?',
      answer: 'During a consultation, you can view the patient’s past history, previous prescription records, and allergy lists via our CareLoop Electronic Health Record (EHR) integration. Access is only authorized upon the patient granting explicit digital consent when booking.',
    },
  ],
  pharmacies: [
    {
      question: 'How do I upload my inventory?',
      answer: 'Pharmacies can easily manage and upload their medicine inventories. You can do this manually through the CareLoop Web Dashboard by adding individual product listings, or use our streamlined bulk sync feature to export and upload a standard CSV file directly.',
    },
    {
      question: 'How does CSV inventory sync work?',
      answer: 'Our bulk sync feature is highly versatile. Export your medicine catalog from your Point of Sale (POS) system into a spreadsheet, format the columns to match our standard CSV structure (SKU, Price, Quantity in stock), and upload it inside your web dashboard to instantly update thousands of items in seconds.',
    },
    {
      question: 'How does the order process work?',
      answer: 'When a nearby patient orders medication, your dashboard rings. You have 5 minutes to accept the order, package the items securely, and apply our automated tamper-evident digital tracking label. A CareLoop courier is dispatched automatically to pick up the package and navigate directly to the patient.',
    },
    {
      question: 'What is the refund process for medicines?',
      answer: 'In the rare event of order discrepancies or cancellation before dispatch, refunds are initiated via the Web Dashboard. CareLoop handles the digital transaction reverse, refunding the patient’s credit card or bank account directly. Unopened, non-prescription goods can be returned according to our standard 14-day policy.',
    },
    {
      question: 'Do I need a specific POS system to integrate?',
      answer: 'No specific POS system is required. Since we use standard CSV export and import formats, you can export from any modern system (such as PioneerRx, Micro Merchant Systems, or Liberty) and upload it instantly to our platform without needing complex, costly API bridges.',
    },
  ],
};

export default function FAQAccordion() {
  const [activeTab, setActiveTab] = useState('patients');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const tabs = [
    { label: 'For Patients', value: 'patients' },
    { label: 'For Doctors', value: 'doctors' },
    { label: 'For Pharmacies', value: 'pharmacies' },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedIndex(null); // Reset accordions on tab switch
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="faq-accordion-container" className="max-w-3xl mx-auto">
      {/* Tabs */}
      <div className="flex p-1.5 bg-gray-100 rounded-full mb-10 shadow-inner max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              id={`faq-tab-btn-${tab.value}`}
              onClick={() => handleTabChange(tab.value)}
              className={`flex-1 text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-primary text-white shadow-md'
                  : 'text-secondary/75 hover:text-primary hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {faqs[activeTab].map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  id={`faq-item-${activeTab}-${index}`}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'border-primary/30 shadow-md' : 'border-gray-100 shadow-sm hover:border-gray-200'
                  }`}
                >
                  {/* Trigger Header */}
                  <button
                    id={`faq-trigger-${activeTab}-${index}`}
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className={`h-5 w-5 shrink-0 transition-colors duration-300 ${
                        isExpanded ? 'text-primary' : 'text-secondary/40'
                      }`} />
                      <span className="font-heading font-semibold text-base md:text-lg text-secondary leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`p-1.5 rounded-full bg-gray-50 transition-transform duration-300 shrink-0 ${
                      isExpanded ? 'rotate-180 bg-primary/10 text-primary' : 'text-secondary/50'
                    }`}>
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </button>

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`faq-content-${activeTab}-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 md:px-6 md:pb-6 pt-0 border-t border-gray-50 text-secondary/75 text-sm md:text-base leading-relaxed font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
