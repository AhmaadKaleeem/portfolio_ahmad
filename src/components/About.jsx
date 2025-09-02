import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGraduationCap, FaCode, FaRobot, FaInstagram } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  // Card-flip animation
  const cardVariants = {
    initial: { rotateY: 0 },
    hover: { rotateY: 10, transition: { duration: 0.5 } }
  };

  // Badges with staggered appearance
  const badges = [
    { icon: <FaGraduationCap className="mr-2" />, text: "Air University Islamabad" },
    { icon: <FaRobot className="mr-3" />, text: "AI & ML Enthusiast" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-primary-light/5 dark:bg-primary-dark/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] rounded-full bg-secondary-light/5 dark:bg-secondary-dark/5 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
          <motion.div 
            className="mt-2 h-1 w-24 bg-primary-light dark:bg-primary-dark mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image & Profile */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative group">
              <motion.div 
                className="bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-1 overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Profile image area */}
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20">
                  {/* This would be your profile image */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/10">
                    <div className="relative flex items-center justify-center w-full h-full">
                      <img src="profile.jpg" alt="Ahmad Kaleem Bhatti Pic" className="absolute inset-0 w-full h-full object-cover z-20" /> 
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Social links */}
            <motion.div 
              className="flex justify-center mt-8 space-x-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/AhmaadKaleeem" 
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaGithub size={20} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/ahmadkaleembhatti" 
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin size={20} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/_ahmadkaleem/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaInstagram size={20} />
              </motion.a>

            </motion.div>
            
            {/* Badges */}
            <motion.div
              className="mt-8 flex flex-col space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm text-sm font-medium text-gray-700 dark:text-gray-300"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(0, 216, 255, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  {badge.icon}
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Bio Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-6"
                transition={{ delay: 0.2 }}
              >
                Hello, I'm <span className="text-primary-light dark:text-primary-dark">Ahmad Kaleem Bhatti</span>
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                transition={{ delay: 0.3 }}
              >
                I'm currently pursuing my Computer Science degree at Air University Islamabad, where I'm building 
                a strong foundation in programming fundamentals, algorithms, and data structures.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                transition={{ delay: 0.4 }}
              >
                My passion lies in <span className="text-primary-light dark:text-primary-dark font-semibold">Artificial Intelligence</span> and 
                <span className="text-primary-light dark:text-primary-dark font-semibold"> Machine Learning</span>, where I aspire to create intelligent 
                systems that can solve complex real-world problems. I'm continuously expanding my knowledge through online 
                courses and personal projects.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                transition={{ delay: 0.5 }}
              >
                <p className="text-primary-light dark:text-primary-dark font-semibold">Recent Achievement </p> 
               Completed <span className="font-semibold">CS50P (Introduction to Programming with Python)</span> certification 
                from Harvard University through edX, which has strengthened my Python programming skills and problem-solving abilities.
              </motion.p>
              
              {/* Quote */}
              <motion.div 
                className="relative mt-10 pl-6 border-l-2 border-primary-light dark:border-primary-dark"
                transition={{ delay: 0.6 }}
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary-light dark:bg-primary-dark"></div>
                <p className="text-lg italic text-gray-600 dark:text-gray-400">
                  "Tranforming The Future"
                </p>
              </motion.div>
              
              {/* CTA Button */}
              <motion.div 
                className="mt-8"
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-md bg-primary-light dark:bg-primary-dark text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View My Resume
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;