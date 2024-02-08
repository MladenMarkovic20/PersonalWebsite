export const testimonialVariants = {
  hidden: { y: 50 },
  visible: {
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 1,
      when: 'beforeChildren',
    },
    y: 0,
  },
};
