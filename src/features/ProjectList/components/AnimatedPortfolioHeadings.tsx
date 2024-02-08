import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRef } from 'react';

import DownArrow from '../../../assets/lottieAnimations/Down Arrow.json';
import useAnimatedElement from '../../../hooks/useAnimatedElement';

function AnimatedPortfolioHeadings() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const downRef = useRef(null);

  const {
    variants: leftVariants,
    initial: leftInitial,
    animate: leftAnimate,
  } = useAnimatedElement(leftRef, {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
      },
      x: 0,
    },
  });

  const {
    variants: rightVariants,
    initial: rightInitial,
    animate: rightAnimate,
  } = useAnimatedElement(rightRef, {
    hidden: { x: -100 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
      },
      x: 0,
    },
  });

  const {
    variants: downVariant,
    initial: downInitial,
    animate: downAnimate,
  } = useAnimatedElement(rightRef, {
    hidden: { y: 100 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
      },
      y: 0,
    },
  });

  return (
    <div className="my-6 flex w-screen flex-col items-center justify-center font-body leading-6">
      <motion.h4
        className="text-center text-xs lg:mx-14 lg:text-lg xl:mx-24 xl:text-2xl"
        variants={leftVariants}
        initial={leftInitial}
        animate={leftAnimate}
        ref={leftRef}
      >
        List of Completed Projects
      </motion.h4>
      <motion.h1
        className="w-full text-center text-lg font-bold sm:text-xl md:text-xl lg:mx-14 lg:text-3xl xl:mx-24 xl:text-5xl"
        variants={rightVariants}
        initial={rightInitial}
        animate={rightAnimate}
        ref={rightRef}
      >
        Please see the completed projects below.
      </motion.h1>

      <motion.div
        className=" flex w-1/12 items-center justify-center"
        variants={downVariant}
        initial={downInitial}
        animate={downAnimate}
        ref={downRef}
      >
        <Lottie animationData={DownArrow} loop />
      </motion.div>
    </div>
  );
}

export default AnimatedPortfolioHeadings;
