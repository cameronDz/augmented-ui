import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  console.log('action', action);
  switch (action.type) {
    case types.RECIEVE_ROUTINES_SETS:
      newState = { ...state, exercises: action.routine.exercises, name: action.routine.name };
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
