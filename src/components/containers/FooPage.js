import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/fooActions';

export class FooPage extends React.Component {
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
    let foo = this.props.foo;
    return (
      <div>
        <h2 className="alt-header">Example</h2>
        <p>
          The example value is {foo.example}.
        </p>
        <p>
          The another example value is {foo.anotherExample}.
        </p>
      </div>
    );
  }
}

FooPage.propTypes = {
  actions: PropTypes.object.isRequired,
  foo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    foo: state.foo
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
)(FooPage);
