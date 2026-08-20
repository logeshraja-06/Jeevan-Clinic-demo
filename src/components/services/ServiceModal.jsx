import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

export const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#082F38]/70 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden border border-[#075A68]/20 z-10 my-8 rounded-[4px]"
          >
            {/* Header */}
            <div className="bg-[#082F38] p-6 sm:p-8 text-white relative border-b border-[#167A91]/30">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="font-quicksand text-xs font-semibold uppercase tracking-[0.2em] text-[#C9952E] mb-2 flex items-center gap-2">
                <span className="w-3 h-[1px] bg-[#C9952E]" />
                {service.categoryLabel || service.category}
              </div>

              <h3 className="font-jura text-2xl sm:text-3xl font-bold text-white">
                {service.title}
              </h3>
              <p className="font-quicksand mt-2 text-sm sm:text-base text-[#EFF8F7]/85 font-normal">
                {service.shortDesc}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 font-quicksand text-[#17343B]">
              {service.approach && (
                <div className="space-y-2">
                  <h4 className="font-jura text-sm uppercase font-bold text-[#075A68] tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#167A91]" />
                    Clinical Treatment Approach
                  </h4>
                  <p className="text-sm text-[#17343B]/85 leading-relaxed bg-[#EFF8F7] p-4 border border-[#075A68]/15 rounded-[4px]">
                    {service.approach}
                  </p>
                </div>
              )}

              {service.whoMayBenefit && (
                <div className="space-y-2">
                  <h4 className="font-jura text-sm uppercase font-bold text-[#075A68] tracking-wider flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#C9952E]" />
                    Who May Benefit
                  </h4>
                  <p className="text-sm text-[#17343B]/85 leading-relaxed bg-[#EFF8F7] p-4 border border-[#075A68]/15 rounded-[4px]">
                    {service.whoMayBenefit}
                  </p>
                </div>
              )}

              {/* Disclaimer Notice */}
              <div className="flex items-start gap-2.5 p-3.5 bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  Individual treatment plans are developed following an in-person physical assessment. Rehabilitation progression varies based on severity and response.
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Close
                </button>
                <Button
                  href="/contact"
                  variant="gold"
                  size="md"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
