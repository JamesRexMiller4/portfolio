import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Landing from './Landing/Landing';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Landing />} />
      <Route path={'/home'} render={() => <Home />} />
      <Route component={() => <NotFound />} />
    </Switch>
  );
}

export default App;
