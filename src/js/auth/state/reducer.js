import * as _types from './types';
import { initialState } from './initialState';

const reducer = (state = initialState, action = null) => {
  let newState;
  switch (action?.type) {
    case _types.CLEAR_STATUS:
      newState = { ...state, error: null, success: false };
      break;
    case _types.CLEAR_TOKEN:
      newState = {
        ...state,
        error: null,
        success: false,
        token: null,
        username: null
      };
      break;
    case _types.GET_TOKEN_CANCELLED:
      newState = { ...state, isCancelled: true, isFetching: false };
      break;
    case _types.GET_TOKEN_COMPLETED:
      newState = { ...state, isCancelled: false, isFetching: false };
      break;
    case _types.GET_TOKEN_ERROR:
      newState = {
        ...state,
        error: state.isCancelled ? null : action.error,
        isCancelled: false,
        isFetching: false,
        token: null,
        username: null
      };
      break;
    case _types.GET_TOKEN_SUCCESS:
      newState = {
        ...state,
        error: null,
        isCancelled: false,
        isFetching: false,
        success: !state.isCancelled,
        token: state.isCancelled ? null : action.data,
        username: state.isCancelled ? null : action.username
      };
      break;
    case _types.GET_TOKEN_START:
      newState = {
        ...state,
        error: null,
        isCancelled: false,
        isFetching: true,
        token: null,
        username: null
      };
      break;
    case _types.LIVENESS_PROBE:
      newState = { ...state, isLive: true };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
