import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import About from './About/About';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

function App() {
  return (
    <body>
    <Header />
    <Switch>
      <Route exact path={'/'} render={() => <Home />} />
      <Route path={'/about'} render={() => <About />} />
      <Route path={'/projects'} render={() => <Projects />} />
      <Route path={'/resume'} render={() => <Resume />} />
      <Route component={() => <NotFound />} />
    </Switch>
    </body>
  );
}

export default App;
