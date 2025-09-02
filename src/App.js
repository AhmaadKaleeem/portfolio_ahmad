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

function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      if (loading) {
        // If preloader hasn't finished naturally, finish it after a timeout
        finishLoading();
      }
    }, 3500); // Max loading time: 3.5 seconds
  }, [loading]);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Preloader finishLoading={finishLoading} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;