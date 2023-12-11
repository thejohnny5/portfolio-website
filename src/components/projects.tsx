// Usage in a page or another component
import ProjectComponent from './Project';

const techStack = [
  { name: 'GO', logo: 'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white' },
  { name: 'Vue.js', logo: 'https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D'},
  { name: 'Javascript', logo: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
  { name: 'Docker', logo: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'},
  { name: 'PostgreSQL', logo: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'},
  { name: 'Tailwind', logo: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'},
  { name: 'Vite', logo: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white'},

];

const projectDetails = `
This is an organization tool for tracking applications and managing documents. I built the frontend in Vue.js and backend in GO.
Some notable features include Google OAuth as the login feature, session managment, and integration with .csv files for easy
transition between excel and using the app. Currently still in the testing phase.
`;

const challengeTechstack = [
    { name: 'C', logo: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white'},
    { name: 'C++', logo: 'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'}
]

const challenges = `
A collection of projects where I build tools from scratch in C/C++. Such as wc, cut, a file compressor using 
a HuffmanTree, and more.
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

const codeBotTechStack = [
  { name: 'Typescript', logo: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'},
  { name: 'React.js', logo: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'},
  { name: 'Node.js', logo: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'},
  { name: 'Express.js', logo: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'},
  { name: 'PostgreSQL', logo: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'},
  { name: 'Webpack', logo: 'https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black'},
];

const codeBotBlurb = `
Just a fun little project using LangChain to create a ChatBot with memory. For the app, used GPT-3.5 and stored conversation history
with context pertanent to coding.`

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
        title="Challenges"
        githubLink="https://github.com/thejohnny5/Challenges"
        techStack={challengeTechstack}
        details={challenges}
      />
      <ProjectComponent
        title="CodeForge"
        githubLink="https://github.com/StabRabbitdoesCodeforge/codeforge"
        techStack={codeForgeTechStack}
        details={codeFrogeAbout}
      />
      <ProjectComponent
        title="ChatBot"
        githubLink="https://github.com/the-coding-solution/code-bot/tree/dev"
        techStack={codeBotTechStack}
        details={codeBotBlurb}
        />
    </div>
  );
};

export default MyProjectsPage;
