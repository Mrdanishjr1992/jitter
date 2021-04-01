import { Switch, Route } from 'react-router-dom';
import React from 'react';

import MainContainer from '../container/MainContainer';
import Profile from '../pages/profile/Profile';

function Routes({ token, setToken }) {
  return (
    <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route path='/profile' component={Profile} />
    </Switch>
  );
}

export default Routes;
