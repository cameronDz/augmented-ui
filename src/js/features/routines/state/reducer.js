import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.INVALIDATED_ROUTINES_SETS:
      newState = { ...initialState, didInvalidate: true, isFetching: false };
      break;
    case types.RECIEVE_ROUTINES_SETS:
      newState = {
        ...state,
        didInvalidate: false,
        isFetching: false
      };
      break;
    case types.REQUEST_ROUTINES_SETS:
      newState = { ...state, didInvalidate: false, isFetching: true };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
