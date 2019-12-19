import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../constants/routes';

class PrivateRoute extends Component {
  render() {
    const { ownProps, isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return <Redirect to={routes.LOGIN_PAGE} />;
    }
    return <Route {...ownProps} />;
  }
}

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  ownProps: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.login.isLoggedIn,
  ownProps,
});

export default connect(mapStateToProps)(PrivateRoute);
