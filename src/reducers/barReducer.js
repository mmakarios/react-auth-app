import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState.bar, action) {
  let newState;

  switch (action.type) {
    case BAR_EXAMPLE:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in barActions.js
      return objectAssign({}, state, { example: action.example });

    case BAR_ANOTHER_EXAMPLE:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;

      return newState;

    default:
      return state;
  }
}
