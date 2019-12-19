import * as endpoints from '../constants/endpoints';

// action types
export const GET_DISHES_BEGIN = 'GET_DISHES_BEGIN';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_FAILURE = 'GET_DISHES_FAILURE';

// action creators
export const dishesActionBegin = () => {
  return {
    type: GET_DISHES_BEGIN,
  };
};

export const dishesActionSuccess = data => {
  return {
    type: GET_DISHES_SUCCESS,
    payload: data,
  };
};

export const dishesActionFailure = () => {
  return {
    type: GET_DISHES_FAILURE,
  };
};

function dishesAction() {
  return fetch(endpoints.USER_DISHES, { method: 'GET' })
    .then(handleResponse)
    .then(res => res.json());
}

function handleResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const getDishes = () => {
  return dispatch => {
    dispatch(dishesActionBegin());

    return dishesAction()
      .then(json => {
        dispatch(dishesActionSuccess(json));
      })
      .catch(error => {
        dispatch(dishesActionFailure(error));
      });
  };
};

// initial state
export const dishesInitialState = {
  error: false,
  isFetching: false,
  data: null,
};

// reducers
const dishesReducer = (state = dishesInitialState, action) => {
  switch (action.type) {
    case GET_DISHES_BEGIN:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case GET_DISHES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.payload,
      };
    case GET_DISHES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default dishesReducer;
