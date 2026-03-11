import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaLaptopCode, FaDownload, FaMobile } from 'react-icons/fa';
import { SiSwift, SiAppstore } from 'react-icons/si';
import {
  heroStagger,
  subtleFloat,
  gentlePulse,
  heroDecoReveal,
  heroDecoRevealRight,
  heroIconReveal,
  heroNameReveal,
  heroSubtitleReveal,
  letterAnimation,
  slideInFromLeft,
  slideInFromRight,
  enhancedHoverAnimation
} from '../../constants';

import heroBg from '../../assets/bg/hero_bg.png';

const Hero = ({ opacity, scale, scrollToProjects, downloadResume, smoothMouseX, smoothMouseY }) => {
  const skills = ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'CoreData', 'MVVM'];

  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6"
      initial="hidden"
      animate="visible"
      variants={heroStagger}
    >
      {/* Background Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px) brightness(0.9)'
        }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.div className="absolute top-[10%] left-[5%] md:top-1/4 md:left-1/4" variants={heroDecoReveal} animate={subtleFloat.animate}>
        <SiSwift className="text-3xl md:text-5xl text-primary/20" />
      </motion.div>
      <motion.div className="absolute bottom-[10%] right-[5%] md:bottom-1/4 md:right-1/4" variants={heroDecoRevealRight} animate={subtleFloat.animate}>
        <SiAppstore className="text-3xl md:text-5xl text-secondary/20" />
      </motion.div>
      <motion.div className="absolute top-[20%] right-[5%] md:top-1/3 md:right-1/3" variants={heroDecoRevealRight} animate={gentlePulse.animate}>
        <FaMobile className="text-3xl md:text-5xl text-accent/20" />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none hidden md:block"
        style={{
          width: '300px',
          height: '300px',
          background: "radial-gradient(circle, rgba(0,122,255,0.08) 0%, rgba(0,122,255,0) 70%)",
          position: 'fixed',
          left: smoothMouseX,
          top: smoothMouseY,
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          mixBlendMode: 'screen',
        }}
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ opacity, scale }} className="text-center z-10 px-4 md:px-0 relative w-full max-w-5xl z-[2]">
        <motion.div variants={heroIconReveal} className="mb-6 md:mb-8">
          <motion.div animate={subtleFloat.animate}>
            <FaApple className="text-6xl md:text-8xl text-white mx-auto opacity-90 drop-shadow-2xl" />
          </motion.div>
        </motion.div>
 
        <motion.h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] break-words" variants={heroNameReveal}>
          <span className="text-vibrant block">Ashokkumar</span>
          <span className="text-gradient-blue block">Nallasamy</span>
        </motion.h1>
 
        <motion.p className="text-base md:text-xl mb-6 md:mb-8 text-white/70 max-w-3xl mx-auto" variants={heroSubtitleReveal}>
          Results-driven iOS Developer with 2+ years building scalable, high-performance apps using Swift, SwiftUI, UIKit, Combine, CoreData, REST APIs, and MVVM architecture. Proven track record of delivering App Store releases, improving stability, and collaborating across teams.
        </motion.p>
 
        <motion.div className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8" variants={heroStagger}>
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="px-4 py-1.5 border border-white/10 rounded-full text-white/60 text-sm font-medium transition-colors hover:border-system-blue hover:text-white"
              variants={letterAnimation}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
 
        <motion.div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4" variants={heroStagger}>
          <motion.button
            {...enhancedHoverAnimation}
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 hover:bg-white/90"
            onClick={scrollToProjects}
            variants={slideInFromLeft}
          >
            <FaLaptopCode className="text-xl" />
            View Projects
          </motion.button>
          <motion.button
            {...enhancedHoverAnimation}
            className="ios-glass text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 hover:bg-white/10"
            onClick={downloadResume}
            variants={slideInFromRight}
          >
            <FaDownload className="text-xl" />
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
