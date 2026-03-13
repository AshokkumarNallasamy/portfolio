import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { bounceIn, slideInFromLeft, slideInFromRight, iosStyles } from '../../constants';
import { projectsData } from '../../data/portfolioData';

const Projects = ({ activeSection }) => {
  return (
    <Section id="projects">
      <motion.h2
        className={`${iosStyles.heading + " text-center"} ${activeSection === 'projects' ? 'scale-105' : 'scale-100 opacity-90'}`}
        variants={bounceIn}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => {
          const variants = index % 2 === 0 ? slideInFromLeft : slideInFromRight;
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              variants={variants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
              onClick={() => project.link && window.open(project.link, '_blank')}
              className={`${project.link ? "cursor-pointer h-full" : "h-full"} will-change-transform`}
            >
              <div className={iosStyles.card + " !p-0"}>
                <div className={`${project.bgColor} h-64 flex items-center justify-center border-b border-white/10 blur-[0.3px]`}>
                  <Icon className={`text-8xl ${project.iconColor} drop-shadow-[0_0_15px_${project.shadowColor}]`} />
                </div>
                <div className="p-8">
                  <h3 className={iosStyles.subheading}>{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
                    {project.points.map(point => <li key={point}>{point}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/20 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
