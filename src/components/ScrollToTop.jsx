import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { springSnappy } from '../constants';

const ScrollToTop = ({ show, onClick }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={springSnappy}
          onClick={onClick}
          className="fixed bottom-8 right-8 ios-glass text-primary p-4 rounded-full shadow-2xl z-50 hover:bg-white/10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
