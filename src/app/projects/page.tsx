// Usage in a page or another component
import ProjectComponent from '../../components/Project';

const techStack = [
  { name: 'Javascript', logo: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
  { name: 'GO', logo: 'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white' },
  { name: 'Vue.js', logo: 'https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D'},
  { name: 'Vite', logo: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white'},
  { name: 'Docker', logo: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'},
  { name: 'Tailwind', logo: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'}
];

const projectDetails = `
This is an organization tool for tracking applications and managing documents. I built the frontend in Vue.js and backend in GO.
Some notable features include Google OAuth as the login feature, session managment, and integration with .csv files for easy
transition between excel and using the app. Currently still in the testing phase.
`;

const CLearnStack = [
    { name: 'C', logo: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white'},
    { name: 'C++', logo: 'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'}
]

const clearnDetail = `
A collection of projects where I key programming concepts from scratch in C and/or C++, including allocators (malloc/calloc/realloc/free), 
a simple unix shell, redis, and more.
`

const codeForgeTechStack = [
  { name: 'Javascript', logo: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
  { name: 'React.js', logo: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'},
  { name: 'Node.js', logo: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'},
  { name: 'Express.js', logo: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'},
  { name: 'PostgreSQL', logo: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'},
  { name: 'Webpack', logo: 'https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black'},
];

const codeFrogeAbout = `
A learning website where users can upload coding resources, tutorials, etc.`

const MyProjectsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ProjectComponent
        title="SE Hub"
        githubLink="https://github.com/thejohnny5/se_organization"
        techStack={techStack}
        details={projectDetails}
      />
      <ProjectComponent 
        title="CLearn"
        githubLink="https://github.com/thejohnny5/clearn"
        techStack={CLearnStack}
        details={clearnDetail}
      />
      <ProjectComponent
        title="CodeForge"
        githubLink=""
        techStack={codeForgeTechStack}
        details={codeFrogeAbout}
      />
    </div>
  );
};

export default MyProjectsPage;
