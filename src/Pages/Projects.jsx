import React from 'react';
import ProjectCard from '../Components/Card';
import { Grid2 } from '@mui/material';


function Projects() {
  const projects = [
    {
      title: 'LIC Connect',
      description: 'A web application and a GUI application streamlining computer access with an automated login system and tracking.',
      techStack: ['reactjs', 'django', 'python', 'mysql'],
      link: 'https://github.com/annejenel/LIC'
    },
    {
      title: 'TransLens',
      description: 'An app that uses OCR and NLP to capture text from images, extract it, and translate it into a target language.',
      techStack: ['python'],
      link: 'https://github.com/shadycodee/TransLens'}
  ];

  return (
    <>
    <div style={{justifyContent: 'center', display: 'flex'}}>
    <Grid2 container direction="row" spacing={2} alignItems="center">
        {projects.map((project, index) => (
          <Grid2 item key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          </Grid2>
        ))}
      </Grid2>
    </div>
    
      {/* <h4 style={{fontSize: '30px', textAlign: 'center', color: 'white'}}>One project for now, still under construction!...</h4> */}
   
     
    </>
  )
}

export default Projects