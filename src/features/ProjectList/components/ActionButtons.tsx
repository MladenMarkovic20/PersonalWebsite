import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ActionButtonsProps } from '../interface/actionButtonsProps';

function ActionButtons({
  handleClientClick,
  setIsOpen,
  setProjectIndex,
  type,
  index,
  link,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row lg:flex-col lg:items-start lg:justify-start lg:px-4 xl:w-6/12 xl:px-4">
      <motion.div
        className="w-6/12 px-10 py-4 lg:w-9/12 lg:px-0 lg:py-2 xl:w-10/12"
        whileHover={{ scale: 1.1, originX: 0, color: '#ffffff' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link
          to={link}
          className="block rounded-lg bg-slate-400 py-2 text-center text-xs font-black opacity-75 shadow-lg lg:text-base xl:text-lg"
          onClick={(e) => handleClientClick(e, type)}
        >
          View Project
        </Link>
      </motion.div>
      <motion.div
        className="w-6/12 px-10 py-2 lg:w-9/12 lg:px-0 lg:py-2 xl:w-10/12"
        whileHover={{ scale: 1.1, originX: 0, color: '#ffffff' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <button
          className="w-full cursor-pointer rounded-lg bg-slate-400 py-2 text-center text-xs font-black opacity-75 shadow-lg focus:border-none focus:outline-none active:border-none lg:text-base xl:text-lg"
          onClick={() => {
            setIsOpen((prevState: boolean) => !prevState);
            setProjectIndex(index);
          }}
          type="button"
        >
          Project Detail
        </button>
      </motion.div>
    </div>
  );
}

export default ActionButtons;
