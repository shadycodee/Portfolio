import React from 'react';
import { Github } from "lucide-react";

const TechBadge = ({ name }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
    {name}
  </span>
);

const ProjectCard = ({ title, description, techStack = [], link }) => {
  return (
    <div className="h-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      
      <div className="p-4 flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium px-3 py-2 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Github className="h-4 w-4 mr-2" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;