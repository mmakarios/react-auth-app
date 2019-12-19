import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDishes } from '../reducers/dishesReducer.js';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Title,
  Left,
  Right,
} from 'native-base';

class HomePage extends React.Component {
  componentDidMount() {
    const { data, getDishes } = this.props;

    if (!data) {
      getDishes();
    }
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {data &&
            data.dishes.map(dish => {
              return (
                <Card key={dish.description}>
                  <CardItem cardBody>
                    <Image
                      source={{ uri: dish.image }}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{dish.description}</Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            })}
        </Content>
      </Container>
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
