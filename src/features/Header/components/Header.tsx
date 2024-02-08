import { motion } from 'framer-motion';

import Computer from '../../../assets/lottieAnimations/Computer.json';
import ManCoding from '../../../assets/lottieAnimations/ManWithComputer.json';
import {
  animationMotion,
  animationMotionLeft,
  animationMotionRight,
} from '../animations/animation';
import { animationDiv } from '../utils/animationDiv';

import RenderSignature from './RenderSignature';

const Header = () => {
  return (
    <header className="relative flex w-screen flex-col items-center justify-around gap-2 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 py-10 text-center font-body text-xs font-bold lg:my-0 lg:h-full lg:py-0">
      <div className="relative z-50 flex grow flex-col items-center justify-around gap-10 px-10 sm:text-base md:justify-center md:text-xl lg:text-2xl xl:flex-row xl:justify-around xl:gap-2">
        {animationDiv({ animationData: ManCoding, variants: animationMotionLeft })}

        <div>
          <h3>Welcome to my professional online resume.</h3>

          <motion.span
            className="font-header text-2xl leading-tight sm:text-3xl sm:leading-snug md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-loose"
            variants={animationMotion}
            initial="hidden"
            animate="show"
            aria-hidden
          >
            <RenderSignature />
          </motion.span>

          <h3 className="">Below are the experiences and projects I have been involved in.</h3>
        </div>

        {animationDiv({ animationData: Computer, variants: animationMotionRight })}
      </div>
    </header>
  );
};

export default Header;
