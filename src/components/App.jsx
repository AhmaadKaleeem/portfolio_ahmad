import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import DynamicSection from './components/DynamicSection';

function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
    setTimeout(() => {
      if (loading) finishLoading();
    }, 3500);
  }, [loading]);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Preloader finishLoading={finishLoading} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="bg-black">
          <Navbar />
          <Hero />
          
          <DynamicSection id="about" title="About">
            <About />
          </DynamicSection>
          
          <DynamicSection id="skills" title="My Skills">
            <Skills />
          </DynamicSection>
          
          {/* Projects component with its own heading */}
          <Projects />
          
          {/* Certifications component with its own heading */}
          <Certifications />
          
          <DynamicSection id="contact" title="Contact Me">
            <Contact />
          </DynamicSection>
          
          <Footer />
          <BackToTop />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;