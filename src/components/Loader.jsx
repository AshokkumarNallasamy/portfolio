import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FaApple } from 'react-icons/fa';

const Loader = forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6"
      {...props}
    >
      <div className="relative">
        {/* Glow behind the logo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-system-blue blur-3xl rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          <FaApple className="text-8xl md:text-9xl text-white opacity-90 drop-shadow-2xl" />
        </motion.div>
      </div>

      <motion.div
        className="mt-12 w-48 h-1 bg-white/20 rounded-full overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="w-1/2 h-full bg-white rounded-full absolute left-0 top-0"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-white/40 text-sm font-medium tracking-[0.2em] uppercase"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
});

export default Loader;
