import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { postLogin } from '../reducers/loginReducer';
import { View, Button, Text, TextInput } from 'react-native';
import { SIGN_UP_SCREEN } from '../constants/screens';

class LoginPage extends Component {
  static propTypes = {
    postLogin: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  componentDidUpdate() {
    const { isLoggedIn, navigation } = this.props;
    if (isLoggedIn) {
      navigation.navigate('App');
    }
  }

  render() {
    const { postLogin, navigation } = this.props;

    return (
      <View>
        <Text>Login screen</Text>
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
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View>
              <Text>Username:</Text>
              <TextInput
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <Text style={{ fontSize: 10, color: 'red' }}>
                {touched.username && errors.username}
              </Text>

              <Text>Password:</Text>
              <TextInput
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Text style={{ fontSize: 10, color: 'red' }}>
                {touched.password && errors.password}
              </Text>

              <Button title="Login" onPress={handleSubmit}></Button>
              <Button
                title="Sign up"
                onPress={() => navigation.push(SIGN_UP_SCREEN)}
              ></Button>
            </View>
          )}
        </Formik>
      </View>
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
