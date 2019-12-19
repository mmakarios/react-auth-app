import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import dishesReducer from './dishesReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    signUp: signUpReducer,
    dishes: dishesReducer,
  });

export default rootReducer;
