import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <Switch>
      <Route path={'/home'} render={() => <Home />} />
      <Route component={() => <NotFound />} />
    </Switch>
  );
}

export default App;
