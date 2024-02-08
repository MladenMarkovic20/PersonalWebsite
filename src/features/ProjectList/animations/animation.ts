import { AnimationProps, Variants } from 'framer-motion';
import { RefObject } from 'react';

import useAnimatedElement from '../../../hooks/useAnimatedElement';

export interface AnimatedElementOptions {
  hidden: { opacity: number; x: number };
  visible: {
    opacity: number;
    transition: {
      duration: number;
      delay: number;
    };
    x: number;
  };
}

export interface AnimatedElementResult {
  variants: Variants;
  initial: AnimationProps['initial'];
  animate: AnimationProps['animate'];
}

export const imageAnimationOption: AnimatedElementOptions = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
    },
    x: 0,
  },
};

export const textAnimationOption: AnimatedElementOptions = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
    },
    x: 0,
  },
};

export const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.6,
      duration: 4,
    },
  },
};

export function useAnimation(
  ref: RefObject<Element>,
  options: AnimatedElementOptions
): AnimatedElementResult {
  const { hidden, visible } = options;

  const result: AnimatedElementResult = useAnimatedElement(ref, {
    hidden,
    visible,
  });

  return result;
}

export default useAnimation;
