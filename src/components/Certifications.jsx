import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Certificate data array - add new certificates here
const certificationsData = [
  {
    id: 1,
    title: "CS50P: Introduction to Programming with Python",
    issuer: "Harvard University via edX",
    date: "2025",
    description: "Completed Harvard's comprehensive Python programming course covering topics such as functions, variables, conditionals, loops, exceptions, libraries, unit tests, and file I/O.",
    image: "CS50PYTHON_EDX.png",
    verifyLink: "https://certificates.cs50.io/e2994eba-6532-4202-8559-50f5a57209c5.pdf?size=letter",
  },
  {
    id: 2,
    title: "Object-Oriented Data Structures in C++",
    issuer: " University of Illinois Urbana-Champaign  via Coursera",
    date: "2025",
    description: "Strengthened my understanding of core C++ OOP concepts such as constructors, destructors, inheritance, and templates, while also diving deep into pointers, static vs heap memory, and object-oriented programming principles.",
    image: "c++ - coursea.png",
    verifyLink: "https://coursera.org/share/11c018288b1920ddc55d8dbc4a70b549",
  },
  {
    id: 3,
    title: "Git Essentials",
    issuer: "SkillUp by Simplilearns",
    date: "2025",
    description: "Enhanced my version control skills, improved collaboration, and streamlined my development workflow.",
    image: "git.jpeg",
    verifyLink: "https://simpli-web.app.link/e/rDDdIFVokWb",
  },
  {
    id: 4,
    title: "Fundamentals of Generative AI",
    issuer: "Microsoft Learn",
    date: "2025",
    description: "Got Insights about Generative AI, Language Models, the underlying Transformer Architecture and the Generative AI capabilities of Microsoft Copilot. Learned the basics of Large Language Models (LLMs) and Small Language Models (SLMs).",
    image: "gen_ai.png",
    verifyLink: "https://learn.microsoft.com/en-us/users/ahmadkaleembhatti-0794/achievements/es2mvzdp?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  }
  
];

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      className="h-full rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-cyan-500/20"
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
      {/* Certificate Image - Clean display without background gradient */}
      <div className="h-48 flex items-center justify-center p-4 bg-black/30">
        <img 
          src={certificate.image}
          alt={`${certificate.title}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      {/* Certificate Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-2">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {certificate.issuer} | {certificate.date}
        </p>
        <p className="text-gray-300 mb-5 text-sm line-clamp-3">
          {certificate.description}
        </p>
        
        <div className="mt-auto">
          <a
            href={certificate.verifyLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 py-2 px-4 bg-cyan-500 text-black font-medium rounded-md hover:opacity-90 transition-all duration-300 w-full justify-center"
          >
            <span>Verify Certification</span>
            <FaExternalLinkAlt size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <section id="certifications" className="py-16 relative border-b border-cyan-500/10">
      {/* Section heading */}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
        <motion.div 
          className="mt-2 h-1 w-24 bg-cyan-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ boxShadow: '0 0 8px #00d8ff' }}
        />
      </motion.h2>
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Grid layout similar to Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certificationsData.map((cert, index) => (
            <CertificateCard 
              key={cert.id} 
              certificate={cert} 
              index={isInView ? index : 0} 
            />
          ))}
        </div>
        
        {/* Additional certificates button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/ahmadkaleembhatti"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 py-3 px-8 bg-transparent border border-cyan-500 text-cyan-400 font-medium rounded-md hover:bg-cyan-500/10 transition-all duration-300"
          >
            <span>See More on LinkedIn</span>
            <FaExternalLinkAlt size={14} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;