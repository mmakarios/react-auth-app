import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import createRootReducer from '../reducers';

function configureStoreProd(initialState) {
  return createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(thunkMiddleware),
  );
}

function configureStoreDev(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];
  return createStore(
    createRootReducer(),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
