import React from 'react';
import ProjectCard from '../Components/Card';  // Using relative import

const Projects = () => {
  const projects = [
    {
      title: 'LIC Connect',
      description: 'A web application and a GUI application streamlining computer access with an automated login system and tracking.',
      techStack: ['React.js', 'Django', 'Python', 'MySQL'],
      link: 'https://github.com/annejenel/LIC'
    },
    {
      title: 'TransLens',
      description: 'An app that uses OCR and NLP to capture text from images, extract it, and translate it into a target language.',
      techStack: ['Python'],
      link: 'https://github.com/shadycodee/TransLens'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="h-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;