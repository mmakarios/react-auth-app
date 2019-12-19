import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { postSignUp } from '../reducers/signUpReducer';
import * as routes from '../constants/routes';

class SignUpPage extends Component {
  static propTypes = {
    postSignUp: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    madeSignUp: PropTypes.bool.isRequired,
  };

  componentDidUpdate() {
    const { madeSignUp, history } = this.props;

    if (madeSignUp) {
      history.replace(routes.LOGIN_PAGE);
    }
  }

  render() {
    const { postSignUp, history } = this.props;
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
              <button
                type="button"
                onClick={() => history.push(routes.LOGIN_PAGE)}
              >
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
    madeSignUp: state.signUp.madeSignUp,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postSignUp: bindActionCreators(postSignUp, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
