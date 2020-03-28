import React from 'react';
import './Resume.scss';
import resume from '../images/resume-photo.png';
import resumePDF from '../images/JAMES-R-MILLER-IV-Resume.pdf';

const Resume = () => {
  return ( 
    <main className='resume-main'>
      <img src={resume} alt='resume'/>
      <a className='download-link' href={resumePDF} download>DOWNLOAD PDF</a>
    </main>
  );
}

export default Resume;