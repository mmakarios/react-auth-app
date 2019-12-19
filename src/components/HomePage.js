import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDishes } from '../reducers/dishesReducer';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class HomePage extends Component {
  static propTypes = {
    getDishes: PropTypes.func,
    isFetching: PropTypes.bool,
    error: PropTypes.bool.isRequired,
    data: PropTypes.object,
  };

  componentDidMount() {
    const { data, getDishes } = this.props;

    if (!data) {
      getDishes();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Home</h1>

        {data &&
          data.dishes.map(dish => {
            return (
              <Card className="card" key={dish.description}>
                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    image={dish.image}
                    title="Dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {dish.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </div>
    );
  }
}

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
