import { ProjectDetails } from '../interface/projectDetails';

import ListComponent from './ListComponent';
import { sectionContext } from './SectionContext';

function ModalContext({ projectContext }: { projectContext: ProjectDetails }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="w-full border-b border-stone-900 p-2 text-center text-xl leading-loose sm:w-11/12">
        {projectContext.projectName}
      </h1>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full sm:w-11/12 sm:p-0">
          <p className="leading-2 py-4 text-justify font-bold">
            {projectContext.projectOverview.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-xl bg-stone-400  sm:w-11/12 sm:p-0 xl:flex-row xl:items-start xl:gap-4">
          {sectionContext('Scope', projectContext.projectOverview.scope)}
          {sectionContext('Objectives', projectContext.projectOverview.objectives)}
          {sectionContext('Role', projectContext.projectOverview.role)}
        </div>

        <div className="my-4 flex items-center border-t border-stone-900" />

        <div className="flex w-full flex-col items-center justify-center rounded-xl bg-stone-400 p-2 sm:w-11/12 sm:p-0 xl:flex-row xl:items-start xl:gap-4">
          {sectionContext('Technologies', projectContext.technologiesUsed.technologies)}
          {sectionContext('Frameworks', projectContext.technologiesUsed.frameworks)}
          {sectionContext('Tools', projectContext.technologiesUsed.tools)}
        </div>
      </div>

      <div className="my-4 flex items-center border-t border-stone-900" />

      <div className="w-full rounded-xl bg-stone-400 sm:w-11/12 sm:p-0 xl:p-2">
        <h3 className="py-2 text-center text-base font-bold uppercase underline decoration-2 underline-offset-4 xl:pl-2 xl:text-left">
          Challenges and Problem solving
        </h3>
        <div className="leading-2 py-2 text-justify">
          {projectContext.challengesAndProblemSolving.map((challenge: string, index: number) => (
            <ListComponent key={index} bulletList={challenge} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalContext;
