import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import aboutBg from '../../assets/bg/about_bg.png';
import { slideInFromBottom, iosStyles } from '../../constants';

const Resume = ({ activeSection, onDownload }) => {
  return (
    <Section id="resume" bgImage={aboutBg}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className={`${iosStyles.heading} ${activeSection === 'resume' ? 'scale-105' : 'scale-100 opacity-90'}`}
          variants={slideInFromBottom}
        >
          Resume
        </motion.h2>
        <motion.p
          className="text-white/70 mb-8 text-lg"
          variants={slideInFromBottom}
          transition={{ delay: 0.1 }}
        >
          Download my resume to learn more about my experience and skills
        </motion.p>
        <motion.div variants={slideInFromBottom} transition={{ delay: 0.2 }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-3 mx-auto shadow-lg"
            onClick={onDownload}
          >
            Download Resume PDF
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
};

export default Resume;
