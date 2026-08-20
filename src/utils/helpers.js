/**
 * Helper utilities for Jeevan Physiotherapy Clinic
 */

export const createWhatsAppLink = (phoneRaw, message = "") => {
  const encodedMsg = encodeURIComponent(
    message || "Hello Jeevan Physiotherapy Clinic! I would like to inquire about booking an appointment."
  );
  return `https://wa.me/${phoneRaw}?text=${encodedMsg}`;
};

export const createCallLink = (phoneRaw) => {
  return `tel:${phoneRaw}`;
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
