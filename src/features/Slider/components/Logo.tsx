import { motion } from 'framer-motion';

import { itemVariants } from '../animations/animation';
import { Logo } from '../interface/logo';
import { extractTechName } from '../utils/extractTechName';

const LogoDiv = ({ image, index }: Logo) => {
  const techName = extractTechName(image);

  return (
    <motion.div
      className="mx-1 flex flex-col items-center justify-center xl:mx-4 xl:my-4"
      variants={itemVariants}
    >
      <img
        src={image}
        alt={`Logo ${index + 1}`}
        className="h-10 w-10 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
      />
      <div className="text-center font-body text-[8px] uppercase sm:mt-1 lg:mt-2 lg:text-[10px]">
        {techName}
      </div>
    </motion.div>
  );
};

export default LogoDiv;
