import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { bounceIn, slideInFromLeft, slideInFromRight, slideInFromBottom, iosStyles } from '../../constants';
import { skillsData } from '../../data/portfolioData';

const Skills = ({ activeSection }) => {
  return (
    <Section id="skills">
      <motion.h2
        className={`${iosStyles.heading + " text-center"} ${activeSection === 'skills' ? 'scale-105' : 'scale-100 opacity-90'}`}
        variants={bounceIn}
      >
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => {
          const variants = index % 3 === 0 ? slideInFromLeft : (index % 3 === 1 ? slideInFromBottom : slideInFromRight);
          const Icon = category.icon;
          return (
            <Card key={category.category} variants={variants} className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-3xl text-primary" />
                <h3 className={iosStyles.subheading}>{category.category}</h3>
              </div>
              <ul className="space-y-2 text-white/70">
                {category.skills.map(skill => <li key={skill}>• {skill}</li>)}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
