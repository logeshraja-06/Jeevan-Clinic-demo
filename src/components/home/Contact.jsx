import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { clinicData } from '../../data/clinic';
import { allServices } from '../../data/services';
import { createWhatsAppLink, createCallLink } from '../../utils/helpers';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a required service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden font-body">
      <Container>
        <SectionHeading
          eyebrow="APPOINTMENT & INQUIRIES"
          title="Let's Get You Moving Again."
          subtitle="For appointments, treatment enquiries or physical evaluations, get in touch with Jeevan Physiotherapy Clinic."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pt-2">
          
          {/* Left Column: Direct Contact & Location Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Line */}
            <div className="p-6 border border-gray-200 bg-[#F4F8F7] space-y-2 rounded-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B8480] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1B8480]" />
                Direct Clinic Line
              </div>
              <a
                href={createCallLink(clinicData.phoneRaw)}
                className="font-heading text-2xl font-extrabold text-[#1E2A38] hover:text-[#1B8480] transition-colors block"
              >
                {clinicData.phone}
              </a>
              <p className="text-xs text-[#6B7280]">Click to initiate a phone call with clinic staff</p>
            </div>

            {/* WhatsApp Direct */}
            <div className="p-6 border border-gray-200 bg-white space-y-2 rounded-2xl shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B8480] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#1B8480]" />
                WhatsApp Consultation
              </div>
              <a
                href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about booking an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xl font-bold text-[#1E2A38] hover:text-[#1B8480] transition-colors flex items-center gap-1.5"
              >
                Chat on WhatsApp <ExternalLink className="w-4 h-4 text-[#1B8480]" />
              </a>
              <p className="text-xs text-[#6B7280]">Fast messaging for appointment booking & queries</p>
            </div>

            {/* Location & Hours */}
            <div className="p-6 border border-gray-200 bg-white space-y-4 rounded-2xl shadow-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1B8480] flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#1B8480]" />
                  Clinic Address
                </div>
                <p className="text-sm font-semibold text-[#1E2A38] leading-relaxed">
                  {clinicData.address}, {clinicData.city}, {clinicData.state} - {clinicData.pincode}
                </p>
                <a
                  href={clinicData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1B8480] hover:underline mt-1"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-3 border-t thin-line-separator">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1B8480] flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#1B8480]" />
                  Operating Hours
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-[#1E2A38]">
                  {clinicData.workingHours.map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center py-1">
                      <span className="font-semibold text-[#6B7280]">{schedule.days}</span>
                      <span className="font-bold text-[#1B8480]">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F8F7] p-8 md:p-10 border border-[#1B8480]/20 rounded-2xl shadow-sm">
              <div className="mb-6">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E2A38]">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-1 font-normal">
                  Provide your details and selected treatment interest. Our clinic representative will reach out promptly to confirm your consultation schedule.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 text-center border border-[#1B8480]/30 space-y-4 rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#F4F8F7] text-[#1B8480] mx-auto flex items-center justify-center rounded-full">
                    <CheckCircle className="w-8 h-8 text-[#1B8480]" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-[#1E2A38]">
                    Appointment Request Logged
                  </h4>
                  <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#1B8480]">{formData.name}</span>. Your request for <span className="font-bold text-[#1B8480]">{formData.service}</span> has been received. Our team will contact you at {formData.phone} shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', email: '', service: '', preferredDate: '', message: '' });
                      }}
                      className="px-6 py-2.5 text-xs font-bold text-[#1B8480] bg-[#F4F8F7] hover:bg-[#1B8480] hover:text-white rounded-full transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E2A38] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Sharma"
                        className={`w-full px-4 py-3 rounded-lg bg-white border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-1 focus:ring-[#1B8480] text-sm text-[#1E2A38]`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E2A38] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-lg bg-white border ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-1 focus:ring-[#1B8480] text-sm text-[#1E2A38]`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E2A38] uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-lg bg-white border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-1 focus:ring-[#1B8480] text-sm text-[#1E2A38]`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E2A38] uppercase tracking-wider mb-1.5">
                        Treatment / Condition <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white border ${
                          errors.service ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-1 focus:ring-[#1B8480] text-sm text-[#1E2A38]`}
                      >
                        <option value="">-- Select Service --</option>
                        {allServices.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title} ({srv.category === 'condition' ? 'Condition' : 'Technique'})
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E2A38] uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1B8480] text-sm text-[#1E2A38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E2A38] uppercase tracking-wider mb-1.5">
                      Symptom Details / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your symptoms or preferred consultation timing..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1B8480] text-sm text-[#1E2A38]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Submitting Request...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" /> Request Appointment
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
