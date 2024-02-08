import { motion } from 'framer-motion';
import { useRef } from 'react';

import useAnimatedElement from '../../../hooks/useAnimatedElement';
import PortfolioProjects from '../../ProjectList/components/AnimatedPortfolioHeadings';
import { animationProps } from '../animations/animation';

import { firstParagraphProps, secondParagraphProps } from './ParaghraphProps';

function AboutSection() {
  const ref = useRef(null);

  const { variants, initial, animate } = useAnimatedElement(ref, animationProps);

  const sectionProps = {
    className:
      'flex w-screen flex-col gap-5 font-body lg:w-screen lg:flex-row lg:items-center lg:text-center xl:h-full 2xl:gap-4 2xl:p-16',
    variants,
    initial,
    animate,
    ref,
  };

  return (
    <div className="flex h-full flex-col bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 xl:bg-slate-100 xl:bg-[url(/assets/background/man.png)] xl:bg-contain xl:bg-fixed xl:bg-center xl:bg-no-repeat">
      <motion.section {...sectionProps}>
        <div {...firstParagraphProps}>
          <p className="text-justify md:text-center">{firstParagraphProps.text}</p>
        </div>

        <div {...secondParagraphProps}>
          <p className="leading-2 text-justify">{secondParagraphProps.text}</p>
        </div>
      </motion.section>

      <PortfolioProjects />
    </div>
  );
}

export default AboutSection;
