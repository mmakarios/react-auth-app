import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';

// example of a thunk using the redux-thunk middleware
export function example(value) {
  //  async example
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the data using an API
    return dispatch({
      type: BAR_EXAMPLE,
      example: value,
    });
  };
}

export function anotherExample(fieldName, value) {
  return {
    type: BAR_ANOTHER_EXAMPLE,
    fieldName,
    value,
  };
}
