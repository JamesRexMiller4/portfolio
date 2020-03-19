import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../images/tyrannosaurus-rex.svg';

const Header = () => {
  return ( 
    <header>
      <Link to={'/home'}><img src={logo} alt='t-rex skull'/></Link>
      <nav>
        <Link to={'/about'}><a href="/about">About</a></Link>
        <Link to={'/projects'}><a href='/projects'>Projects</a></Link>
        <Link to={'/resume'}><a href='/resume'>Resume</a></Link>
      </nav>
    </header>
  );
}

export default Header;