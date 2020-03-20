import React from 'react';
import BabyYoda from '../BabyYoda/BabyYoda';
import './Landing.scss';

const Landing = () => {
  return (
    <main>
      <section className='landing-section'>
        <div className='div-message'>
          <h2>WELCOME</h2>
          <h3>TO JAMES REX MILLER IV's PERSONAL SITE</h3>
        </div>
        <div className='div-colored'>
          <BabyYoda/>
        </div>
      </section>
    </main>
  );
}

export default Landing;