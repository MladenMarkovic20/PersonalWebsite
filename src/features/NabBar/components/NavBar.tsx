import { motion } from 'framer-motion';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { ProjectLinks } from '../interface/projectLinks';
import { projectLinks } from '../utils/projectLinks';

const NavBar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const navTransition = { duration: 0.6, delay: 0.2 };

  return (
    <motion.nav
      className="w-screen bg-gradient-to-l from-slate-50 via-slate-100 to-slate-200 py-2 font-body uppercase"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={navTransition}
    >
      <div className="flex w-screen flex-row items-center justify-between gap-1 px-6 text-[10px] sm:justify-center sm:gap-2 sm:text-xs md:gap-6 md:text-base">
        {projectLinks.map(({ id, title }: ProjectLinks) => (
          <React.Fragment key={id}>
            <Link to={`#${id}`} className="text-center">
              {title}
            </Link>
            <div className="h-6 border-2 border-stone-50" />
          </React.Fragment>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavBar;
