import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const firstName = "Ahmad";
  const lastName = "Kaleem Bhatti";

  // Animation variants with optimized performance
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 * i }
    })
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Handle resume view safely
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open('resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Background grid with reduced complexity */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`v-${i}`} className={`border-r ${isLightTheme ? 'border-blue-500/20' : 'border-cyan-500/10'} h-full`} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`h-${i}`} className={`border-b ${isLightTheme ? 'border-blue-500/20' : 'border-cyan-500/10'} w-full`} />
        ))}
      </div>
      
      {/* Hero content - Added mt-12 for mobile to ensure content starts below navbar */}
      <div className="container mx-auto px-4 relative z-10 text-center mt-12 sm:mt-0 max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          {/* Name container with better overflow handling and spacing for mobile */}
          <div className="w-full overflow-visible">
            {/* Animated First Name - Fixed layout */}
            <motion.div
              className="mb-0 sm:mb-2 flex justify-center flex-wrap"
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {firstName.split("").map((letter, index) => (
                <motion.span 
                  key={`first-${index}`}
                  className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold ${
                    isLightTheme ? 'text-gray-900' : 'text-white'
                  } mx-[-0.05em]`} /* Slight negative margin to adjust spacing */
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Animated Last Name with glow effect - Fixed layout */}
            <motion.div
              className="mb-8 sm:mb-12 flex justify-center flex-wrap"
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              custom={1.5}
            >
              {lastName.split("").map((letter, index) => (
                <motion.span 
                  key={`last-${index}`}
                  className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold ${
                    isLightTheme ? 'text-blue-600' : 'text-cyan-400'
                  } mx-[-0.05em]`} /* Slight negative margin to adjust spacing */
                  variants={letterVariants}
                  style={{ 
                    textShadow: isLightTheme 
                      ? '0 0 5px rgba(37, 99, 235, 0.7), 0 0 10px rgba(37, 99, 235, 0.5)' 
                      : '0 0 5px #00d8ff, 0 0 10px #00d8ff'
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          {/* Tagline */}
          <motion.div 
            className="mb-10 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showContent ? 1 : 0, 
              y: showContent ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium ${
              isLightTheme ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Computer Science Student | Aspiring AI & Machine Learning Engineer
            </h2>
          </motion.div>
          
          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showContent ? 1 : 0, 
              y: showContent ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              onClick={handleResumeClick}
              className={`py-3 px-8 ${
                isLightTheme 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-cyan-500 hover:bg-cyan-600'
              } text-white font-medium rounded-md transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.button>
            
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className={`py-3 px-8 border-2 ${
                isLightTheme
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-50' 
                  : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
              } font-medium rounded-md transition-all duration-300 cursor-pointer`}
            >
              Contact Me
            </Link>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="mt-6 mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: showContent ? 1 : 0, 
              y: showContent ? 0 : -10 
            }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Link 
              to="about" 
              smooth={true} 
              duration={800} 
              className="inline-block"
              aria-label="Scroll to About section"
            >
              <motion.div
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                  isLightTheme
                    ? 'border-blue-500/50'
                    : 'border-cyan-500/50'
                }`}
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaChevronDown className={isLightTheme ? 'text-blue-500' : 'text-cyan-400'} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;