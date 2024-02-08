import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';

import useAnimatedElement from '../../../hooks/useAnimatedElement';
import { logos } from '../data/logos';

import LogoDiv from './Logo';

const Slider = () => {
  const ref = useRef(null);

  const animateConfig = useMemo(
    () => ({
      visible: {
        transition: {
          delay: 0.5,
          staggerChildren: 1,
          when: 'beforeChildren',
        },
      },
    }),
    []
  );

  const { variants, initial, animate } = useAnimatedElement(ref, animateConfig);

  return (
    <motion.div
      className="grid w-screen grid-cols-8 gap-2 bg-gradient-to-l from-slate-50 via-slate-100 to-slate-200 p-4 sm:p-4 md:p-6 xl:m-0 xl:flex xl:flex-row xl:items-center xl:justify-between xl:gap-1 xl:p-0"
      variants={variants}
      initial={initial}
      animate={animate}
      ref={ref}
    >
      {logos.map((image, index) => (
        <LogoDiv key={index} image={image} index={index} />
      ))}
    </motion.div>
  );
};

export default Slider;
