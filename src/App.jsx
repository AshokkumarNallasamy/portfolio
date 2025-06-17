import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaApple, FaSwift, FaDownload, FaMobile, FaLaptopCode, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { SiXcode, SiFirebase, SiSwift, SiAppstore } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const App = () => {
  const [ref] = useInView({
    triggerOnce: true,
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

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    window.open('/resume.pdf', '_blank');
  };

  // Optimized animation variants for better performance
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Optimized hover animations
  const enhancedHoverAnimation = {
    whileHover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    whileTap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const cardHoverAnimation = {
    whileHover: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(0, 122, 255, 0.15)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Optimized continuous animations
  const floatingAnimation = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateAnimation = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <motion.div
                animate={floatingAnimation.animate}
              >
                <FaApple className="text-primary text-xl md:text-2xl" />
              </motion.div>
              <motion.span 
                className="text-xl md:text-2xl font-bold text-primary"
                animate={floatingAnimation.animate}
                transition={{
                  delay: 0.5 // This will make the name animation slightly out of sync with the apple icon
                }}
              >
                Ashokkumar
              </motion.span>
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors relative text-sm"
                  variants={letterAnimation}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                rotate: 90,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div 
                className="relative w-5 h-4"
                animate={{
                  rotate: isMenuOpen ? 180 : 0
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
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
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute right-4 top-16 w-48 bg-dark/95 rounded-lg shadow-xl overflow-hidden border border-gray-800"
              >
                <div className="flex flex-col py-2">
                  {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                    <React.Fragment key={item}>
                      <motion.a
                        href={`#${item.toLowerCase()}`}
                        className="px-4 py-2.5 text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors text-sm"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </motion.a>
                      {index < ['About', 'Skills', 'Projects', 'Experience', 'Contact'].length - 1 && (
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-dark/80 backdrop-blur-md border border-primary/30 text-primary p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:border-primary hover:bg-primary/10"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(0, 122, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaArrowUp className="text-xl" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Background gradient animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating icons */}
        <motion.div
          className="absolute top-[10%] left-[5%] md:top-1/4 md:left-1/4"
          animate={floatingAnimation.animate}
        >
          <SiSwift className="text-3xl md:text-5xl text-primary/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] right-[5%] md:bottom-1/4 md:right-1/4"
          animate={floatingAnimation.animate}
          transition={{ delay: 1 }}
        >
          <SiAppstore className="text-3xl md:text-5xl text-secondary/30" />
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[5%] md:top-1/3 md:right-1/3"
          animate={floatingAnimation.animate}
          transition={{ delay: 2 }}
        >
          <FaMobile className="text-3xl md:text-5xl text-accent/30" />
        </motion.div>

        {/* Mouse follower - Optimized for mobile */}
        <motion.div
          className="fixed pointer-events-none hidden md:block"
          style={{
            width: '200px',
            height: '200px',
            background: "radial-gradient(circle, rgba(0,122,255,0.15) 0%, rgba(0,122,255,0) 70%)",
            position: 'fixed',
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          style={{ opacity, scale }}
          className="text-center z-10 px-4 md:px-0 relative"
          variants={staggerContainer}
        >
          <motion.div
            variants={scaleIn}
            className="mb-6 md:mb-8"
          >
            <motion.div
              animate={floatingAnimation.animate}
            >
              <FaApple className="text-5xl md:text-7xl text-primary mx-auto" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            variants={fadeInUp}
          >
            iOS Developer
            <motion.span 
              className="block text-primary mt-2"
              variants={fadeInUp}
            >
              Ashokkumar
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-base md:text-xl mb-6 md:mb-8 text-gray-300"
            variants={fadeInUp}
          >
            Mid-Level iOS Developer | Swift & SwiftUI Expert | UIKit Specialist
          </motion.p>

          {/* Skill tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8"
            variants={staggerContainer}
          >
            {['SwiftUI', 'UIKit', 'Core Data', 'Swift'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm"
                variants={letterAnimation}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(0, 122, 255, 0.2)"
                }}
                transition={{ delay: 0.1 * index }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-3 md:gap-4"
            variants={staggerContainer}
          >
            <motion.button
              {...enhancedHoverAnimation}
              className="bg-primary hover:bg-secondary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={handleViewProjects}
            >
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaLaptopCode />
              </motion.div>
              View Projects
            </motion.button>
            <motion.button
              {...enhancedHoverAnimation}
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-6 py-2.5 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={handleDownloadResume}
            >
              <motion.div
                animate={{
                  y: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
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
        viewport={{ once: true, margin: "-50px" }} // Reduced margin for mobile
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
              variants={letterAnimation}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              variants={letterAnimation}
            >
              <p>
                I'm a passionate iOS developer with expertise in both SwiftUI and UIKit frameworks.
                With a strong foundation in iOS development, I create elegant and performant applications
                that follow Apple's Human Interface Guidelines.
              </p>
              <p>
                My journey in iOS development started with UIKit, and I've since mastered SwiftUI,
                allowing me to build modern, responsive interfaces while maintaining backward compatibility
                when needed. I'm particularly skilled in creating smooth animations, implementing
                complex UI interactions, and optimizing app performance.
              </p>
              <p>
                I believe in writing clean, maintainable code and following SOLID principles.
                My experience includes working with various iOS frameworks, third-party libraries,
                and implementing best practices for app architecture and design patterns.
              </p>
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
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={letterAnimation}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* iOS Development */}
            <motion.div 
              variants={letterAnimation}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <FaApple className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">iOS Development</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Swift & SwiftUI</li>
                  <li>• UIKit & Auto Layout</li>
                  <li>• Core Data & Realm</li>
                  <li>• Core Animation</li>
                  <li>• Push Notifications</li>
                </ul>
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div 
              variants={letterAnimation}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <SiXcode className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">Tools & Technologies</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Xcode & Instruments</li>
                  <li>• Git & GitHub</li>
                  <li>• CocoaPods & SPM</li>
                  <li>• Firebase & CloudKit</li>
                  <li>• TestFlight & App Store</li>
                </ul>
              </div>
            </motion.div>

            {/* Architecture & Design */}
            <motion.div 
              variants={letterAnimation}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <FaSwift className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">Architecture & Design</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• MVVM & Clean Architecture</li>
                  <li>• Protocol-Oriented Programming</li>
                  <li>• Combine Framework</li>
                  <li>• Unit & UI Testing</li>
                  <li>• CI/CD Implementation</li>
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
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={letterAnimation}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {/* Project 1 */}
            <motion.div 
              variants={letterAnimation}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <FaApple className="text-6xl text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Wattawow</h3>
                  <p className="text-gray-300 mb-4">
                    A modern cycling app built with UIKit, SwiftUI and Core Data.
                    Features include real-time synchronization, widgets.
                    Includes API integrations, Maps.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">SwiftUI</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Core Data</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Combine</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              variants={letterAnimation}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-secondary/20 flex items-center justify-center">
                  <SiFirebase className="text-6xl text-secondary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Social Media App</h3>
                  <p className="text-gray-300 mb-4">
                    A social networking platform with real-time chat, photo sharing,
                    and push notifications using Firebase.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">UIKit</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Firebase</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">WebSocket</span>
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
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={letterAnimation}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-8"
            variants={staggerContainer}
          >
            {/* Experience 1 */}
            <motion.div
              variants={letterAnimation}
              whileHover={cardHoverAnimation.whileHover}
            >
              <div className="bg-dark/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2">Junior iOS Developer</h3>
                <p className="text-primary mb-2">Milespeak Technologies • 2024 - Present</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed and maintained multiple iOS applications using SwiftUI and UIKit</li>
                  <li>Implemented complex UI animations and transitions</li>
                  <li>Integrated REST APIs and third-party services</li>
                  <li>Collaborated with designers and backend developers</li>
                  <li>Worked with Core Data and Realm for local storage</li>
                  <li>Contributed to app store optimization</li>
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

      {/* Contact Section with enhanced scroll animation */}
      <motion.section 
        id="contact" 
        className={`${mobileStyles.section} bg-dark/50 min-h-screen flex items-center justify-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className={`container mx-auto ${mobileStyles.container}`}>
          <motion.h2 
            className={`${mobileStyles.heading} font-bold mb-8 text-center`}
            variants={letterAnimation}
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
              variants={letterAnimation}
            >
              <motion.a
                href={`mailto:${EMAIL}`}
                className="text-lg md:text-xl text-primary hover:text-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {EMAIL}
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <div className="flex justify-center space-x-8 mb-8 md:mb-12">
              <motion.a
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                href="https://github.com/AshokkumarNallasamy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-gray-300 hover:text-primary"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                href="https://www.linkedin.com/in/ashokkumar01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-gray-300 hover:text-primary"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
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
              <motion.div variants={letterAnimation}>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  whileFocus={{ 
                    scale: 1.01,
                    boxShadow: "0 0 15px rgba(0, 122, 255, 0.15)",
                    transition: { duration: 0.2 }
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none text-base md:text-lg text-white placeholder-gray-400"
                />
              </motion.div>
              <motion.div variants={letterAnimation}>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  whileFocus={{ 
                    scale: 1.01,
                    boxShadow: "0 0 15px rgba(0, 122, 255, 0.15)",
                    transition: { duration: 0.2 }
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none text-base md:text-lg text-white placeholder-gray-400"
                />
              </motion.div>
              <motion.div variants={letterAnimation}>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="4"
                  whileFocus={{ 
                    scale: 1.01,
                    boxShadow: "0 0 15px rgba(0, 122, 255, 0.15)",
                    transition: { duration: 0.2 }
                  }}
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
                whileHover={{ scale: 1.03 }}
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
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Ashokkumar. All rights reserved.</p>
          <p className="mt-2">Designed and developed by Ashokkumar Nallasamy</p>
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
        animate={{
          background: [
            "linear-gradient(to bottom right, #1C1C1E, #2C2C2E)",
            "linear-gradient(to bottom right, #1C1C1E, #3C3C3E)",
            "linear-gradient(to bottom right, #1C1C1E, #2C2C2E)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default App;
