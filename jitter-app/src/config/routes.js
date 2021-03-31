import { Switch, Route } from 'react-router-dom';
import React from 'react';

import MainContainer from '../container/MainContainer';

function Routes({ token, setToken }) {
  return (
    <Switch>
      <Route exact path='/' component={MainContainer} />
    </Switch>
  );
}

export default Routes;
