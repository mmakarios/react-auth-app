import * as endpoints from '../constants/endpoints';

// action types
export const POST_LOGIN_BEGIN = 'POST_LOGIN_BEGIN';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

// action creators
export const loginActionBegin = () => {
  return {
    type: POST_LOGIN_BEGIN,
  };
};

export const loginActionSuccess = () => {
  return {
    type: POST_LOGIN_SUCCESS,
  };
};

export const loginActionFailure = () => {
  return {
    type: POST_LOGIN_FAILURE,
  };
};

function loginAction(user) {
  return fetch(endpoints.LOGIN, { method: 'POST', body: JSON.stringify(user) })
    .then(handleResponse)
    .then(res => res.json());
}

function handleResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const postLogin = user => {
  return dispatch => {
    dispatch(loginActionBegin());

    return loginAction(user)
      .then(json => {
        console.log('json :', json);
        // TODO: redirecionar para home
      })
      .catch(error => {
        dispatch(loginActionFailure(error));
      });
  };
};

// initial state
export const loginInitialState = {
  error: false,
  isFetching: false,
};

// reducers
const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case POST_LOGIN_BEGIN:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
