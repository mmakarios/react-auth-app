import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View } from 'react-native';

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

import { postLogin } from '../reducers/loginReducer';
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
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Login screen</Title>
          </Body>
          <Right />
        </Header>
        <Content>
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

                  <Item stackedLabel last>
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
                </Form>

                <Button onPress={handleSubmit}>
                  <Text>Login</Text>
                </Button>
                <Button onPress={() => navigation.push(SIGN_UP_SCREEN)}>
                  <Text>Sign up</Text>
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
