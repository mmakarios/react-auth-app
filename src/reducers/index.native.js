import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import dishesReducer from './dishesReducer';

const rootReducer = () =>
  combineReducers({
    login: loginReducer,
    signUp: signUpReducer,
    dishes: dishesReducer,
  });

export default rootReducer;
