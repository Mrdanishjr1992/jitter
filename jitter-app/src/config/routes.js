import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Homepage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';

function Routes({ token, setToken }) {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Homepage} />
    </Switch>
  );
}

export default Routes;
