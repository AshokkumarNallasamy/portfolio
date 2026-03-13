import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { bounceIn, slideInFromLeft, slideInFromRight, iosStyles } from '../../constants';
import { certificationsData } from '../../data/portfolioData';

const Certifications = ({ activeSection }) => {
  return (
    <Section id="certifications">
      <motion.h2
        className={`${iosStyles.heading + " text-center"} ${activeSection === 'certifications' ? 'scale-105' : 'scale-100 opacity-90'}`}
        variants={bounceIn}
      >
        Certifications
      </motion.h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => {
          const variants = index % 2 === 0 ? slideInFromLeft : slideInFromRight;
          return (
            <Card key={cert.title} variants={variants} className="h-full">
              <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
              <p className="text-white/40">{cert.org} • {cert.year}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Certifications;
