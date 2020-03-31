import React from 'react';
import './Projects.scss';
import projectsData from './projectsData';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  let projects = projectsData.map(project => <ProjectCard {...project} />)
  return ( 
    <main>
      {projects}
    </main>
  );
}

export default Projects;