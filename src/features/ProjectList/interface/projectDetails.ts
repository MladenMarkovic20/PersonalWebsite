export interface ProjectDetails {
  projectName: string;
  projectOverview: {
    description: string;
    scope: string[];
    objectives: string[];
    role: string[];
  };
  technologiesUsed: {
    technologies: string[];
    frameworks: string[];
    tools: string[];
  };
  challengesAndProblemSolving: string[];
}
