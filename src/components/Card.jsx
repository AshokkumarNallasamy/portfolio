import React from 'react';
import { motion } from 'framer-motion';
import { iosStyles, cardHoverAnimation } from '../constants';

const Card = ({ children, className = "", variants, whileHover = cardHoverAnimation.whileHover, onClick }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={whileHover}
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className={iosStyles.card}>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
