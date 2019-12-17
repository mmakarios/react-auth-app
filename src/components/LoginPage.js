import { connect } from 'react-redux';
import { postLogin } from '../reducers/loginReducer';
import { bindActionCreators } from 'redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './LoginPage.scss';
// import PasswordInput from '../shared/input/PasswordInput';
// import EmailInput from '../shared/input/EmailInput';
// import Button from '../shared/Button';
// import * as routes from '../../constants/routesNames';

class LoginPage extends Component {
  static propTypes = {
    postLogin: PropTypes.func,
    isFetching: PropTypes.bool,
    error: PropTypes.bool.isRequired,
    user: PropTypes.object,
  };

  render() {
    // const { isFetching, error } = this.props;
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
              <input type="button" value="Sign up" />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
