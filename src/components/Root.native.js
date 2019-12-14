import React, { Component } from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux';
const store = configureStore();
import App from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
