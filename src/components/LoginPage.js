import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { postLogin } from '../reducers/loginReducer';
import * as routes from '../constants/routes';

class LoginPage extends Component {
  static propTypes = {
    postLogin: PropTypes.func,
    history: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
    error: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool,
  };

  componentDidUpdate() {
    const { isLoggedIn, history } = this.props;

    if (isLoggedIn) {
      history.replace(routes.HOME_PAGE);
    }
  }

  render() {
    const { postLogin, history } = this.props;

    return (
      <div>
        <div>
          <h1>Login</h1>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
              username: Yup.string().required('Please type your username.'),
              password: Yup.string().required('Please type your password.'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              postLogin(values);
            }}
          >
            <Form>
              <div>
                <label htmlFor="username">Username:</label>
                <br />
                <Field name="username" type="text" />
                <br />
                <ErrorMessage name="username" />
                <br />
                <br />
                <label>Password:</label>
                <br />
                <Field name="password" type="password" />
                <br />
                <ErrorMessage name="password" />
              </div>
              <br />
              <button type="submit">Log in</button>
              <button
                type="button"
                onClick={() => history.push(routes.SIGNUP_PAGE)}
              >
                Sign up
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.login.isFetching,
    error: state.login.error,
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: bindActionCreators(postLogin, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
