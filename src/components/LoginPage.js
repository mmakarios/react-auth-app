import { connect } from 'react-redux';
import { postLogin } from '../reducers/loginReducer';
import { bindActionCreators } from 'redux';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './LoginPage.scss';
// import PasswordInput from '../shared/input/PasswordInput';
// import EmailInput from '../shared/input/EmailInput';
// import Button from '../shared/Button';
// import * as routes from '../../constants/routesNames';

class LoginPage extends Component {
  static propTypes = {
    postLogin: PropTypes.func,
    isFetching: PropTypes.bool,
    error: PropTypes.bool.isRequired,
    user: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(user) {
    event.preventDefault();
    this.props.postLogin(user);
  }

  render() {
    // const { isFetching, error } = this.props;
    return (
      <div>
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Usuário:
              <input
                required
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>

            <label>
              Senha:
              <input
                required
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <input type="submit" value="Log in" />
            <input type="button" value="Sign up" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.login.isFetching,
    error: state.login.error,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: bindActionCreators(postLogin, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
