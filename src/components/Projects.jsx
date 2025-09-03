import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { FaPython, FaHtml5, FaCss3, FaJs, FaPhp } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPandas } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: "Hangman - Guess The Word ",
    description: "Interactive terminal-based Hangman game with difficulty levels, dynamic attempts, and categorized words.",
    detaileddescription: "Built a replayable Hangman game in Python, featuring adjustable difficulty, dynamic attempts, and automated word management via file handling. Includes user input validation, categorized words, and efficient tracking with sets. Designed with functions, loops, conditionals, and standard libraries (random, os), ensuring maintainability and testability (pytest). Extensible for future features such as scoring and GUI integration. ",
    tech: ["Python"],
    keySkills: ["Python", "CLI Development", "File I/O", "Functions", "Loops", "Conditionals", "Testing", "Problem-Solving"],
    icons: [<FaPython key="python" />],
    githubLink: "https://github.com/AhmaadKaleeem/Programming_Practice/blob/main/python/core-problems/Hangman.py",
    demolink: "https://youtu.be/E9pPIjO2trE",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Data Analysis with Pandas",
    description: "Data analysis of deforestation and temperature trends in Pakistan using tree loss and climate datasets.",
    detaileddescription: "Conducted a data-driven analysis of deforestation impacts on temperature trends in Pakistan using Pandas. Processed and merged tree loss (2001–2015) and temperature datasets, applying data cleaning, inspection, and visualization. Results showed strong correlations between tree loss, CO₂ emissions, and temperature instability, highlighting deforestation's role in climate change.",
    tech: ["Python", "Pandas"],
    keySkills: ["Python", "Pandas", "Data Cleaning", "Data Merging", "Analysis", "Visualization", "Problem-Solving"],
    icons: [<FaPython key="python" />, <SiPandas key="pandas" />],
    githubLink: "https://github.com/AhmaadKaleeem/Programming_Practice/tree/main/python/Excel-Automation",
    demolink: "https://www.linkedin.com/feed/update/urn:li:activity:7366975774110670848/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Hostel Management System",
    description: "Web-based system to manage hostel operations including student registration, room allocation, payments, and complaints.",
    detaileddescription: " Built a web-based Hostel Management System with student, warden, and admin dashboards. Features include student registration, room allocation, payments, complaints, notifications, and warden approval workflows. Developed using HTML, CSS, JavaScript (frontend), PHP (backend), and MySQL (database) with XAMPP server. ",
    tech: ["HTML", "CSS","JS","SQL","PHP"],
    keySkills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Full-Stack Development", "Team Collaboration"],
    icons: [<FaHtml5 key="HTML" />, <FaCss3 key="CSS" /> , <FaJs key="js" /> , <SiMysql key="SQL" />, <FaPhp key="PHP" />  ], 
    githubLink: "https://github.com/AhmaadKaleeem/hostel_management_dbms_html_css_js_php_mysql",
    demolink: "https://www.linkedin.com/feed/update/urn:li:activity:7347492846507094016/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eK6iEMEMbtzwJuUVCXcQVGz1HjU8gN9sbg&s",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Banking Management System",
    description: "C++ banking system featuring account management, secure logins, transactions, fund transfers, and mobile recharges.",
    detaileddescription: " Developed a C++ Banking System featuring account management, secure login, deposits, withdrawals, fund transfers, and mobile recharges. Implemented CNIC/PIN validation, transaction history logging, and credential management with file handling. Strengthened knowledge of validation checks, modular design, and file I/O, with extensibility for future upgrades. ",
    tech: ["C++"],
    keySkills: ["C++", "File Handling", "Validation", "OOP Concepts", "Problem-Solving"],
    icons: [<SiCplusplus key="C++" />],
    githubLink: "http://github.com/AhmaadKaleeem/Lab-Practice/blob/main/projects/project4-updatedbankingmanagement.cpp",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "from-red-500 to-orange-500"
  }
];

const variants = {
  enter: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction > 0 ? 45 : -45,
    scale: 0.75,
    filter: "blur(4px)",
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, type: "spring" }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction < 0 ? 45 : -45,
    scale: 0.75,
    filter: "blur(4px)",
    transition: { duration: 0.5 }
  })
};

const ProjectCard = ({ project, dimmed }) => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    if (!dimmed) setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative w-full h-[470px] perspective-1000 ${
        dimmed ? "cursor-default" : "cursor-pointer"
      }`}
      onClick={handleFlip}
      onMouseEnter={() => !dimmed && setIsFlipped(true)}
      onMouseLeave={() => !dimmed && setIsFlipped(false)}
    >
      <motion.div
        className={`relative w-full h-full rounded-lg transition-all duration-500 preserve-3d ${
          dimmed ? "opacity-40 blur-[2px] pointer-events-none scale-95" : ""
        }`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 300, damping: 25 }}
        whileHover={dimmed ? {} : { boxShadow: '0 10px 30px rgba(0, 216, 255, 0.3)' }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="rounded-lg overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 shadow-xl h-full flex flex-col">
            <div
              className="h-44 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <motion.h3 
                  className="text-2xl font-bold text-white text-center drop-shadow-lg" 
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
              </div>
              
              {!dimmed && (
                <motion.div 
                  className="absolute bottom-0 right-4 translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 15, 0] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <FaInfoCircle size={18} className={isLightTheme ? 'text-blue-600' : 'text-cyan-400'} />
                </motion.div>
              )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <motion.div 
                className="flex-1 mb-4 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className={`${isLightTheme ? 'text-gray-800' : 'text-gray-300'} line-clamp-4 leading-relaxed`}>
                  {project.description}
                </p>
              </motion.div>
              
              <div className="flex items-center mb-5 pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className={`text-sm font-medium ${isLightTheme ? 'text-gray-600' : 'text-gray-400'} mr-3`}>
                  Tech:
                </span>
                <div className={`flex flex-wrap gap-2.5 ${isLightTheme ? 'text-blue-600' : 'text-cyan-400'} text-xl`}>
                  {project.icons.map((icon, i) => (
                    <motion.span 
                      key={i} 
                      className="transition-all duration-300"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                    >
                      {icon}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3 mt-auto">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 ${
                    isLightTheme 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-cyan-500 text-black'
                  } font-medium rounded-md hover:shadow-lg hover:opacity-90 transition-all duration-300`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </motion.a>
                
                {project.demolink && (
                  <motion.a
                    href={project.demolink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 bg-transparent border ${
                      isLightTheme 
                        ? 'border-blue-600 text-blue-600 hover:bg-blue-50' 
                        : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    } font-medium rounded-md transition-all duration-300 hover:shadow-lg`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className={`absolute w-full h-full backface-hidden [transform:rotateY(180deg)] ${
          isLightTheme ? 'bg-white' : 'bg-gray-900'
        } rounded-lg border ${
          isLightTheme ? 'border-gray-200' : 'border-white/10'
        } shadow-xl p-6 flex flex-col`}>
          <h3 className={`text-2xl font-bold mb-3 pb-2 border-b ${
            isLightTheme ? 'text-gray-900 border-gray-200' : 'text-white border-gray-700'
          }`}>{project.title}</h3>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <p className={`${
              isLightTheme ? 'text-gray-700' : 'text-gray-300'
            } mb-5 leading-relaxed text-sm`}>
              {project.detaileddescription}
            </p>
            
            <div className={`mb-5 ${
              isLightTheme ? 'bg-gray-50' : 'bg-black/30'
            } p-4 rounded-lg`}>
              <h4 className={`font-semibold mb-3 ${
                isLightTheme ? 'text-gray-800' : 'text-gray-200'
              } flex items-center`}>
                <span className={`inline-block w-1 h-4 mr-2 rounded-sm ${
                  isLightTheme ? 'bg-blue-600' : 'bg-cyan-400'
                }`}></span>
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.keySkills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm ${
                      isLightTheme 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-cyan-900/30 text-cyan-400'
                    } transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 ${
                isLightTheme 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-cyan-500 text-black hover:bg-cyan-600'
              } font-medium rounded-md transition-all duration-300`}
            >
              <FaGithub size={18} />
              <span>View Code</span>
            </a>
            
            {project.demolink && (
              <a
                href={project.demolink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 ${
                  isLightTheme 
                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                    : 'bg-cyan-900/30 text-cyan-300 hover:bg-cyan-800/30'
                } font-medium rounded-md transition-all duration-300`}
              >
                <FaExternalLinkAlt size={16} />
                <span>View Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCarousel = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const projectIndex = ((page % projects.length) + projects.length) % projects.length;
  const leftIndex = ((projectIndex - 1 + projects.length) % projects.length);
  const rightIndex = ((projectIndex + 1) % projects.length);

  const paginate = (newDirection) => {
    setAutoplayEnabled(false);
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const interval = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplayEnabled]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative h-[500px] sm:h-[470px] flex items-center justify-center w-full">
        <motion.div
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-72 pointer-events-none"
          style={{ zIndex: 0 }}
          initial={false}
          animate={{
            x: -120,
            scale: 0.85,
            opacity: 0.5,
            rotateY: -35,
            filter: "blur(2px)"
          }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard project={projects[leftIndex]} dimmed />
        </motion.div>

        <div className="relative z-10 w-full max-w-md mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={projectIndex}
              className="w-full"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 350, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              style={{ perspective: 1800 }}
              onHoverStart={() => setAutoplayEnabled(false)}
              onHoverEnd={() => setAutoplayEnabled(true)}
            >
              <ProjectCard project={projects[projectIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.div
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-72 pointer-events-none"
          style={{ zIndex: 0 }}
          initial={false}
          animate={{
            x: 120,
            scale: 0.85,
            opacity: 0.5,
            rotateY: 35,
            filter: "blur(2px)"
          }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard project={projects[rightIndex]} dimmed />
        </motion.div>

        <button
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${
            isLightTheme 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-cyan-500 hover:bg-cyan-600'
          } text-white rounded-full p-3 shadow-lg transition hidden sm:block`}
          onClick={() => paginate(-1)}
          aria-label="Previous Project"
        >
          <FaChevronLeft size={22} />
        </button>
        <button
          className={`absolute right-4 top-1/2 -translate-y-1/2 ${
            isLightTheme 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-cyan-500 hover:bg-cyan-600'
          } text-white rounded-full p-3 shadow-lg transition hidden sm:block`}
          onClick={() => paginate(1)}
          aria-label="Next Project"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
     
      <div className="flex justify-center mt-6 gap-4 sm:hidden">
        <button
          className={`${
            isLightTheme 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-cyan-500 hover:bg-cyan-600'
          } text-white rounded-full p-3 transition`}
          onClick={() => paginate(-1)}
          aria-label="Previous Project"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          className={`${
            isLightTheme 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-cyan-500 hover:bg-cyan-600'
          } text-white rounded-full p-3 transition`}
          onClick={() => paginate(1)}
          aria-label="Next Project"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
     
      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage([idx, idx > projectIndex ? 1 : -1])}
            className={`w-3 h-3 rounded-full ${
              idx === projectIndex 
                ? isLightTheme ? 'bg-blue-600 border-blue-600' : 'bg-cyan-500 border-cyan-500'
                : isLightTheme ? 'bg-transparent border-blue-600' : 'bg-transparent border-cyan-500'
            } border transition`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  
  return (
    <section id="projects" className="py-16 relative border-b border-cyan-500/10">
      <motion.h2
        className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
          isLightTheme ? 'text-gray-900' : 'text-white'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        Projects
        <motion.div
          className={`mt-2 h-1 w-24 ${
            isLightTheme ? 'bg-blue-600' : 'bg-cyan-500'
          } mx-auto rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            boxShadow: isLightTheme 
              ? '0 0 8px rgba(37, 99, 235, 0.7)' 
              : '0 0 8px #00d8ff' 
          }}
        />
      </motion.h2>
      
      <ProjectCarousel />
      
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://github.com/AhmaadKaleeem"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center space-x-2 py-3 px-8 bg-transparent border ${
            isLightTheme 
              ? 'border-blue-600 text-blue-600 hover:bg-blue-50' 
              : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
          } font-medium rounded-md transition-all duration-300`}
        >
          <FaGithub size={18} />
          <span>See more on GitHub</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;