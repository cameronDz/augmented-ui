import initialState from './initialState';
import * as _types from '../types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case _types.UPDATE_CARDIO_MACHINE_SESSION_POST_REQUEST:
      newState = { ...state, posting: false, request: { ...state.request, ...update } };
      break;
    case _types.RECIEVE_CARDIO_MACHINE_SESSION_POST_RESPONSE:
      newState = { ...state, posting: false };
      break;
    case _types.RECIEVE_SUCCESSFUL_CARDIO_MACHINE_SESSION_POST_RESPONSE:
      newState = { ...initialState, posting: false, successfulPost: true };
      break;
    case _types.SEND_CARDIO_MACHINE_SESSION_POST_REQUEST:
      newState = { ...state, posting: true, successfulPost: false };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
