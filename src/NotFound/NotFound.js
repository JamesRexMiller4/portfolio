import React from 'react';
import './NotFound.scss';
import Header from '../Header/Header';  

const NotFound = () => {
  return ( 
    <main>
      <Header />
      <section className="not-found">
        <h2>404</h2>
        <h4>under construction, come back soon</h4>
      </section>
    </main>
  );
}

export default NotFound;