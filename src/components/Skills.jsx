import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaDart,FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase, FaFileExcel } from 'react-icons/fa';
import { SiCplusplus, SiPandas, SiNumpy, SiDart } from 'react-icons/si';

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: <FaPython size={36} />, level: 95 },
      { name: "C++ (OOP)", icon: <SiCplusplus size={36} />, level: 95 },
      { name: "Dart", icon: <SiDart size={36} />, level: 80 },
    ]
  },
  {
    title: "Data",
    skills: [
      { name: "Pandas", icon: <SiPandas size={36} />, level: 95 },
      { name: "NumPy", icon: <SiNumpy size={36} />, level: 80 },
      { name: "Excel", icon: <FaFileExcel size={36} />, level: 95 },
    ]
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", icon: <FaHtml5 size={36} />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt size={36} />, level: 85 },
      { name: "SQL", icon: <FaDatabase size={36} />, level: 85 },
    ]
  }
];

const SkillCard = ({ skill, index, inView }) => {
  return (
    <motion.div
      className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="text-primary-light dark:text-primary-dark mr-3">
            {skill.icon}
          </div>
          <h4 className="text-lg font-semibold">{skill.name}</h4>
        </div>
        
        <div className="mt-2 mb-3">
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary-light dark:bg-primary-dark"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            />
          </div>
          <div className="mt-1 text-right text-sm text-gray-500 dark:text-gray-400">
            {skill.level}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
    
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-primary-light/5 dark:bg-primary-dark/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-secondary-light/5 dark:bg-secondary-dark/5 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
          <motion.div 
            className="mt-2 h-1 w-24 bg-primary-light dark:bg-primary-dark mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8 }}
          />
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              <motion.h3
                className="text-2xl font-semibold mb-6 text-center md:text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={index + catIndex * 3} 
                    inView={inView} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;