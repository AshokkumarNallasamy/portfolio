import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaApple, FaSwift, FaDownload, FaMobile, FaLaptopCode, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { SiXcode, SiFirebase, SiSwift, SiAppstore } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const App = () => {
  const [ref] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  // Add email constant
  const EMAIL = "ashokkumarnallasamy@gmail.com";
  const JUSRIDE_APP_STORE_LINK = "https://apps.apple.com/in/app/jus-ride/id6532623976";
  const RESUME_LINK = "https://drive.google.com/uc?export=download&id=1a22uHG4u59KfnUHx8HZzQzzyQusPu-fe";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  // const handleDownloadResume = () => {
  //   // Replace with your actual resume file path
  //   window.open(RESUME_LINK, '_blank');
  // };

  const handleDownloadResume = () => {
    // For Google Drive links, we need to use the direct download URL
    // and open in new tab for viewing
    const fileId = '1a22uHG4u59KfnUHx8HZzQzzyQusPu-fe';
    const viewLink = `https://drive.google.com/file/d/${fileId}/view`;
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Open for viewing in new tab
    window.open(viewLink, '_blank');
    
    // Trigger download in background
    setTimeout(() => {
      window.open(downloadLink, '_blank');
    }, 500);
  };

  // Punchy but GPU-friendly: ease-based, opacity + transform only
  const easeOutPunch = [0.22, 1, 0.36, 1]; // snappy deceleration at end

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOutPunch }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOutPunch }
    }
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 40, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOutPunch }
    }
  };

  const slideInFromTop = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeOutPunch }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.08
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeOutPunch }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: easeOutPunch }
    }
  };

  const bounceIn = {
    hidden: { opacity: 0, y: -36, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOutPunch }
    }
  };

  // Home / Hero – slower stagger so the sequence is visible on load
  const heroStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const heroIconReveal = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.55, ease: easeOutPunch }
    }
  };

  const heroNameReveal = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOutPunch }
    }
  };

  const heroSubtitleReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeOutPunch }
    }
  };

  const heroDecoReveal = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 0.25,
      x: 0,
      transition: { duration: 0.7, ease: easeOutPunch }
    }
  };

  const heroDecoRevealRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 0.25,
      x: 0,
      transition: { duration: 0.7, ease: easeOutPunch }
    }
  };

  // Punchy hover – still quick and cheap to render
  const enhancedHoverAnimation = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
    },
    whileTap: {
      scale: 0.97,
      transition: { duration: 0.12, ease: "easeOut" }
    }
  };

  const cardHoverAnimation = {
    whileHover: {
      y: -6,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Light continuous motion
  const subtleFloat = {
    animate: {
      y: [0, -6, 0],
      transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const gentlePulse = {
    animate: {
      opacity: [0.4, 0.7, 0.4],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const slowRotate = {
    animate: {
      rotate: [0, 360],
      transition: { duration: 40, repeat: Infinity, ease: "linear" }
    }
  };

  const shimmer = {
    animate: {
      opacity: [0.25, 0.45, 0.25],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_5k1zxwv', // Replace with your EmailJS service ID
        'template_v6laove', // Replace with your EmailJS template ID
        formRef.current,
        'K0LLpWNrv3sZ49mDx' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update mobile styles
  const mobileStyles = {
    section: "py-12 md:py-20",
    heading: "text-3xl md:text-4xl",
    container: "px-4 md:px-6",
    form: "w-full max-w-[90%] md:max-w-2xl mx-auto bg-dark/80 p-6 rounded-xl border border-gray-800", // Added background and padding
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-gray-900 text-light">
      {/* Navigation */}
      <motion.nav 
        className="fixed w-full bg-dark/90 backdrop-blur-md z-50 border-b border-gray-800"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Name */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <motion.div
                // animate={subtleFloat.animate}
              >
                <FaApple className="text-primary text-xl md:text-2xl" />
              </motion.div>
              <motion.span 
                className="text-xl md:text-2xl font-bold text-primary"
                // animate={subtleFloat.animate}
                // transition={{
                //   delay: 0.5
                // }}
              >
                Ashokkumar
              </motion.span>
              {/* Open to work badge */}
              <motion.span
                className="flex items-center gap-1 text-xs md:text-sm px-2 py-0.5 rounded-full 
                          bg-green-500/10 text-green-400 border border-green-500/30"
                // animate={{
                //   scale: [1, 1.08, 1],
                //   opacity: [0.8, 1, 0.8]
                // }}
                // transition={{
                //   duration: 2,
                //   repeat: Infinity,
                //   ease: "easeInOut"
                // }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                OPEN TO WORK
              </motion.span>
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {['About', 'Skills', 'Projects', 'Experience', 'Resume', 'Certifications', 'Education', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors relative text-sm"
                  variants={letterAnimation}
                  whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1, transition: { duration: 0.2, ease: "easeOut" } }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div 
                className="relative w-5 h-4"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <motion.span 
                  className={`absolute top-0 left-0 w-5 h-0.5 bg-primary transform transition-all duration-300 origin-center ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                  animate={{
                    backgroundColor: isMenuOpen ? "rgb(0, 199, 190)" : "rgb(0, 122, 255)"
                  }}
                  transition={{
                    duration: 0.3
                  }}
                />
                <motion.span 
                  className={`absolute top-1/2 left-0 w-5 h-0.5 bg-primary transform -translate-y-1/2 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                  animate={{
                    backgroundColor: isMenuOpen ? "rgb(0, 199, 190)" : "rgb(0, 122, 255)"
                  }}
                  transition={{
                    duration: 0.3
                  }}
                />
                <motion.span 
                  className={`absolute bottom-0 left-0 w-5 h-0.5 bg-primary transform transition-all duration-300 origin-center ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                  animate={{
                    backgroundColor: isMenuOpen ? "rgb(0, 199, 190)" : "rgb(0, 122, 255)"
                  }}
                  transition={{
                    duration: 0.3
                  }}
                />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden absolute right-4 top-16 w-48 bg-dark/95 rounded-lg shadow-xl overflow-hidden border border-gray-800"
              >
                <div className="flex flex-col py-2">
                  {['About', 'Skills', 'Projects', 'Experience', 'Resume', 'Certifications', 'Education', 'Contact'].map((item, index) => (
                    <React.Fragment key={item}>
                      <motion.a
                        href={`#${item.toLowerCase()}`}
                        className="px-4 py-2.5 text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors text-sm"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.25, ease: "easeOut" }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </motion.a>
                      {index < ['About', 'Skills', 'Projects', 'Experience', 'Resume', 'Certifications', 'Education', 'Contact'].length - 1 && (
                        <div className="h-px bg-gray-800 mx-4" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 28, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-dark/80 backdrop-blur-md border border-primary/30 text-primary p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:border-primary hover:bg-primary/10"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={subtleFloat.animate}
            >
              <FaArrowUp className="text-xl" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section – home page animations (replay when scrolled back into view) */}
      <motion.section 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px" }}
        variants={heroStagger}
      >
        {/* Background gradient animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Decorative icons – slide in from corners on load */}
        <motion.div
          className="absolute top-[10%] left-[5%] md:top-1/4 md:left-1/4"
          variants={heroDecoReveal}
          animate={subtleFloat.animate}
        >
          <SiSwift className="text-3xl md:text-5xl text-primary/20" />
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] right-[5%] md:bottom-1/4 md:right-1/4"
          variants={heroDecoRevealRight}
          animate={subtleFloat.animate}
        >
          <SiAppstore className="text-3xl md:text-5xl text-secondary/20" />
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[5%] md:top-1/3 md:right-1/3"
          variants={heroDecoRevealRight}
          animate={gentlePulse.animate}
        >
          <FaMobile className="text-3xl md:text-5xl text-accent/20" />
        </motion.div>

        {/* Subtle mouse follower - elegant glow */}
        <motion.div
          className="fixed pointer-events-none hidden md:block"
          style={{
            width: '300px',
            height: '300px',
            background: "radial-gradient(circle, rgba(0,122,255,0.08) 0%, rgba(0,122,255,0) 70%)",
            position: 'fixed',
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
          animate={{
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          style={{ opacity, scale }}
          className="text-center z-10 px-4 md:px-0 relative"
          variants={heroStagger}
        >
          <motion.div
            variants={heroIconReveal}
            className="mb-6 md:mb-8"
          >
            <motion.div
              animate={subtleFloat.animate}
            >
              <FaApple className="text-5xl md:text-7xl text-primary mx-auto" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            variants={heroNameReveal}
          >
            Ashokkumar N
            <motion.span 
              className="block text-primary mt-2"
              variants={heroSubtitleReveal}
            >
              iOS Developer
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-base md:text-xl mb-6 md:mb-8 text-gray-300 max-w-3xl mx-auto"
            variants={heroSubtitleReveal}
          >
            Results-driven iOS Developer with 2+ years building scalable, high-performance apps using Swift, SwiftUI, UIKit, Combine, CoreData, REST APIs, and MVVM architecture. Proven track record of delivering App Store releases, improving stability, and collaborating across teams.
          </motion.p>

          {/* Skill tags – pop in with stagger */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8"
            variants={heroStagger}
          >
            {['Swift', 'SwiftUI', 'UIKit', 'Combine', 'CoreData', 'MVVM'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm"
                variants={letterAnimation}
                whileHover={{
                  backgroundColor: "rgba(0, 122, 255, 0.25)",
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-3 md:gap-4"
            variants={heroStagger}
          >
            <motion.button
              {...enhancedHoverAnimation}
              className="bg-primary hover:bg-secondary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={handleViewProjects}
              variants={slideInFromLeft}
            >
              <motion.div animate={subtleFloat.animate}>
                <FaLaptopCode />
              </motion.div>
              View Projects
            </motion.button>
            <motion.button
              {...enhancedHoverAnimation}
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-6 py-2.5 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={handleDownloadResume}
              variants={slideInFromRight}
            >
              <motion.div animate={subtleFloat.animate}>
                <FaDownload />
              </motion.div>
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section with enhanced scroll animation */}
      <motion.section 
        id="about" 
        className={`${mobileStyles.section} bg-dark/50`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }} // Reduced margin for mobile
        variants={staggerContainer}
      >
        <div className={`container mx-auto ${mobileStyles.container}`}>
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${mobileStyles.heading} font-bold mb-8 text-center`}
              variants={bounceIn}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              variants={staggerContainer}
            >
              <motion.p variants={slideInFromLeft}>
                Results-driven iOS Developer with hands-on experience shipping scalable, high-performance apps to the App Store. I specialize in Swift, SwiftUI, UIKit, Combine, CoreData, REST APIs, and MVVM architecture.
              </motion.p>
              <motion.p variants={slideInFromRight}>
                I focus on maintainable, testable code, collaborating closely with designers, backend teams, and QA to deliver polished releases. I care about smooth animations, reliable offline experiences, and crash-free performance.
              </motion.p>
              <motion.p variants={slideInFromLeft}>
                Comfortable leading end-to-end delivery: integrating APIs, refining UI polish, optimizing performance, and handling deployment, certificates, and provisioning for App Store submissions and TestFlight builds.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section with enhanced scroll animation */}
      <motion.section 
        id="skills" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={bounceIn}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* iOS Development */}
            <motion.div 
              variants={slideInFromLeft}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <FaApple className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">iOS Development</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Swift, SwiftUI, UIKit, Combine</li>
                  <li>• CoreData, offline caching, persistence</li>
                  <li>• SwiftUI + UIKit hybrids with MVVM</li>
                  <li>• Smooth animations & transitions</li>
                  <li>• Async/await networking & background tasks</li>
                </ul>
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div 
              variants={slideInFromBottom}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <SiXcode className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">Tools & Delivery</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Xcode, Instruments, Fastlane</li>
                  <li>• Git, GitHub, CI/CD hygiene</li>
                  <li>• CocoaPods, Swift Package Manager</li>
                  <li>• App Store Connect, TestFlight, certificates</li>
                  <li>• Crash monitoring & analytics</li>
                </ul>
              </div>
            </motion.div>

            {/* Architecture & Design */}
            <motion.div 
              variants={slideInFromRight}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <FaSwift className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">Architecture & Quality</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• MVVM, Clean Architecture, SOLID</li>
                  <li>• Protocol-oriented design, modularization</li>
                  <li>• REST & GraphQL API integration</li>
                  <li>• XCTests, XCUITests, performance profiling</li>
                  <li>• Accessibility & user-centric UI polish</li>
                </ul>
              </div>
            </motion.div>

            {/* Backend & Collaboration */}
            <motion.div 
              variants={slideInFromBottom}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <SiFirebase className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">APIs & Collaboration</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• REST/GraphQL with Alamofire & URLSession</li>
                  <li>• Firebase, notifications, crash reporting</li>
                  <li>• Async/await data flows & Combine</li>
                  <li>• Agile delivery, cross-functional teamwork</li>
                  <li>• AI tools: GitHub Copilot, ChatGPT/Claude</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section with enhanced scroll animation */}
      <motion.section 
        id="projects" 
        className="py-20 bg-dark/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={bounceIn}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {/* Project 1 */}
            <motion.div 
              variants={slideInFromLeft}
              whileHover={cardHoverAnimation.whileHover}
              onClick={() => window.open(JUSRIDE_APP_STORE_LINK, '_blank')}
              className="cursor-pointer"
            >
              <div className="bg-dark/50 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <FaApple className="text-6xl text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">JusRide – Social Cycling & Bicycle Service</h3>
                  <p className="text-gray-300 mb-4">
                    Built a social platform for cyclists to connect, interact, and book services using a hybrid SwiftUI + UIKit approach with MVVM.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                    <li>Integrated Alamofire + Combine for reactive API handling</li>
                    <li>Added OLA Maps SDK for navigation and nearby service discovery</li>
                    <li>Implemented CoreData offline caching for uninterrupted UX</li>
                    <li>Shipped smooth animations and interactive UI using SwiftUI</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">SwiftUI</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">UIKit</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Combine</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">CoreData</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              variants={slideInFromRight}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-secondary/20 flex items-center justify-center">
                  <SiFirebase className="text-6xl text-secondary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Employee Management App (Internal)</h3>
                  <p className="text-gray-300 mb-4">
                    Delivered an internal enterprise iOS app built entirely with SwiftUI and MVVM, focused on reliability and productivity.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                    <li>Implemented leave requests, approvals, attendance, and timesheets</li>
                    <li>Added internal chat/collaboration features with async/await APIs</li>
                    <li>Integrated backend services with secure REST endpoints</li>
                    <li>Optimized UI polish, performance, and crash-free reliability</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">SwiftUI</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">MVVM</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Async/Await</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">REST</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section with enhanced scroll animation */}
      <motion.section 
        id="experience" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={bounceIn}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-8"
            variants={staggerContainer}
          >
            {/* Experience 1 */}
            <motion.div
              variants={slideInFromBottom}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2">iOS Developer</h3>
                <p className="text-primary mb-2">Milespeak Technologies Pvt Ltd, Chennai • Feb 2024 – Present</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Built and maintained scalable enterprise iOS apps with Swift, SwiftUI, UIKit, and Combine</li>
                  <li>Developed feature-rich social, booking, and enterprise apps following MVVM architecture</li>
                  <li>Integrated REST APIs using Alamofire + Combine and async/await, improving reliability</li>
                  <li>Implemented reusable UI components, smooth animations, and CoreData offline persistence</li>
                  <li>Refactored legacy code for maintainability, readability, and performance</li>
                  <li>Led app deployments via App Store Connect, TestFlight, certificates, and provisioning</li>
                  <li>Authored XCTests/XCUITests, monitored crashes, and optimized stability pre-release</li>
                  <li>Partnered with designers, backend engineers, and QA for polished, on-time releases</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2
            <motion.div
              variants={letterAnimation}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2">Junior iOS Developer</h3>
                <p className="text-primary mb-2">Startup Company • 2020 - 2022</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Built and shipped multiple iOS applications</li>
                  <li>Worked with Core Data and Realm for local storage</li>
                  <li>Implemented push notifications and in-app purchases</li>
                  <li>Participated in agile development process</li>
                  <li>Contributed to app store optimization</li>
                </ul>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Resume Download Section */}
      <motion.section 
        id="resume" 
        className="py-20 bg-dark/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              variants={slideInFromBottom}
            >
              Resume
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-8 text-lg"
              variants={slideInFromBottom}
              transition={{ delay: 0.1 }}
            >
              Download my resume to learn more about my experience and skills
            </motion.p>
            <motion.div variants={slideInFromBottom} transition={{ delay: 0.2 }}>
              <motion.button
                {...enhancedHoverAnimation}
                className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-3 mx-auto shadow-lg"
                onClick={handleDownloadResume}
              >
                <FaDownload className="text-xl" />
                Download Resume PDF
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        id="certifications" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={bounceIn}
          >
            Certifications
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-dark/50 p-6 rounded-xl border border-gray-800"
              variants={slideInFromLeft}
              whileHover={cardHoverAnimation.whileHover}
            >
              <h3 className="text-xl font-bold text-primary mb-2">Java FullStack Development</h3>
              <p className="text-gray-300">QSpiders • 2023</p>
            </motion.div>
            <motion.div 
              className="bg-dark/50 p-6 rounded-xl border border-gray-800"
              variants={slideInFromRight}
              whileHover={cardHoverAnimation.whileHover}
            >
              <h3 className="text-xl font-bold text-primary mb-2">iOS App Development with Swift</h3>
              <p className="text-gray-300">Udemy • 2024</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education" 
        className="py-20 bg-dark/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={bounceIn}
          >
            Education
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-dark/50 p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between"
              variants={slideInFromLeft}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div>
                <h3 className="text-xl font-bold">B.Sc. Mathematics</h3>
                <p className="text-gray-300">Gandhigram Rural Institute, Dindigul</p>
                <p className="text-gray-400 mt-1">CGPA: 7.1 / 10</p>
              </div>
              <p className="text-primary mt-3 md:mt-0">Aug 2020 – May 2023</p>
            </motion.div>
            <motion.div 
              className="bg-dark/50 p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between"
              variants={slideInFromRight}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div>
                <h3 className="text-xl font-bold">HSC</h3>
                <p className="text-gray-300">Akshaya Academy Hr. Sec School, Dindigul</p>
                <p className="text-gray-400 mt-1">Percentage: 85%</p>
              </div>
              <p className="text-primary mt-3 md:mt-0">Jun 2019 – Mar 2020</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section with enhanced scroll animation */}
      <motion.section 
        id="contact" 
        className={`${mobileStyles.section} bg-dark/50 min-h-screen flex items-center justify-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className={`container mx-auto ${mobileStyles.container}`}>
          <motion.h2 
            className={`${mobileStyles.heading} font-bold mb-8 text-center`}
            variants={bounceIn}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={staggerContainer}
          >
            {/* Email display */}
            <motion.div 
              className="text-center mb-8"
              variants={slideInFromTop}
            >
              <motion.a
                href={`mailto:${EMAIL}`}
                className="text-lg md:text-xl text-primary hover:text-secondary transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {EMAIL}
              </motion.a>
              <div className="mt-3 text-gray-400 flex flex-col md:flex-row items-center justify-center gap-2">
                <span>📍 Chennai, India</span>
                <span className="hidden md:inline">•</span>
                <a href="tel:+919360436613" className="hover:text-primary">+91-9360436613</a>
              </div>
            </motion.div>

            {/* Social icons */}
            <div className="flex justify-center space-x-8 mb-8 md:mb-12">
              <motion.a
                initial={{ opacity: 0, y: 24, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                href="https://github.com/AshokkumarNallasamy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-gray-300 hover:text-primary"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 24, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                href="https://www.linkedin.com/in/ashokkumar01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-gray-300 hover:text-primary"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 24, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                href={`https://wa.me/${9360436613}?text=${encodeURIComponent("Hey!\nAshokkumar Nallasamy.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-gray-300 hover:text-primary"
              >
                <FaWhatsapp />
              </motion.a>
            </div>


            {/* Contact form */}
            <motion.form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className={`${mobileStyles.form} space-y-4 md:space-y-6 backdrop-blur-sm`}
              variants={staggerContainer}
            >
              <motion.div variants={slideInFromLeft}>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none text-base md:text-lg text-white placeholder-gray-400"
                />
              </motion.div>
              <motion.div variants={slideInFromRight}>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none text-base md:text-lg text-white placeholder-gray-400"
                />
              </motion.div>
              <motion.div variants={slideInFromLeft}>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="4"
                  whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none text-base md:text-lg text-white placeholder-gray-400 resize-none"
                />
              </motion.div>
              {submitStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-success text-center text-base md:text-lg"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-error text-center text-base md:text-lg"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={slideInFromBottom}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 bg-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <motion.p variants={slideInFromBottom}>
            © 2025 Ashokkumar. All rights reserved.
          </motion.p>
          <motion.p 
            className="mt-2"
            variants={slideInFromBottom}
            transition={{ delay: 0.1 }}
          >
            Designed and developed by Ashokkumar Nallasamy
          </motion.p>
        </div>
      </motion.footer>

      {/* Add a scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ 
          scaleX: scrollYProgress,
          transformOrigin: "0%"
        }}
      />

      {/* Add a subtle background animation */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-dark to-gray-900"
        animate={{ opacity: [0.98, 1, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default App;
