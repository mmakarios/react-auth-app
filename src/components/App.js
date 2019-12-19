/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import NotFoundPage from './NotFoundPage';
import * as routes from '../constants/routes';
import PrivateRoute from './PrivateRoute';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path={routes.HOME_PAGE} component={HomePage} />
        <Route exact path={routes.LOGIN_PAGE} component={LoginPage} />
        <Route exact path={routes.SIGNUP_PAGE} component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default hot(module)(App);
