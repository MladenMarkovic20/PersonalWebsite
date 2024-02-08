import { useEffect, useState } from 'react';

import useScreenSize from '../../../hooks/useScreenSize';
import ModalWindow from '../../Modal/components/ModalWindow';
import { cardVariants } from '../animations/animation';
import { projectsDescription } from '../data/projectDetails';
import { projects } from '../data/rawProjectsList';
import { ProjectData } from '../interface/projectData';
import { ProjectDetails } from '../interface/projectDetails';

import ModalContext from './ModalContext';
import ProjectCard from './RenderProject';

const Project = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [projectContext, setProjectContext] = useState<ProjectDetails>();
  const screenSize = useScreenSize();

  useEffect(() => {
    setProjectContext(projectsDescription[projectIndex]);
  }, [projectIndex]);

  return (
    <div className="bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 xl:bg-slate-100">
      <div className="py-6 font-body leading-6">
        {projects.map((project: ProjectData, index: number) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            cardVariants={cardVariants}
            screenSize={screenSize}
            setProjectIndex={setProjectIndex}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
      <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
        {projectContext && <ModalContext projectContext={projectContext} />}
      </ModalWindow>
    </div>
  );
};

export default Project;
