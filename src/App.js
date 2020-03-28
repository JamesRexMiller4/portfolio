import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import About from './About/About';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <body>
    <Header />
    <Switch>
      <Route exact path={'/'} render={() => <Home />} />
      <Route path={'/about'} render={() => <About />} />
      <Route component={() => <NotFound />} />
    </Switch>
    </body>
  );
}

export default App;
