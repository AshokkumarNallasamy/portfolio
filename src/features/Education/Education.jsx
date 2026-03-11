import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import Card from '../../components/Card';
import projectsBg from '../../assets/bg/projects_bg.png';
import { bounceIn, slideInFromLeft, slideInFromRight, iosStyles } from '../../constants';
import { educationData } from '../../data/portfolioData';

const Education = ({ activeSection }) => {
  return (
    <Section id="education" className="scroll-mt-20 md:scroll-mt-0" bgImage={projectsBg}>
      <motion.h2
        className={`${iosStyles.heading + " text-center"} ${activeSection === 'education' ? 'scale-105' : 'scale-100 opacity-90'}`}
        variants={bounceIn}
      >
        Education
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu, index) => {
          const variants = index % 2 === 0 ? slideInFromLeft : slideInFromRight;
          return (
            <Card key={edu.degree} variants={variants} className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className={iosStyles.subheading + " !mb-1"}>{edu.degree}</h3>
                <p className="text-white/40">{edu.school}</p>
                <p className="text-primary mt-1 font-medium">{edu.result}</p>
              </div>
              <p className="text-white/40 mt-3 md:mt-0 font-bold">{edu.period}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Education;
