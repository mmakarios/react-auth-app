/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ExamplePage from './ExamplePage';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import * as routes from '../constants/routes';
import LoginPage from './LoginPage';

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
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route exact path={routes.LOGIN_PAGE} component={LoginPage} />
          <Route exact path={routes.SIGNUP_PAGE} component={ExamplePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
