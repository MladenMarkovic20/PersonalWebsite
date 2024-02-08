import { useAnimation, useInView } from 'framer-motion';
import { RefObject, useEffect } from 'react';

export interface Variants {
  hidden?: Record<string, any>;
  visible?: Record<string, any>;
}

const useAnimatedElement = (
  ref: RefObject<Element>,
  variants: Variants,
  duration = 1,
  delay = 0.5
) => {
  const animationController = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animationController.start('visible');
    }
  }, [isInView, animationController]);

  return {
    ref,
    animationController,
    variants: {
      hidden: { opacity: 0, ...variants.hidden },
      visible: { opacity: 1, ...variants.visible },
    },
    initial: 'hidden',
    animate: animationController,
    transition: { duration, delay },
  };
};

export default useAnimatedElement;
