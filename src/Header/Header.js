import React from 'react';
import './Header.scss';

const Header = () => {
  return ( 
    <header>
      <a href="/about">About</a>
      <a href='/projects'>Projects</a>
      <a href='/resume'>Resume</a>
    </header>
  );
}
 
export default Header;