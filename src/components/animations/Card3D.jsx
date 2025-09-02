import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Card3D = ({ children, className = "", intensity = 10 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Convert to rotation values (divide by factor to reduce intensity)
    setRotateX(-(mouseY / (rect.height / 2)) * intensity);
    setRotateY((mouseX / (rect.width / 2)) * intensity);
  };
  
  const handleMouseEnter = () => setMouseOver(true);
  const handleMouseLeave = () => {
    setMouseOver(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      }}
    >
      <motion.div
        animate={{
          scale: mouseOver ? 1.03 : 1,
          transition: { duration: 0.2 },
        }}
        className="h-full transform-gpu"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
        
        {/* Reflection/glow effect */}
        <div 
          className={`absolute inset-0 rounded-lg bg-white dark:bg-primary-dark/10 opacity-0 transition-opacity duration-300 ${mouseOver ? 'opacity-20' : ''}`} 
          style={{
            transform: "translateZ(1px)",
            backgroundImage: mouseOver ? "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)" : "",
            backgroundSize: "200% 200%",
            backgroundPosition: mouseOver ? "right bottom" : "left top",
            transition: "background-position 0.7s ease-in-out, opacity 0.3s ease-in-out",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card3D;