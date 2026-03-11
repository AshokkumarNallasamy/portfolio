import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaApple, FaArrowUp } from 'react-icons/fa';
import { springGentle, springSnappy, staggerContainer, letterAnimation, slideInFromLeft } from '../constants';
import { navigationLinks } from '../data/portfolioData';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu, activeSection, scrollToTop }) => {
  return (
    <>
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-16 flex items-center px-4 md:px-6 ios-glass-vibrant rounded-full ${isMenuOpen ? 'z-[70]' : 'z-50'}`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={springGentle}
      >
        <div className="w-full max-w-full mx-auto px-2 sm:px-4 py-1.5 box-border relative overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between gap-1 md:gap-4 min-w-0">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <FaApple className="text-xl md:text-2xl" />
              <span className="text-lg md:text-xl font-bold tracking-tight text-white">Ashokkumar</span>
            </motion.a>
 
            <motion.div
              className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-shrink-0 text-gray-200"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navigationLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`${isActive ? 'text-primary' : 'text-white/80'} hover:text-primary transition-colors relative text-xs lg:text-sm whitespace-nowrap font-semibold px-2 lg:px-3 py-2 rounded-full`}
                    variants={letterAnimation}
                    whileHover={{ y: -1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div
                className="relative w-5 h-4"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <motion.span
                  className={`absolute top-0 left-0 w-5 h-0.5 bg-primary transform transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                  animate={{ backgroundColor: isMenuOpen ? "rgb(0, 199, 190)" : "rgb(0, 122, 255)" }}
                />
                <motion.span
                  className={`absolute top-1/2 left-0 w-5 h-0.5 bg-primary transform -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
                  animate={{ backgroundColor: isMenuOpen ? "rgb(0, 199, 190)" : "rgb(0, 122, 255)" }}
                />
                <motion.span
                  className={`absolute bottom-0 left-0 w-5 h-0.5 bg-primary transform transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                  animate={{ backgroundColor: isMenuOpen ? "rgb(0, 199, 190)" : "rgb(0, 122, 255)" }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] ios-glass-vibrant flex items-center justify-center md:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navigationLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-4xl font-bold transition-colors tracking-tighter ${isActive ? 'text-primary' : 'text-vibrant hover:text-primary'}`}
                    variants={slideInFromLeft}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
