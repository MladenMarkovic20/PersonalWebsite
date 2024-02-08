import { ProjectDetails } from '../interface/projectDetails';

export const projectsDescription: ProjectDetails[] = [
  {
    projectName: 'RPG SAGA – CONSOLE GAME',
    projectOverview: {
      description:
        'Console game build using NodeJS. The game involves characters with specific attributes such as HP (health points) and AP (attack points), and they engage in battles with each other.',
      scope: [
        'The project involves creating a console-based game where characters participate in a tournament.',
        'Character Attributes: Characters within the game are defined by their attributes, primarily HP and AP, which determine their resilience and offensive capabilities during battles.',
        'Battle Mechanics: The game implements a battle system, allowing characters to engage in combat with each other. This includes regular attacks, which inflict standard damage based on predefined factors, and special attacks, which introduce variability in damage output and may have unique effects.',
        'Game Logic: Implemented logic to manage character interactions, resolve battles, and update character stats based on the outcomes of combat scenarios.',
      ],
      objectives: [
        'Implement game logic utilizing Object-Oriented Programming (OOP) principles and adhering to SOLID design principles.',
        'Apply abstract classes and Interfaces to encapsulate common behavior and enforce consistent interfaces.',
        'Employ Getter and Setter methods to control access to class fields and ensure data encapsulation and modularity.',
      ],
      role: [
        'Developing the core game logic using Object-Oriented Programming (OOP) principles. This includes managing character interactions, resolving battles, and updating character stats based on combat outcomes.',
        'Ensure the codebase follows SOLID design principles, promoting maintainability and scalability. This involves structuring classes and methods in a way that enhances readability and facilitates future modifications.',
        'Apply abstract classes and interfaces to encapsulate common behavior among characters and enforce consistent interfaces. This ensures a modular and extensible architecture, allowing for easy addition of new features or character types.',
        "Implement Getter and Setter methods to control access to class fields, ensuring data encapsulation and modularity. This prevents unauthorized modification of critical game parameters and maintains the integrity of the game's internal state.",
        'Implementation of battle mechanics, including regular and special attacks. This involves defining factors that influence damage output and handling unique effects associated with special attacks, enhancing the depth and variability of gameplay.',
      ],
    },
    technologiesUsed: {
      technologies: [
        'TypeScript - A superset of JavaScript that adds static typing to the language.',
        'Node.js - A JavaScript runtime that allows you to execute JavaScript code server-side.',
      ],
      frameworks: [
        'Jest - A JavaScript testing framework for ensuring code reliability and quality.',
      ],
      tools: [
        'ESLint - Identifies and rectifies issues in JavaScript or TypeScript code, enhancing code consistency and adherence to best practices.',
        'Prettier - Enforces consistent code style by formatting code automatically, improving readability and maintainability.',
        'Prompt - Library that manage user input via the console, facilitating command-line interaction.',
        'Winston -A logging library tailored for Node.js applications, aiding in monitoring and debugging.',
      ],
    },
    challengesAndProblemSolving: [
      'TypeScript Integration and Learning Curve – Integrating TypeScript into the project and ensuring the team is comfortable with TypeScript.',
      'Console Input/Output Handling - Managing user input and output in a console-based game, especially when dealing with interactive prompts.',
      'Start game – When run code for the first time, the user can dynamically create heroes by either loading data from a file or generating random heroes based on user input (choosing the number of heroes).',
    ],
  },

  {
    projectName: 'E-COMMERCE PLATFORM: FULL-STACK WEB APPLICATION',
    projectOverview: {
      description:
        'I developed a comprehensive online store, encompassing a robust database, a server-side architecture, and an intuitive user interface. The primary goal of this project was to establish a seamless e-commerce platform where users could browse products, make purchases, and have a user-friendly experience throughout their interaction with the website.',
      scope: [
        'Established a database structure tailored to efficiently store and organize extensive product and category details.',
        'Developed a responsive server infrastructure capable of seamlessly managing user interactions from the front-end interface.',
        'Executed intricate algorithms to handle incoming requests, seamlessly interact with the database, and dynamically generate relevant responses in real-time.',
        'Engineered user-friendly functionalities including advanced product browsing options, seamless pagination mechanisms, and powerful search capabilities, ensuring an intuitive and efficient user experience.',
      ],
      objectives: [
        'Proficiently build user interfaces utilizing React, a prominent framework, through consistent practice and exploration.',
        'Develop proficiency in implementing robust server-side logic to handle request/response cycles effectively using NestJS.',
        'Employ TypeORM to interact seamlessly with the database, mastering Object-Relational Mapping (ORM) techniques for efficient data management.',
        'Demonstrate adeptness in server API testing by leveraging industry-standard tools such as Postman and Swagger to send HTTP requests and analyze responses accurately.',
      ],
      role: [
        'Design and build user interface, including home, products, categories, about and contact pages.',
        'Build CRUD operations for product entity and interaction with PostgreSQL database.',
        'Implementing TypeORM features for easier interaction and operations with DB.',
      ],
    },
    technologiesUsed: {
      technologies: [
        'TypeScript - Enhances JavaScript with static typing, aiding in catching errors early in development.',
        'Node.js - Executes JavaScript code on the server-side, facilitating backend development.',
      ],
      frameworks: [
        'React - Facilitates building user interfaces with reusable components and a virtual DOM.',
        'NestJS - Aids in building scalable and maintainable server-side applications using TypeScript.',
      ],
      tools: [
        'Axios - A promise-based HTTP client for making asynchronous requests.',
        'MobX - A state management library for React applications.',
        'React Router - A library for handling navigation in a React application.',
        'Emotion - A library for writing styles in JavaScript applications.',
        "Material-UI - A React UI framework that implements Google's Material Design.",
        'PostgreSQL (pg) - A relational database management system.',
        'TypeORM - Simplifies database operations with an Object-Relational Mapping (ORM) approach.',
        'Swagger - Facilitates API documentation and testing.',
        'Validator - Assists in data validation within the application',
      ],
    },
    challengesAndProblemSolving: [
      'User Interface Design and React Implementation - Utilized React components effectively to create a modular and maintainable UI.',
      "Server-Side Logic with NestJS - Leveraged NestJS's modular structure and dependency injection to organize code effectively. Implemented middleware for Logger, and error management. Utilized decorators and services for defining routes and business logic.",
      "ORM Framework (TypeORM) Integration - Integrated TypeORM for efficient interaction with the PostgreSQL database, including defining models, relationships, and performing CRUD operations. Followed TypeORM documentation thoroughly for model and entity definitions. Utilized migrations for versioning the database schema. Implemented efficient queries and utilized caching mechanisms to optimize database interactions. Conducted thorough testing of database interactions using TypeORM's testing utilities.",
      'API Testing with Postman and Swagger - Ensuring the correctness and reliability of server API endpoints through testing tools like Postman and Swagger.',
    ],
  },

  {
    projectName: 'Knowledge Base Visualization - Internal Company Project',
    projectOverview: {
      description:
        "Node.js application with a server-side component that interacts with the Confluence API to collect data from a company's account.",
      scope: [
        "Establish a seamless connection with the Confluence API, utilizing the company's token for secure authentication.",
        'Retrieve relevant data associated with Company internal and customer projects.',
        'Converting, validating, and persistently storing this data into a PostgreSQL database.',
      ],
      objectives: [
        "Establish a secure connection with the Confluence API using the company's token to ensure authentication and data integrity.",
        'Successfully retrieve relevant data pertaining to internal and customer projects from the Confluence API.',
        'Implement robust mechanisms to convert the retrieved data into appropriate formats and validate its accuracy and completeness before further processing.',
        'Develop functionality to persistently store the validated data into a PostgreSQL database, ensuring data integrity and efficient retrieval.',
      ],
      role: [
        "Develop and implement a secure connection with the Confluence API using the company's token for authentication, ensuring data integrity throughout the process.",
        'Retrieve pertinent data concerning internal and customer projects from the Confluence API efficiently and accurately.',
        'Design and deploy robust mechanisms to convert, validate, and ensure the completeness and accuracy of the retrieved data.',
        'Create functionality to persistently store validated data into a PostgreSQL database, prioritizing data integrity and enabling efficient retrieval for future use.',
      ],
    },
    technologiesUsed: {
      technologies: [
        'TypeScript - A superset of JavaScript that adds static typing, enhancing code quality and developer productivity.',
        'Node.js - A runtime environment that executes JavaScript code outside of a web browser, commonly used for server-side applications.',
      ],
      frameworks: [
        'Sequelize - An ORM (Object-Relational Mapping) library for Node.js, simplifying database interactions by mapping objects to database tables.',
      ],
      tools: [
        'Axios - A promise-based HTTP client for the browser and Node.js, simplifying asynchronous HTTP requests.',
        'Dotenv -  A module that loads environment variables from a .env file into process.env, making it easy to manage configuration settings.',
        'Nodemon - A utility that monitors for changes in Node.js applications and automatically restarts the server, improving development workflow efficiency.',
      ],
    },
    challengesAndProblemSolving: [
      'Efficiently handling pagination and large datasets from the API.',
      'Designing and implementing conversion procedures for raw API data.',
      'Applying validation checks to ensure data integrity and accuracy.',
      'Establishing a connection with the PostgreSQL database using Sequelize.',
      'Developing database schemas for 15 interconnected tables.',
      'Implementing mechanisms for storing and retrieving data from the database.',
      'Capturing and storing historical changes in project-related information.',
      'Designing the system for periodic data synchronization.',
      'Optimizing data retrieval and processing workflows for efficiency and performance.',
    ],
  },

  {
    projectName: 'PROSLAVI SA NAMA – CLIENT PROJECT',
    projectOverview: {
      description:
        'This platform will empower users to seamlessly upload and peruse images associated with specific events. Our goal is to create a user-friendly interface that enhances the overall event experience by facilitating easy sharing and viewing of event-related images. Through meticulous design and robust functionality, I aim to deliver a comprehensive solution that meets the diverse needs of event organizers and attendees alike.',
      scope: [
        'Creation of a main page providing users with contact form options for seamless communication.',
        'Implementation of QR code generation functionality to facilitate easy access to new events.',
        'Development of an intuitive admin page enabling efficient management and creation of events.',
        'Creation of a secure login page specifically designed for admin access.',
        'Design and implementation of a scalable backend system capable of handling event and image data with CRUD (Create, Read, Update, Delete) operations.',
        'Enforcement of restrictions on image uploads to ensure they are limited to the designated event time frame.',
        'Integration of mechanisms for validating image formats, sizes, storage, and retrieval to maintain data integrity and system efficiency.',
      ],
      objectives: [
        'Develop a main page featuring contact form options to facilitate user interaction and inquiries.',
        'Implement functionality to dynamically generate QR codes for each new event created within the system.',
        'Design and develop an administrative interface dedicated to efficiently managing and creating events.',
        'Create a secure login page specifically tailored for administrative access, ensuring authorized entry to the system.',
        'Architect and implement a robust backend system capable of handling event and image data, supporting CRUD (Create, Read, Update, Delete) operations seamlessly.',
        'Enforce restrictions on image uploads, allowing them only within the specified timeframe of corresponding events, ensuring data integrity and relevance.',
        'Establish comprehensive validation mechanisms for uploaded images, encompassing format, size, storage, and retrieval aspects to maintain system efficiency and data consistency.',
      ],
      role: [
        'Development of a user-friendly main page with contact form options, facilitating seamless communication for users.',
        'Spearhead the implementation of QR code generation functionality, streamlining access to new events for users.',
        'Drive the design and development of an intuitive admin page, enabling efficient management and creation of events.',
        'Establish a secure login page tailored for admin access, ensuring authorized entry to the system.',
        'Architect and implement a scalable backend system capable of handling event and image data with CRUD operations, while enforcing restrictions on image uploads for data integrity and system efficiency.',
      ],
    },
    technologiesUsed: {
      technologies: [
        'TypeScript - A superset of JavaScript that adds static typing, making code more predictable and scalable.',
        'Node.js - Node.js: A runtime environment that executes JavaScript code outside of a web browser, commonly used for building server-side applications.',
      ],
      frameworks: [
        'Express.js - A minimal and flexible Node.js web application framework used for building APIs and web applications.',
        'TypeORM - An Object-Relational Mapping (ORM) library for TypeScript and JavaScript, simplifying database interactions by mapping database entities to JavaScript objects.',
        'Next.js - A React framework for building server-side rendered and statically generated web applications.',
      ],
      tools: [
        'Dotenv - A zero-dependency module that loads environment variables from a .env file into process.env, commonly used for managing configuration settings.',
        'Nodemon - A tool that monitors for changes in Node.js applications and automatically restarts the server.',
        'React Hook Form - A library for managing form state and validation in React applications using React hooks.',
        'Next-Auth -  An authentication library for Next.js applications, providing easy-to-use authentication methods.',
        'Tailwind CSS - A utility-first CSS framework for quickly building custom designs without having to write custom CSS.',
      ],
    },
    challengesAndProblemSolving: [
      'Creating a main page with contact form and social media platforms.',
      'Developing a user interface for event creation, management, and login.',
      'Implementing image upload functionality with validation.',
      'Storing images locally on the server and maintaining references in the database.',
      'Optimizing backend code for performance.',
    ],
  },
];
