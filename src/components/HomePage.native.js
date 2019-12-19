import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import styles from '../styles/homePage.js';
import * as screens from '../constants/screens';

// import { Container, Content, Button } from 'native-base';

class HomePage extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text style={styles.sectionDescription}>
          DISHES LIST WHEN LOGGED IN
        </Text>
        <Button
          title="Go to login page"
          onPress={() => navigation.push(screens.LOGIN_SCREEN)}
        ></Button>
        <Button
          title="Go to sign up page"
          onPress={() => navigation.push(screens.SIGN_UP_SCREEN)}
        ></Button>
        <Button
          title="Go to 404"
          onPress={() => navigation.push(screens.NOT_FOUND_PAGE)}
        ></Button>
      </View>
    );
  }
}

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomePage;
