import React from 'react';
import ProjectCard from '../Components/Card';
import project1 from '../assets/project1.png';

function Projects() {
  const projects = [
    {
      image: project1,
      title: 'LIC Connect',
      description: 'Streamlining Computer Access with an Automated Login System and Tracking',
      technologies: ['React', 'Django', 'SQL', 'Tkinter'],
      githubLink: 'https://github.com/annejenel/LIC'
    }
  ];

  return (
    <>
    <div style={{ marginLeft: '10%', marginRight: '10%', marginTop: '50px'}}>
    {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          githubLink={project.githubLink}
        />
      ))}
      <h4 style={{fontSize: '30px', textAlign: 'center', color: 'white'}}>One project for now, but more are on the way!...</h4>
    </div>
     
    </>
  )
}

export default Projects