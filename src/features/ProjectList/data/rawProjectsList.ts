import { ProjectData } from '../interface/projectData';

export const projects: ProjectData[] = [
  {
    title: 'RPG Saga Console game',
    description:
      'Project testing for the bootcamp focused on implementing object-oriented programming (OOP), SOLID principles, and GIT. The task involved developing a console game emulator application using JavaScript/TypeScript and supported by Node.js. The application included sophisticated game mechanics and rules derived from randomly-generated or user-defined input.',
    hashtags: ['OOP', 'SOLID', 'NodeJS'],
    link: 'https://github.com/MladenMarkovic20/RPGSaga-Console-Game',
    image: '/assets/games/rpg-saga.jpg',
    type: 'internal',
  },
  {
    title: 'E-commerce Platform',
    description:
      'The Online Shop testing project, a component of the bootcamp, was a client-server application created to facilitate user browsing, searching, and purchasing of products. It involved a backend built with Node and NestJS, as well as a frontend component developed using ReactJS.',
    hashtags: ['FullStack APP', 'React', 'NodeJS'],
    link: 'https://github.com/MladenMarkovic20/OnlineShop',
    image: '/assets/games/online-shop.jpg',
    type: 'internal',
  },
  {
    title: 'Internal Company project',
    description:
      "Due to confidentiality and legal agreements, I'm unable to showcase code from internal projects on this portfolio. I appreciate your understanding in respecting the sensitive nature of proprietary information.",
    hashtags: ['Confluence', 'API', 'NodeJS'],
    link: 'https://example.com/project3',
    image: '/assets/games/internal-project.jpg',
    type: 'client',
  },
  {
    title: 'Proslavi Sa Nama',
    description:
      'Proslavi sa nama – the ultimate solution for effortlessly curating and streaming memorable moments from your events in real-time. My user-friendly app simplifies photo and video collection, creating a digital album that captures the essence of your celebrations and have ability to share easy, just with web link.',
    hashtags: ['FullStack APP', 'NextJS', 'NodeJS'],
    link: 'https://example.com/project5',
    image: '/assets/games/proslavi-sa-nama.jpg',
    type: 'client',
  },
];
