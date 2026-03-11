import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import aboutBg from '../../assets/bg/about_bg.png';
import { bounceIn, slideInFromLeft, slideInFromRight, iosStyles } from '../../constants';

const About = ({ activeSection }) => {
  return (
    <Section id="about" className="scroll-mt-20 md:scroll-mt-0" bgImage={aboutBg}>
      <motion.div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className={`${iosStyles.heading} ${activeSection === 'about' ? 'scale-105 blur-none' : 'scale-100 opacity-90'}`}
          variants={bounceIn}
        >
          About Me
        </motion.h2>
        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <motion.p variants={slideInFromLeft}>
            Results-driven iOS Developer with hands-on experience shipping scalable, high-performance apps to the App Store. I specialize in Swift, SwiftUI, UIKit, Combine, CoreData, REST APIs, and MVVM architecture.
          </motion.p>
          <motion.p variants={slideInFromRight}>
            I focus on maintainable, testable code, collaborating closely with designers, backend teams, and QA to deliver polished releases. I care about smooth animations, reliable offline experiences, and crash-free performance.
          </motion.p>
          <motion.p variants={slideInFromLeft}>
            Comfortable leading end-to-end delivery: integrating APIs, refining UI polish, optimizing performance, and handling deployment, certificates, and provisioning for App Store submissions and TestFlight builds.
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
