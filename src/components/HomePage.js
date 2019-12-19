import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDishes } from '../reducers/dishesReducer';

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
        <h1>Home web</h1>

        {data && data.dishes[0].description}
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
