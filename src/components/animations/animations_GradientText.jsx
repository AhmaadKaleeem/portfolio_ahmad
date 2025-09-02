import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ children, className = "", delay = 0, duration = 1 }) => {
  return (
    <motion.span
      className={`inline-block bg-gradient-to-r from-primary-light via-secondary-light to-primary-light 
        dark:from-primary-dark dark:via-secondary-dark dark:to-primary-dark bg-clip-text text-transparent 
        bg-[length:200%_auto] ${className}`}
      initial={{ backgroundPosition: "200% center", opacity: 0, y: 20 }}
      animate={{ 
        backgroundPosition: "0% center", 
        opacity: 1, 
        y: 0,
        transition: { 
          backgroundPosition: { 
            delay: delay + 0.3, 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse" 
          },
          opacity: { duration: duration, delay: delay },
          y: { duration: duration, delay: delay }
        } 
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;