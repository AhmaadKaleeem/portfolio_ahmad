import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaGithub, FaExternalLinkAlt, FaCss3, FaJs ,FaPhp} from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPandas, SiPhp } from 'react-icons/si';

const projects = [
  {
    title: "Hangman - Guess The Word ",
    description: "Interactive Python terminal-based hangman game with multiple difficulty levels and word categories.",
    tech: ["Python"],
    icons: [<FaPython key="python" />],
    githubLink: "https://github.com/AhmaadKaleeem/Programming_Practice/blob/main/python/core-problems/Hangman.py",
    demolink: "https://youtu.be/E9pPIjO2trE",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Data Analysis with Pandas",
    description: "Analysis of 𝐓𝐫𝐞𝐞𝐬 & 𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞 dataset using Pandas, featuring data visualization on 𝐃𝐞𝐟𝐨𝐫𝐞𝐬𝐭𝐚𝐭𝐢𝐨𝐧 𝐈𝐦𝐩𝐚𝐜𝐭𝐬 𝐨𝐧 𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞 𝐓𝐫𝐞𝐧𝐝𝐬 𝐢𝐧 𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧.",
    tech: ["Python", "Pandas"],
    icons: [<FaPython key="python" />, <SiPandas key="pandas" />],
    githubLink: "https://github.com/AhmaadKaleeem/Programming_Practice/tree/main/python/Excel-Automation",
      demolink: "https://www.linkedin.com/feed/update/urn:li:activity:7366975774110670848/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Hostel Management System",
    description: "A web-based system to manage hostel operations efficiently – including student registration, room allocation, fee tracking, and complaints.",
    tech: ["HTML", "CSS","JS","SQL","PHP"],
    icons: [<FaHtml5 key="HTML" />, <FaCss3 key="CSS" /> , <FaJs key="js" /> , <SiMysql key="SQL" />, <SiPhp key="PHP" />  ], 
    githubLink: "https://github.com/AhmaadKaleeem/hostel_management_dbms_html_css_js_php_mysql",
    demolink: "https://www.linkedin.com/feed/update/urn:li:activity:7347492846507094016/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eK6iEMEMbtzwJuUVCXcQVGz1HjU8gN9sbg&s",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Banking Management System",
    description: "Developed a C++ Banking System that manages accounts, secure logins, transactions, fund transfers, and mobile recharges.",
    tech: ["C++"],
    icons: [, <SiCplusplus key="C++" />],
    githubLink: "http://github.com/AhmaadKaleeem/Lab-Practice/blob/main/projects/project4-updatedbankingmanagement.cpp",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "from-red-500 to-orange-500"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="h-full rounded-lg overflow-hidden bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 10px 30px rgba(0, 216, 255, 0.2)',
        transition: { duration: 0.3 }
      }}
    >
      <div 
        className="h-48 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white px-4 text-center drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex items-center mb-5">
          <span className="text-sm text-gray-400 mr-3">Tech:</span>
          <div className="flex space-x-2 text-cyan-400 text-lg">
            {project.icons.map((icon, i) => (
              <span key={i} className="transition-transform duration-300 hover:scale-125">{icon}</span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-cyan-500 text-black font-medium rounded-md hover:opacity-90 transition-all duration-300"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
          
          <a
            href={project.demolink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-transparent border border-cyan-500 text-cyan-400 font-medium rounded-md hover:bg-cyan-500/10 transition-all duration-300"
          >
            <FaExternalLinkAlt size={16} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <section id="projects" className="py-16 relative border-b border-cyan-500/10">
      {/* Added section heading inside the component */}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Projects
        <motion.div 
          className="mt-2 h-1 w-24 bg-cyan-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ boxShadow: '0 0 8px #00d8ff' }}
        />
      </motion.h2>
      
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={isInView ? index : 0} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/AhmadKaleem"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 py-3 px-8 bg-transparent border border-cyan-500 text-cyan-400 font-medium rounded-md hover:bg-cyan-500/10 transition-all duration-300"
          >
            <FaGithub size={18} />
            <span>See more on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;