// components/ProjectComponent.js
import Image from 'next/image';
import Link from 'next/link';

interface TechStack {
  name: string;
  logo: string;
}
interface ProjectProp {
  title: string;
  githubLink: string;
  techStack: TechStack[];
  details: string;
}

const ProjectComponent = ({ title, githubLink, techStack, details }: ProjectProp) => {
  return (

    <div className="border border-gray-200 shadow-lg rounded-lg p-5 space-y-4 m-4 hover:bg-slate-700 transition duration-300">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">

      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex space-x-2">
          {techStack.map((tech) => (
             <div key={tech.name} className="flex items-center h-6"> {/* Fixed height container */}
             <img 
               src={tech.logo} 
               alt={tech.name} 
               className="h-full w-auto" // Height 100% of the container, width auto
             />
           </div>
          ))}
        </div>
      <div className="flex justify-between items-center">
         
      
      </div>
      <p className="hover:text-white">{details}</p>
    </a>

    </div>
  );
};

export default ProjectComponent;