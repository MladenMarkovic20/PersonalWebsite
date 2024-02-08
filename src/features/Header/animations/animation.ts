export const animationMotion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const animationMotionLeft = {
  hidden: { opacity: 0, x: -400 },
  show: {
    x: 0,
    opacity: 1,
    rotate: [0, 1, -1, 1, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: 0,
    },
  },
};

export const animationMotionRight = {
  hidden: { opacity: 0, x: 400 },
  show: {
    x: 0,
    opacity: 1,
    rotate: [0, 1, -1, 1, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: 0,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
