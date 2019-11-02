import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case _types.REQUESTING_EXERCISE_LIST:
      newState = { ...state };
      break;
    case _types.RECIEVE_EXERCISE_LIST:
      newState = { ...state, list: action.data };
      console.log('newState', newState);
      break;
    case _types.CREATE_NEW_EXERCISE_POST:
      newState = { ...state };
      break;
    case _types.RECIEVE_NEW_EXERCISE_RESPONSE:
      newState = { ...state };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
