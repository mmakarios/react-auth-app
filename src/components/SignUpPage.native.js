import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { postSignUp } from '../reducers/signUpReducer';
import { View, Button, Text, TextInput } from 'react-native';
import { LOGIN_SCREEN } from '../constants/screens';

class SignUpPage extends Component {
  static propTypes = {
    postSignUp: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    madeSignUp: PropTypes.bool.isRequired,
  };

  componentDidUpdate() {
    const { madeSignUp, navigation } = this.props;

    if (madeSignUp) {
      navigation.navigate('Login');
    }
  }

  render() {
    const { postSignUp, navigation } = this.props;
    return (
      <View>
        <Text>Sign up screen</Text>
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

              <Text>Confirm password:</Text>
              <TextInput
                secureTextEntry
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              <Text style={{ fontSize: 10, color: 'red' }}>
                {touched.confirmPassword && errors.confirmPassword}
              </Text>

              <Button title="Sign up" onPress={handleSubmit}></Button>
              <Button
                title="Cancel"
                onPress={() => navigation.navigate(LOGIN_SCREEN)}
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
