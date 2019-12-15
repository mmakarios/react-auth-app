/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ExamplePage from './ExamplePage';
import FooPage from './containers/FooPage';
import BarPage from './containers/BarPage';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>
            App Web
          </NavLink>
          {' | '}
          <NavLink to="/example" activeStyle={activeStyle}>
            Example
          </NavLink>
          {' | '}
          <NavLink to="/foo" activeStyle={activeStyle}>
            Foo
          </NavLink>
          {' | '}
          <NavLink to="/bar" activeStyle={activeStyle}>
            Bar
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/example" component={ExamplePage} />
          <Route path="/foo" component={FooPage} />
          <Route path="/bar" component={BarPage} />
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
