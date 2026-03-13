import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { bounceIn, slideInFromLeft, slideInFromRight, iosStyles } from '../../constants';

const About = ({ activeSection }) => {
  return (
    <Section id="about">
      <motion.div className="max-w-4xl mx-auto text-center will-change-transform">
        <motion.h2
          className={`${iosStyles.heading} ${activeSection === 'about' ? 'scale-105' : 'scale-100 opacity-90'}`}
          variants={bounceIn}
        >
          About Me
        </motion.h2>
        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <motion.p variants={slideInFromLeft} className="will-change-transform">
            Results-driven iOS Developer with hands-on experience shipping scalable, high-performance apps to the App Store. I specialize in Swift, SwiftUI, UIKit, Combine, CoreData, REST APIs, and MVVM architecture.
          </motion.p>
          <motion.p variants={slideInFromRight} className="will-change-transform">
            I focus on maintainable, testable code, collaborating closely with designers, backend teams, and QA to deliver polished releases. I care about smooth animations, reliable offline experiences, and crash-free performance.
          </motion.p>
          <motion.p variants={slideInFromLeft} className="will-change-transform">
            Comfortable leading end-to-end delivery: integrating APIs, refining UI polish, optimizing performance, and handling deployment, certificates, and provisioning for App Store submissions and TestFlight builds.
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
