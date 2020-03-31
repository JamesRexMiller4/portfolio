import React, { useRef } from 'react';
import './ProjectCard.scss';
import condensateDash from '../images/condensate-dash.png';
// import condensateGif from '../images/condensate-gif.gif';

const ProjectCard = (props) => {
  const titleDivRef = useRef(null);

  const mouseMove = () => {
    const width = titleDivRef.current.clientWidth;
    const height = titleDivRef.current.clientHeight;
    console.log(width, height);
  }
  return ( 
    <section className='project-card-section'>
      <div className='left-half-project-card-div'>
        <div className='titleDiv' onMouseMove={mouseMove} ref={titleDivRef}>
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
        {/* <img src={condensateDash} alt='condensate-dashboard'/> */}
        <div className='image-gif-div'></div>
      </div>

    </section>
  );
}

export default ProjectCard;