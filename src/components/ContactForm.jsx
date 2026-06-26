import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setStatus('submitting');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };

  return (
    <div id="contact-form-card" className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100">
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 px-4"
        >
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 text-emerald-500 mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-secondary mb-3">
            Message Sent Successfully!
          </h3>
          <p className="text-secondary/70 font-sans max-w-md mx-auto leading-relaxed mb-6">
            Thank you for reaching out to CareLoop. Our dedicated support or partnership team will review your inquiry and get back to you shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-opacity-95 transition-all duration-300 shadow-sm cursor-pointer"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-secondary">
              Send us a Message
            </h3>
            <p className="text-secondary/60 text-sm font-sans">
              Have a question or want to partner with us? Fill out the form below.
            </p>
          </div>

          {status === 'error' && (
            <div className="flex items-start space-x-3 p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl text-sm">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-secondary">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl font-sans text-secondary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-secondary">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl font-sans text-secondary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Subject Dropdown */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-secondary">
              Inquiry Subject
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl font-sans text-secondary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Partnership">Partnership Opportunities</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Join as Doctor">Join as Doctor Partner</option>
                <option value="Join as Pharmacy">Join as Pharmacy Partner</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-secondary/40">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-secondary">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us details about your inquiry..."
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl font-sans text-secondary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="contact-submit-btn"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-opacity-95 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {status === 'submitting' ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending Message...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
