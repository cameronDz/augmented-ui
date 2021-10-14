import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.GET_REQUEST_ROUTINE_LIST_START:
      newState = {
        ...state,
        isFetchingRountines: true,
        routineError: null,
        routineList: null
      };
      break;
    case types.GET_REQUEST_ROUTINE_LIST_SUCCESS:
      newState = { ...state, routineError: null, routineList: action.routines };
      break;
    case types.GET_REQUEST_ROUTINE_LIST_ERROR:
      newState = { ...state, routineError: action.error, routineList: null };
      break;
    case types.GET_REQUEST_ROUTINE_LIST_COMPLETED:
      newState = { ...state, isFetchingRountines: false };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
