import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import Card from '../../components/Card';
import experienceBg from '../../assets/bg/experience_bg.png';
import { bounceIn, slideInFromBottom, iosStyles } from '../../constants';
import { experienceData } from '../../data/portfolioData';

const Experience = ({ activeSection }) => {
  return (
    <Section id="experience" className="scroll-mt-20 md:scroll-mt-0" bgImage={experienceBg}>
      <motion.h2
        className={`${iosStyles.heading + " text-center"} ${activeSection === 'experience' ? 'scale-105' : 'scale-100 opacity-90'}`}
        variants={bounceIn}
      >
        Work Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experienceData.map((exp, index) => (
          <Card key={exp.title + exp.company} variants={slideInFromBottom}>
            <h3 className={iosStyles.subheading}>{exp.title}</h3>
            <p className="text-primary font-bold mb-4">{exp.company} • {exp.period}</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              {exp.points.map(point => <li key={point}>{point}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
