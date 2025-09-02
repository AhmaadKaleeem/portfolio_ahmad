import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { fadeIn, staggerContainer } from '../utils/animation-variants';
import { FaEnvelope, FaMapMarkerAlt,FaChevronUp, FaGithub, FaLinkedin, FaInstagram, FaPhone, FaBlenderPhone, FaMobile } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-light dark:text-primary-dark">
              Ahmad Kaleem Bhatti
            </h3>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Computer Science Student and Aspiring AI & Machine Learning Engineer.
             </p>
             <p className="text-gray-400 text-sm text-center md:text-left ">
               Over the past few months, I’ve been focusing on mastering Python and applying it to Data Science tasks like data analysis and visualization. Alongside that, I’ve been sharpening my problem-solving skills through Data Structures and Algorithms (DSA).
Before diving into AI, I developed a strong background in C++  MySQL, and Core programming.
Right now, I’m working with Python-based data projects and getting comfortable with tools like Pandas, NumPy, and Matplotlib. Very soon, I’ll be transitioning into building Machine Learning models and exploring more advanced AI concepts.
            
             </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-medium mb-4 text-primary-light dark:text-primary-dark">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium mb-4 text-primary-light dark:text-primary-dark">
              Connect
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/AhmaadKaleeem"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-3 rounded-full text-gray-400 hover:bg-primary-light hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={18} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/ahmadkaleembhatti"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-3 rounded-full text-gray-400 hover:bg-primary-light hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={18} />
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/_ahmadkaleem/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-3 rounded-full text-gray-400 hover:bg-primary-light hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
              <motion.div 
                            className="flex items-center"
                            variants={fadeIn("right", 0.3)}
                          >
                            <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full mr-4">
                              <FaEnvelope className="text-primary-light dark:text-primary-dark" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">ahmadkaleeem1@gmail.com</span>
                          </motion.div>
            
                          <motion.div 
                            className="flex items-center"
                            variants={fadeIn("right", 0.3)}
                          >
                            <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full mr-4">
                              <FaMobile className="text-primary-light dark:text-primary-dark" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">+92 328-0092525</span>
                          </motion.div>
                          
                          <motion.div 
                            className="flex items-center"
                            variants={fadeIn("right", 0.4)}
                          >
                            <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full mr-4">
                              <FaMapMarkerAlt className="text-primary-light dark:text-primary-dark" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">Islamabad, Pakistan</span>
                          </motion.div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-4">
            © {new Date().getFullYear()} Ahmad Kaleem Bhatti. All rights reserved.
          </p>
          
          <motion.div
            className="cursor-pointer bg-primary-light dark:bg-primary-dark p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <FaChevronUp className="text-black" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;