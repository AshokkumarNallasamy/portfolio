import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaApple, FaSwift, FaDownload, FaCode, FaMobile, FaLaptopCode } from 'react-icons/fa';
import { SiXcode, SiCocoapods, SiFirebase, SiSwift, SiAppstore } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const App = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    window.open('/resume.pdf', '_blank');
  };

  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced scroll animation variants
  const scrollVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.95,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for more dynamic feel
      }
    }
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-gray-900 text-light">
      {/* Navigation */}
      <motion.nav 
        className="fixed w-full bg-dark/90 backdrop-blur-md z-50 border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-primary flex items-center gap-2"
            >
              <FaApple className="text-primary" />
              Ashokkumar
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <motion.a 
                href="#about" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#skills" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Skills
              </motion.a>
              <motion.a 
                href="#projects" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.a>
              <motion.a 
                href="#experience" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience
              </motion.a>
              <motion.a 
                href="#contact" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating iOS icons - Adjusted for all screens */}
        <motion.div
          className="absolute top-[10%] left-[5%] md:top-1/4 md:left-1/4"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <SiSwift className="text-4xl md:text-6xl text-primary/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] right-[5%] md:bottom-1/4 md:right-1/4"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          <SiAppstore className="text-4xl md:text-6xl text-secondary/30" />
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[5%] md:top-1/3 md:right-1/3"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        >
          <FaMobile className="text-4xl md:text-6xl text-accent/30" />
        </motion.div>

        {/* Mouse follower - Fixed positioning */}
        <motion.div
          className="fixed pointer-events-none"
          style={{
            width: '384px',
            height: '384px',
            background: "radial-gradient(circle, rgba(0,122,255,0.15) 0%, rgba(0,122,255,0) 70%)",
            position: 'fixed',
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 9999, // Ensure it's above all content
            pointerEvents: 'none',
            mixBlendMode: 'screen', // This helps with the glow effect
          }}
          animate={{
            scale: [1, 1.2, 1],
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
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <FaApple className="text-6xl md:text-8xl text-primary mx-auto" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            iOS Developer
            <motion.span 
              className="block text-primary mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ashokkumar
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mid-Level iOS Developer | Swift & SwiftUI Expert | UIKit Specialist
          </motion.p>

          {/* Animated skill tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {['SwiftUI', 'UIKit', 'Core Data', 'Swift'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm md:text-base"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 122, 255, 0.2)" }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(0, 122, 255, 0.3)",
                backgroundColor: "#5856D6"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={handleViewProjects}
            >
              <FaLaptopCode />
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(0, 122, 255, 0.3)",
                backgroundColor: "rgba(0, 122, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={handleDownloadResume}
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section with enhanced scroll animation */}
      <motion.section 
        id="about" 
        className="py-20 bg-dark/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
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
        variants={scrollVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* iOS Development */}
            <motion.div variants={itemVariants}>
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
            <motion.div variants={itemVariants}>
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
            <motion.div variants={itemVariants}>
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
        variants={scrollVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Project 1 */}
            <motion.div variants={itemVariants}>
              <div className="bg-dark/50 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <FaApple className="text-6xl text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">iOS Task Manager</h3>
                  <p className="text-gray-300 mb-4">
                    A modern task management app built with SwiftUI and Core Data.
                    Features include real-time synchronization, widgets, and Siri shortcuts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">SwiftUI</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Core Data</span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">WidgetKit</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={itemVariants}>
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
        variants={scrollVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Experience 1 */}
            <motion.div variants={itemVariants}>
              <div className="bg-dark/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2">Mid-Level iOS Developer</h3>
                <p className="text-primary mb-2">Tech Company • 2022 - Present</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed and maintained multiple iOS applications using SwiftUI and UIKit</li>
                  <li>Implemented complex UI animations and transitions</li>
                  <li>Integrated REST APIs and third-party services</li>
                  <li>Collaborated with designers and backend developers</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div variants={itemVariants}>
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section with enhanced scroll animation */}
      <motion.section 
        id="contact" 
        className="py-20 bg-dark/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex justify-center space-x-8 mb-12">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com"
                className="text-3xl text-gray-300 hover:text-primary"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com"
                className="text-3xl text-gray-300 hover:text-primary"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://twitter.com"
                className="text-3xl text-gray-300 hover:text-primary"
              >
                <FaTwitter />
              </motion.a>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary focus:outline-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 bg-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollVariants}
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Ashokkumar. All rights reserved.</p>
          <p className="mt-2">Designed and developed with ❤️ by Ashokkumar</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
