import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRef } from 'react';

import useAnimatedElement from '../../../hooks/useAnimatedElement';
import { ContactInformation, contactInfo } from '../data/info';
import { handleClickBasedOnName } from '../utils/contactHandlers';

function Contact() {
  const ref = useRef(null);

  const { variants, initial, animate, transition } = useAnimatedElement(ref, {
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
  });

  return (
    <div className="bg-gradient-to-l from-slate-50 via-slate-100 to-slate-200 xl:h-screen">
      <motion.div
        className="flex w-screen flex-col items-center justify-center py-10 font-body xl:h-full"
        variants={variants}
        initial={initial}
        animate={animate}
        transition={transition}
        ref={ref}
      >
        <h1 className="mb-4 text-center text-2xl font-bold leading-8 xl:mt-10 xl:text-4xl">
          Your Thoughts Matter – Reach Out to Connect!
        </h1>
        <div className="flex w-full grow flex-col items-center justify-center divide-y-2 divide-stone-50 lg:flex-row lg:divide-none">
          {contactInfo.map((info: ContactInformation, index: number) => (
            <div
              className="flex w-screen flex-col items-center py-4 text-center md:px-28 lg:my-4 lg:px-0"
              key={index}
            >
              <strong className="uppercase lg:text-lg xl:text-2xl">{info.name}</strong>
              <button
                className="flex w-4/12 items-center justify-center lg:h-40 xl:h-60"
                onClick={handleClickBasedOnName(info.name)!}
                type="button"
              >
                <Lottie animationData={info?.image} loop />
              </button>
              <p className="px-12 lg:h-16 lg:w-full 2xl:h-10">{info.description}</p>
              <strong className="pt-2 leading-8 underline decoration-stone-950 decoration-solid underline-offset-4">
                {info.type}
              </strong>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
