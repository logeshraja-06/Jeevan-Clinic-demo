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
  const baseStyles = "inline-flex items-center justify-center font-semibold font-quicksand rounded-[4px] transition-all duration-300 select-none cursor-pointer focus:outline-none tracking-wide";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs md:text-sm gap-1.5",
    md: "px-6 py-3 text-sm md:text-base gap-2",
    lg: "px-8 py-3.5 text-base md:text-lg gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#075A68] hover:bg-[#082F38] text-white border border-transparent hover:shadow-md",
    gold: "bg-[#C9952E] hover:bg-[#a67920] text-white border border-transparent hover:shadow-md",
    secondary: "bg-[#EFF8F7] hover:bg-[#075A68] text-[#082F38] hover:text-white border border-[#075A68]/20",
    outline: "border border-[#075A68] text-[#075A68] hover:bg-[#075A68] hover:text-white",
    dark: "bg-[#082F38] hover:bg-[#075A68] text-white border border-white/10"
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
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
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
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};
