import { motion, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Hooks
import { usePortfolio } from './hooks/usePortfolio';

// Constants
import { iosStyles, FILE_ID } from './constants';

// Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

// Assets
import heroBg from './assets/bg/hero_bg.png';

// Features
import Hero from './features/Hero/Hero';
import About from './features/About/About';
import Skills from './features/Skills/Skills';
import Projects from './features/Projects/Projects';
import Experience from './features/Experience/Experience';
// import Resume from './features/Resume/Resume';
import Certifications from './features/Certifications/Certifications';
import Education from './features/Education/Education';
import Contact from './features/Contact/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    smoothMouseX,
    smoothMouseY,
    scrollYProgress,
    scrollY,
    isMenuOpen,
    showScrollTop,
    activeSection,
    toggleMenu,
    closeMenu,
    scrollToTop,
    scrollToSection
  } = usePortfolio();

  useEffect(() => {
    // Artificial delay for premium loader feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  const handleDownloadResume = () => {
    const viewLink = `https://drive.google.com/file/d/${FILE_ID}/view`;
    const downloadLink = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

    window.open(viewLink, '_blank');
    setTimeout(() => {
      window.open(downloadLink, '_blank');
    }, 500);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-system-blue/30 selection:text-white relative">
      {/* Global Fixed Background - outside AnimatePresence to avoid stacking context issues */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px) brightness(0.7)',
          opacity: 0.7,
          WebkitBackfaceVisibility: 'hidden',
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-[1] bg-gradient-to-b from-system-blue/[0.03] to-transparent" />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[2]"
          >

            <Navbar
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
              activeSection={activeSection}
              scrollToTop={scrollToTop}
              scrollToSection={scrollToSection}
            />

            <ScrollToTop show={showScrollTop} onClick={scrollToTop} />

            <Hero
              opacity={opacity}
              scale={scale}
              scrollToProjects={() => scrollToSection('projects')}
              downloadResume={handleDownloadResume}
              smoothMouseX={smoothMouseX}
              smoothMouseY={smoothMouseY}
            />

            <About activeSection={activeSection} />
            <Skills activeSection={activeSection} />
            <Projects activeSection={activeSection} />
            <Experience activeSection={activeSection} />
            {/* <Resume activeSection={activeSection} onDownload={handleDownloadResume} /> */}
            <Certifications activeSection={activeSection} />
            <Education activeSection={activeSection} />
            <Contact activeSection={activeSection} />

            <footer className="py-12 border-t border-white/5 text-center">
              <div className={iosStyles.container}>
                <p className="text-white/40 text-sm font-medium">
                  © 2025 Ashokkumar Nallasamy.
                </p>
              </div>
            </footer>

            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-[#007AFF] z-[100] origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
