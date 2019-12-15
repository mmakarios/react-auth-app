import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from './loginReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    // signUp: signUpReducer,
  });

export default rootReducer;
