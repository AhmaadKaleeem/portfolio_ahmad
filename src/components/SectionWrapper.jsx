import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, className, children, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const sectionRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!hasBeenHovered) {
      setHasBeenHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`py-20 relative border-b border-cyan-500/10 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Section title always shown */}
      {title && (
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            {title}
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: isHovered || hasBeenHovered ? '100%' : 0 }}
              transition={{ duration: 0.5 }}
              style={{ boxShadow: '0 0 8px #00d8ff' }}
            />
          </h2>
        </div>
      )}
      
      {/* Section content only shown if hovered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered || hasBeenHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;