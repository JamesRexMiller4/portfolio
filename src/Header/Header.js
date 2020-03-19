import React from 'react';
import './Header.scss';
import logo from '../images/tyrannosaurus-rex.svg';

const Header = () => {
  return ( 
    <header>
      <img src={logo} alt='t-rex skull'/>
      <nav>
        <a href="/about">About</a>
        <a href='/projects'>Projects</a>
        <a href='/resume'>Resume</a>
      </nav>
    </header>
  );
}

export default Header;