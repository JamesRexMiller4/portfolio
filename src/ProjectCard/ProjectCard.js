import React from 'react';
import './ProjectCard.scss';

const ProjectCard = (props) => {
  return ( 
    <section className='project-card-section'>
      <div className='left-half-project-card-div'>
        <div className='title-div'>
          <h2>{props.title}</h2>
          <div>Divider</div>
        </div>
        <div className='summary-div'>
          <p>{props.summary}</p>
        </div>
      </div>
      <div className='right-half-project-card-div'>
        <iframe title={props.title} src={props.url}></iframe>
      </div>

    </section>
  );
}

export default ProjectCard;