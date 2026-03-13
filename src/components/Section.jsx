import React from 'react';
import { motion } from 'framer-motion';
import { iosStyles, staggerContainer } from '../constants';

const Section = ({ id, children, bgImage, className = "", initial = "hidden", whileInView = "visible", viewport = { once: true, margin: "-100px" }, variants = staggerContainer, bgStyle = {} }) => {
  return (
    <motion.section
      id={id}
      className={`${iosStyles.section} ${className} relative overflow-hidden z-10`}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
    >
      <div className={`${iosStyles.container} relative z-10`}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
