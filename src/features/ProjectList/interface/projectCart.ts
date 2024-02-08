import { Variants } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

import { ProjectData } from './projectData';
import { ScreenSize } from './screenSize';

export interface ProjectCardData {
  project: ProjectData;
  index: number;
  cardVariants: Variants;
  screenSize: ScreenSize;
  setProjectIndex: Dispatch<SetStateAction<number>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
