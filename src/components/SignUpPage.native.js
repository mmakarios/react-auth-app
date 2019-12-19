import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  Header,
  Content,
  Text,
  Title,
  Button,
  Body,
  Input,
  Label,
  Item,
  Form,
  Left,
  Right,
} from 'native-base';

import { postSignUp } from '../reducers/signUpReducer';
import { View } from 'react-native';
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
      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Title>Sign up screen</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
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
                <Form>
                  <Item stackedLabel>
                    <Label>Username</Label>
                    <Input
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                    />
                  </Item>
                  <Text style={{ fontSize: 14, color: 'red' }}>
                    {touched.username && errors.username}
                  </Text>
                  <Item stackedLabel>
                    <Label>Password</Label>
                    <Input
                      secureTextEntry
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                  </Item>
                  <Text style={{ fontSize: 14, color: 'red' }}>
                    {touched.password && errors.password}
                  </Text>

                  <Item stackedLabel>
                    <Label>Confirm password:</Label>
                    <Input
                      secureTextEntry
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                    />
                  </Item>
                  <Text style={{ fontSize: 14, color: 'red' }}>
                    {touched.confirmPassword && errors.confirmPassword}
                  </Text>
                </Form>

                <Button onPress={handleSubmit}>
                  <Text>Sign up</Text>
                </Button>
                <Button onPress={() => navigation.navigate(LOGIN_SCREEN)}>
                  <Text>Cancel</Text>
                </Button>
              </View>
            )}
          </Formik>
        </Content>
      </Container>
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
