import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.INVALIDATED_ROUTINES_SETS:
        newState = { ...state };
      break;
    case types.LOADING_EXERCISE_LIST:
        newState = { ...state };
      break;
    case types.RECIEVE_EXERCISE_LIST:
        newState = { ...state };
      break;
    case types.REQUEST_EXERCISE_LIST:
        newState = { ...state };
        break;
    case types.CREATE_NEW_EXERCISE_POST:
        newState = { ...state };
        break;
    case types.INVALIDATED_ROUTINES_SETS:
        newState = { ...state };
        break;
    case types.INVALIDATED_ROUTINES_SETS:
        newState = { ...state };
        break;
    default:
        newState = { ...state };
  }
  return newState;
};

export default reducer;
