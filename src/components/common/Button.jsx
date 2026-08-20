import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Button = ({
  children,
  onClick,
  href,
  variant = 'primary', // primary | secondary | outline | gold | dark
  size = 'md', // sm | md | lg
  showArrow = false,
  fullWidth = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold font-body rounded-full transition-all duration-300 select-none cursor-pointer focus:outline-none tracking-wide shadow-sm";
  
  const sizeStyles = {
    sm: "px-5 py-2 text-xs md:text-sm gap-1.5",
    md: "px-6 py-2.5 text-sm md:text-base gap-2",
    lg: "px-8 py-3.5 text-base md:text-lg gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#1B8480] hover:bg-[#14514F] text-white border border-transparent hover:shadow-md",
    gold: "bg-[#1B8480] hover:bg-[#14514F] text-white border border-transparent hover:shadow-md",
    secondary: "bg-[#F4F8F7] hover:bg-[#1B8480] text-[#1E2A38] hover:text-white border border-[#1B8480]/20",
    outline: "border-2 border-[#1B8480] text-[#1B8480] hover:bg-[#1B8480] hover:text-white",
    dark: "bg-[#28363F] hover:bg-[#14514F] text-white border border-white/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} group ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};
