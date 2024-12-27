import React from 'react'
import ProjectCard from '../Components/Card'

function Projects() {
  const projects = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'LIC Connect',
      description: 'Streamlining Computer Access with an Automated Login System and Tracking',
      technologies: ['React', 'Django', 'SQL', 'Tkinter']
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project Two',
      description: 'Description for project two.',
      technologies: ['React', 'Node.js', 'Express']
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project Three',
      description: 'Description for project three.',
      technologies: ['Angular', 'Firebase']
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
        />
      ))}
    </div>
     
    </>
  )
}

export default Projects