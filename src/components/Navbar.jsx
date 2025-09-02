import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', target: 'hero' },
  { name: 'About', target: 'about' },
  { name: 'Skills', target: 'skills' },
  { name: 'Projects', target: 'projects' },
  { name: 'Certifications', target: 'certifications' },
  { name: 'Contact', target: 'contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find current section
      const sections = navLinks.map(link => link.target);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightTheme = theme === 'light';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 backdrop-blur-md bg-black border-b border-cyan-500/20'
          : 'py-5 bg-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="hero" smooth duration={500} className="cursor-pointer">
            <motion.div
              className="text-2xl sm:text-3xl font-bold text-cyan-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
              style={{ textShadow: '0 0 10px rgba(0, 216, 255, 0.7)' }}
            >
              AKB
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative px-2 py-1 cursor-pointer"
              >
                <motion.div 
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className={`relative z-10 ${
                    activeSection === link.target 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Hover background glow effect */}
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.span 
                        className="absolute inset-0 -z-10 rounded-md bg-black/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Active indicator */}
                {activeSection === link.target && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-500"
                    layoutId="navIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{ boxShadow: '0 0 8px #00d8ff' }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side controls with additional spacing */}
          <div className="flex items-center mr-2 sm:mr-4">
            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 mr-2 ${
                isLightTheme 
                  ? 'text-amber-500 bg-gray-900 rounded-full' 
                  : 'text-yellow-300'
              }`}
              whileHover={{ scale: 1.3, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-cyan-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </motion.button>
            </div>
            
            {/* Extra spacer div for right margin */}
            <div className="w-2 sm:w-4 md:w-6"></div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-black/90 backdrop-blur-md border-b border-cyan-500/20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`block px-4 py-3 transition-all duration-300 ${
                    activeSection === link.target
                      ? 'text-cyan-400 bg-cyan-900/20'
                      : 'text-gray-300 hover:bg-black/10 hover:pl-6 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;