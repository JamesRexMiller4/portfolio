import React from 'react';
import './Resume.scss';
import resume from '../images/resume-photo.png';

const Resume = () => {
  return ( 
    <main className='resume-main'>
      <img src={resume} alt='resume'/>
    </main>
  );
}

export default Resume;