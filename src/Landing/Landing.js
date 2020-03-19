import React from 'react';
import './Landing.scss';
import Header from '../Header/Header';

const Landing = () => {
  return ( 
    <main>
      <Header />
      <section className='landing-section'>
        <div className='div-message'>
          <h2>WELCOME</h2>
          <h3>TO JAMES REX MILLER IV's PERSONAL SITE</h3>
        </div>
        <div className='div-colored'>
          <div className='baby-yoda'>
            <div id="y-body">
            <div id="y-head">
            <div id="left-eye"></div>
            <div id="right-eye"></div>
            <div id="mouth"></div>
            <div id="left-ear"></div>
            <div id="right-ear"></div>
            </div>
            <div id="cup">
              <div id="steam">~</div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;