import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/barActions';

export class BarPage extends React.Component {
  example = () => {
    this.props.actions.example('Test');
  }

  anotherExample = () => {
    this.props.actions.anotherExample('anotherExample', 'Delayed');
  }

  componentDidMount() {
    this.example();
    setTimeout(this.anotherExample, 2000);
  }

  render() {
    let bar = this.props.bar;
    return (
      <div>
        <h2 className="alt-header">Example</h2>
        <p>
          The example value is {bar.example}.
        </p>
        <p>
          The another example value is {bar.anotherExample}.
        </p>
      </div>
    );
  }
}

BarPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bar: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bar: state.bar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarPage);
