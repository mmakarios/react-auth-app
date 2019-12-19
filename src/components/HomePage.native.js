import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import styles from '../styles/homePage.js';
import * as screens from '../constants/screens';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDishes } from '../reducers/dishesReducer.js';

// import { Container, Content, Button } from 'native-base';

class HomePage extends React.Component {
  componentDidMount() {
    const { data, getDishes } = this.props;

    if (!data) {
      getDishes();
    }
  }

  render() {
    const { navigation, data } = this.props;
    return (
      <View>
        <Text style={styles.sectionDescription}>
          {data && data.dishes[0].description}
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
  getDishes: PropTypes.func,
  isFetching: PropTypes.bool,
  error: PropTypes.bool.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    isFetching: state.dishes.isFetching,
    error: state.dishes.error,
    data: state.dishes.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDishes: bindActionCreators(getDishes, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
