/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
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
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to={routes.HOME_PAGE} activeStyle={activeStyle}>
            Home
          </NavLink>
          {' | '}
          <NavLink to={routes.LOGIN_PAGE} activeStyle={activeStyle}>
            Login
          </NavLink>
          {' | '}
          <NavLink to={routes.SIGNUP_PAGE} activeStyle={activeStyle}>
            Sign up
          </NavLink>
          {' | '}
          <NavLink to={routes.NOT_FOUND_PAGE} activeStyle={activeStyle}>
            404
          </NavLink>
        </div>
        <Switch>
          <PrivateRoute exact path={routes.HOME_PAGE} component={HomePage} />
          <Route exact path={routes.LOGIN_PAGE} component={LoginPage} />
          <Route exact path={routes.SIGNUP_PAGE} component={SignUpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
