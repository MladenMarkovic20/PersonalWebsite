import { Variants, motion } from 'framer-motion';

interface ProjectImageProps {
  imageVariants: Variants;
  image: string;
}

function ProjectImage({ imageVariants, image }: ProjectImageProps) {
  return (
    <div className="m-4 flex w-11/12 flex-col items-center justify-between px-10 sm:w-10/12 md:w-10/12 lg:order-2 lg:w-8/12 xl:px-20">
      <motion.img
        className="order-1 aspect-2 rounded-ee-[30px] rounded-ss-[30px] object-fill shadow-2xl lg:rounded-ee-[50px] lg:rounded-ss-[50px] xl:h-full xl:w-full xl:rounded-ee-[80px] xl:rounded-ss-[80px]"
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
        src={image}
        loading="lazy"
      />
    </div>
  );
}

export default ProjectImage;
