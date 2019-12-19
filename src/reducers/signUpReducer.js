import * as endpoints from '../constants/endpoints';

// action types
export const POST_SIGNUP_BEGIN = 'POST_SIGNUP_BEGIN';
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';

// action creators
export const signUpActionBegin = () => {
  return {
    type: POST_SIGNUP_BEGIN,
  };
};

export const signUpActionSuccess = () => {
  return {
    type: POST_SIGNUP_SUCCESS,
  };
};

export const signUpActionFailure = () => {
  return {
    type: POST_SIGNUP_FAILURE,
  };
};

function signUpAction(user) {
  return fetch(endpoints.SIGN_UP, {
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .then(res => res.json());
}

function handleResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const postSignUp = user => {
  return dispatch => {
    dispatch(signUpActionBegin());

    return signUpAction(user)
      .then(() => {
        dispatch(signUpActionSuccess());
      })
      .catch(error => {
        dispatch(signUpActionFailure(error));
      });
  };
};

// initial state
export const signUpInitialState = {
  error: false,
  isFetching: false,
  madeSignUp: false,
};

// reducers
const signUpReducer = (state = signUpInitialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_BEGIN:
      return {
        ...state,
        isFetching: true,
        error: false,
        madeSignUp: false,
      };
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        madeSignUp: true,
      };
    case POST_SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        madeSignUp: false,
      };
    default:
      return state;
  }
};

export default signUpReducer;
