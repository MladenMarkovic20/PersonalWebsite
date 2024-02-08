import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import { AnimationParameters } from '../interface/animationParameters';

export const animationDiv = ({ animationData, variants }: AnimationParameters): JSX.Element => (
  <motion.div
    className="w-4/12 md:w-3/12 lg:w-2/12 xl:w-2/12"
    variants={variants}
    initial="hidden"
    animate="show"
  >
    <Lottie animationData={animationData} loop />
  </motion.div>
);
