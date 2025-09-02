import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const AnimatedBackground = ({ children }) => {
  const { theme } = useTheme();
  const constraintsRef = useRef(null);
  
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    delay: Math.random() * 5
  }));

  return (
    <div className="relative overflow-hidden" ref={constraintsRef}>
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={`absolute rounded-full opacity-10 ${
              theme === 'light' 
                ? 'bg-gradient-to-br from-primary-light to-secondary-light' 
                : 'bg-gradient-to-br from-primary-dark to-secondary-dark'
            }`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
            }}
            initial={{ scale: 0 }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [0, 1, 0.8, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 25 + bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          />
        ))}
      </div>
      
      {/* Mesh gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent to-background-light dark:to-background-dark opacity-80" />
      
      {children}
    </div>
  );
};

export default AnimatedBackground;