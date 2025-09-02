import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DynamicSection = ({ id, className, children, title, showTitle = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-10% 0px -10% 0px"
  });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 relative border-b border-cyan-500/10 ${className || ''}`}
    >
      {/* Only show the title if showTitle is true */}
      {showTitle && title && (
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {title}
          <motion.div 
            className="mt-2 h-1 w-24 bg-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ boxShadow: '0 0 8px #00d8ff' }}
          />
        </motion.h2>
      )}
      
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default DynamicSection;