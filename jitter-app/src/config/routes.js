import { Switch, Route } from 'react-router-dom';
import React from 'react';

import LoginPage from '../pages/users/LoginPage';
import RegisterPage from '../pages/users/RegisterPage';
import ProfilePage from '../pages/users/ProfilePage';
import MainContainer from '../container/MainContainer';

function Routes({ token, setToken }) {
  console.log(token)
  return (
    <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route path='/register' component={RegisterPage} />
      <Route
        path='/login'
        component={() => <LoginPage setToken={setToken} token={token} />}
      />
      <Route path='/profile' component={ProfilePage} token={token} />

    </Switch>
  );
}

export default Routes;
