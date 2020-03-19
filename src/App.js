import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <main>
      <Switch>
        <Route path={'/'} render={() => <Header />} />
        <Route component={() => <NotFound />} />
      </Switch>
    </main>
  );
}

export default App;
