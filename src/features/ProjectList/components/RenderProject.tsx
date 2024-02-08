import { motion } from 'framer-motion';

import { ProjectCardData } from '../interface/projectCart';
import handleClientClick from '../utils/handleClientClick';

import ActionButtons from './ActionButtons';
import ProjectImage from './ProjectImage';

function ProjectCard({
  project,
  index,
  cardVariants,
  screenSize,
  setProjectIndex,
  setIsOpen,
}: ProjectCardData) {
  const backgroundImage = `/assets/background/background-projects${index + 1}.png`;

  return (
    <motion.div
      className="repeat flex snap-start flex-col items-center justify-center lg:flex-row xl:h-screen"
      id={`project-${index + 1}`}
      key={index}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      style={{
        backgroundImage: screenSize.width >= 1280 ? `url(${backgroundImage})` : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'local',
        backgroundSize: 'contain',
      }}
    >
      <ProjectImage imageVariants={cardVariants} image={project.image} />
      <motion.div className="px-10 lg:order-1 lg:w-6/12 xl:px-20" variants={cardVariants}>
        <div>
          <h2 className="mt-4 w-screen px-4 text-center text-xl font-bold lg:w-full lg:text-left lg:text-2xl lg:leading-loose xl:pl-4 xl:text-left xl:text-4xl">
            {project.title}
          </h2>
        </div>
        <div>
          <p className="my-4 w-screen px-4 text-justify lg:w-full lg:text-lg xl:my-6 xl:text-xl">
            {project.description}
          </p>
        </div>
        <div className="my-4 flex items-center justify-center lg:mx-4 lg:justify-start">
          {project.hashtags.map((hashtag, hashTagIndex) => (
            <div
              className="mr-2 inline bg-slate-400 px-5 py-1 text-xs lg:text-base xl:text-lg"
              key={hashTagIndex}
            >
              {hashtag}
            </div>
          ))}
        </div>
        <div>
          <ActionButtons
            handleClientClick={handleClientClick}
            setIsOpen={setIsOpen}
            setProjectIndex={setProjectIndex}
            type={project.type}
            index={index}
            link={project.link}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
