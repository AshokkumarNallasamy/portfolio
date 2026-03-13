export const JUSRIDE_APP_STORE_LINK = "https://apps.apple.com/in/app/jus-ride/id6532623976";
export const RESUME_LINK = "https://drive.google.com/uc?export=download&id=1a22uHG4u59KfnUHx8HZzQzzyQusPu-fe";
export const FILE_ID = '1a22uHG4u59KfnUHx8HZzQzzyQusPu-fe';

export const springConfig = { damping: 25, stiffness: 150 };
export const springSnappy = { type: "spring", damping: 25, stiffness: 200 };
export const springGentle = { type: "spring", damping: 30, stiffness: 120 };
export const springBouncy = { type: "spring", damping: 15, stiffness: 100 };

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springSnappy
  }
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springSnappy
  }
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSnappy
  }
};

export const slideInFromTop = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSnappy
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const letterAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSnappy
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springGentle
  }
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springBouncy
  }
};

export const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

export const heroIconReveal = {
  hidden: { opacity: 0, scale: 0.8, y: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springGentle
  }
};

export const heroNameReveal = {
  hidden: { opacity: 0, y: -40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springGentle
  }
};

export const heroSubtitleReveal = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springGentle
  }
};

export const heroDecoReveal = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 0.25,
    y: 0,
    transition: springGentle
  }
};

export const heroDecoRevealRight = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 0.25,
    y: 0,
    transition: springGentle
  }
};

export const enhancedHoverAnimation = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
  },
  whileTap: {
    scale: 0.97,
    transition: { duration: 0.12, ease: "easeOut" }
  }
};

export const cardHoverAnimation = {
  whileHover: {
    y: -6,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
  }
};

export const subtleFloat = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
  }
};

export const gentlePulse = {
  animate: {
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

export const iosStyles = {
  section: "min-h-[60vh] pt-16 pb-24 md:pt-[15vh] md:pb-[25vh] md:min-h-screen flex flex-col justify-start md:justify-center scroll-mt-24",
  heading: "text-2xl sm:text-3xl md:text-6xl text-vibrant font-bold tracking-tight mb-6 md:mb-12 transition-all duration-700",
  subheading: "text-lg sm:text-xl md:text-3xl font-bold mb-3 md:mb-6 text-vibrant",
  container: "ios-container",
  card: "ios-glass p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col",
  form: "w-full max-w-2xl mx-auto ios-glass p-5 sm:p-6 md:p-8 rounded-3xl",
};
