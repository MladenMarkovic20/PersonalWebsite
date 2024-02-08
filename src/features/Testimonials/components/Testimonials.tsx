import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';

import useAnimatedElement from '../../../hooks/useAnimatedElement';
import { testimonialVariants } from '../animations/animation';
import { testimonials } from '../data/testimonials';

import SingleTestimonial from './SingleTestimonial';

function Testimonials() {
  const ref = useRef(null);
  const { variants, initial, animate, transition } = useAnimatedElement(ref, testimonialVariants);

  const testimonialElements = useMemo(
    () =>
      testimonials.map((testimonial, index) => <SingleTestimonial key={index} {...testimonial} />),
    []
  );

  return (
    <motion.div
      className="flex w-screen flex-col items-center justify-center gap-10 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 py-6 font-body xl:h-screen xl:bg-slate-100"
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center xl:mt-20">
        <h1 className="mb-4 text-2xl font-bold leading-8 xl:text-4xl">
          Testimonials from Colleagues
        </h1>
        <h4 className="px-4 text-justify text-base leading-6 md:px-16 lg:text-center lg:leading-6 xl:mb-6 xl:w-full xl:text-xl">
          Please review the feedback from colleagues on my LinkedIn profile, which contains a
          thorough compilation of comments and endorsements that offer valuable insights into my
          professional abilities and contributions.
        </h4>
      </div>
      <div className="flex w-full grow flex-col items-center justify-center divide-y-2 divide-stone-50 lg:flex-row lg:divide-none xl:mb-40">
        {testimonialElements}
      </div>
    </motion.div>
  );
}

export default Testimonials;
