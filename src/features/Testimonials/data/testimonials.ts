export interface Testimonial {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Iva Tenšek',
    jobTitle: 'Software Development Engineer - Valere Margins d.o.o.',
    description:
      'I worked with Mladen on a Node.js project and found him to be a reliable professional with strong TypeScript skills.',
    image: '/assets/colleagues/Iva Tesnek.jpeg',
  },
  {
    name: 'Kirill Ostapenko',
    jobTitle: 'Project Manager/Team Lead - Akvelon, Inc.',
    description:
      'Highly recommend Mladen Marković for Fullstack Software Developer Engineer position. Proficient in Typescript, C#, React, and strong communication skills.',
    image: '/assets/colleagues/Kirill Ostapenko.jpeg',
  },
  {
    name: 'Denis Nosov',
    jobTitle: 'CPO, Agile PM Fintech',
    description:
      'I collaborated with Mladen on a project, where he played a crucial role in backend development, with impressive expertise in Node.js.',
    image: '/assets/colleagues/Denis Nosov.jpeg',
  },
];
