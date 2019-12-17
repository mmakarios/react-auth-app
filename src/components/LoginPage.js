import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { postLogin } from '../reducers/loginReducer';
import { push } from 'connected-react-router';
import * as routes from '../constants/routes';

class LoginPage extends Component {
  static propTypes = {
    postLogin: PropTypes.func,
    push: PropTypes.func,
    isFetching: PropTypes.bool,
    error: PropTypes.bool.isRequired,
  };

  render() {
    const { push } = this.props;
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
              this.props.postLogin(values);
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
              <button type="button" onClick={() => push(routes.SIGNUP_PAGE)}>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: bindActionCreators(postLogin, dispatch),
    push: bindActionCreators(push, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
