import React, { useState, useRef } from 'react';
import './ProjectCard.scss';

const ProjectCard = (props) => {
  const titleDivRef = useRef(null);
  const [coordinates, setCoordinates] = useState({x: 0, y: 0})
  let maskStyles = {
    '--maskX': coordinates.x,
    '--maskY': coordinates.y
  }

  const mouseMove = (e) => {
    const width = titleDivRef.current.clientWidth;
    const height = titleDivRef.current.clientHeight;
    const offX = (e.nativeEvent.offsetX / width) * 100;
    const offY = (e.nativeEvent.offsetY / height) * 100;
    setCoordinates({x: offX, y: offY})
  }

  return ( 
    <section className='project-card-section'>
      <div className='left-half-project-card-div' onMouseMove={mouseMove} ref={titleDivRef} style={maskStyles}>
        <div className='titleDiv'>
          <div className='title-wrapper-div'>
            <h2>{props.title1}</h2>
            <div className='title2-div'>
              <div className='div-divider'></div>
              <h2>{props.title2}</h2>
            </div>
          </div>
          <div className='clone title-wrapper-div'>
            <h2>{props.title1}</h2>
            <div className='clone-title2-div'>
              <div className='clone-divider div-divider'></div>
              <h2>{props.title2}</h2>
            </div>
          </div>
        </div>
        <div className='summary-div'>
          <p>{props.description}</p>
        </div>
      </div>
      <div className='right-half-project-card-div'>
        <div className='image-gif-div'></div>
      </div>
    </section>
  );
}

export default ProjectCard;