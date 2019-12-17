import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { postSignUp } from '../reducers/signUpReducer';
import { push } from 'connected-react-router';
import * as routes from '../constants/routes';

class SignUpPage extends Component {
  static propTypes = {
    postSignUp: PropTypes.func,
    push: PropTypes.func,
    isFetching: PropTypes.bool,
    error: PropTypes.bool.isRequired,
    user: PropTypes.object,
  };

  render() {
    const { postSignUp, push } = this.props;
    return (
      <div>
        <div>
          <h1>Sign Up</h1>
          <Formik
            initialValues={{ username: '', password: '', confirmPassword: '' }}
            validationSchema={Yup.object({
              username: Yup.string().required('Please type your username.'),
              password: Yup.string().required('Please type your password.'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Please confirm your password.'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              postSignUp(values);
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
                <br />
                <br />
                <label>Confirm password:</label>
                <br />
                <Field name="confirmPassword" type="password" />
                <br />
                <ErrorMessage name="confirmPassword" />
              </div>
              <br />
              <button type="submit">Sign up</button>
              <button type="button" onClick={() => push(routes.LOGIN_PAGE)}>
                Cancel
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
    isFetching: state.signUp.isFetching,
    error: state.signUp.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postSignUp: bindActionCreators(postSignUp, dispatch),
    push: bindActionCreators(push, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
