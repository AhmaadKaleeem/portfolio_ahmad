import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < 100) {
        setCounter(oldCounter => oldCounter + 1);
      } else {
        finishLoading();
      }
    }, 20);
    
    return () => clearTimeout(timer);
  }, [counter, finishLoading]);

  const initials = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-dark"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        {/* A for Ahmad */}
        <motion.path
          d="M20,80 L40,20 L60,80 M25,60 L55,60"
          fill="transparent"
          stroke="#00d8ff"
          strokeWidth="5"
          variants={initials}
        />
        {/* K for Kaleem */}
        <motion.path
          d="M70,20 L70,80 M70,50 L90,20 M70,50 L90,80"
          fill="transparent"
          stroke="#ff00aa"
          strokeWidth="5"
          variants={initials}
        />
      </motion.svg>
      
      <motion.div
        className="mt-6 text-xl font-medium text-primary-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Loading... {counter}%
      </motion.div>
    </motion.div>
  );
};

export default Preloader;