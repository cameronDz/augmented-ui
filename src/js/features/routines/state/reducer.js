import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.RECIEVE_ROUTINES_SETS:
      newState = { ...state, exercises: action.exercises, name: action.name };
      break;
    case types.REQUEST_ROUTINES_SETS:
      newState = { ...state };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
