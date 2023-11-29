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
    <div className="border border-gray-200 shadow-lg rounded-lg p-5 space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex space-x-2">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center">
              <Image src={tech.logo} alt={tech.name} width={96} height={48} />
            </div>
          ))}
        </div>
      <div className="flex justify-between items-center">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">
          View on GitHub
        </a>
      
      </div>
      <p className="text-gray-600">{details}</p>
    </div>
  );
};

export default ProjectComponent;