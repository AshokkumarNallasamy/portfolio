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
      {bgImage && (
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: bgStyle.opacity || 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px) brightness(0.9)',
            ...bgStyle
          }}
        />
      )}
      <div className={`${iosStyles.container} relative z-10`}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
