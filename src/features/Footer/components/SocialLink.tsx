import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRef } from 'react';

import useAnimatedElement from '../../../hooks/useAnimatedElement';
import { getSocialMedia } from '../utils/getSocialMedia';

function SocialLink({ href, animationData }: { href: string; animationData: object }) {
  const ref = useRef(null);
  const { animation, x } = getSocialMedia(href);
  const { variants, initial, animate, transition } = useAnimatedElement(ref, animation);

  return (
    <a href={href}>
      <motion.div
        className="h-16 w-16"
        variants={variants}
        initial={initial}
        animate={animate}
        transition={transition}
        ref={ref}
        style={{ x }}
      >
        <Lottie animationData={animationData} loop />
      </motion.div>
    </a>
  );
}

export default SocialLink;
