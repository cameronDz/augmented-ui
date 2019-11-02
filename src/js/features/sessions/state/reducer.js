import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case _types.INVALIDATED_CARDIO_MACHINE_SESSIONS:
      newState = { ...initialState, didInvalidate: true, isFetching: false };
      break;
    case _types.REQUEST_CARDIO_MACHINE_SESSIONS:
      newState = { ...state, didInvalidate: false, isFetching: true };
      break;
    case _types.RECIEVE_CARDIO_MACHINE_SESSIONS:
      newState = {
        ...state,
        currentPage: action.metaPayload._currentPage,
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.receivedAt,
        links: action.linkPayload,
        sessions: action.dataPayload,
        totalPages: action.metaPayload._totalPages,
        totalRecords: action.metaPayload._totalRecords
      };
      break;
    case _types.RECIEVE_CARDIO_MACHINE_SESSION_POST_RESPONSE:
      newState = { ...state, posting: false };
      break
    case _types.RECIEVE_SUCCESSFUL_CARDIO_MACHINE_SESSION_POST_RESPONSE:
      newState = { ...state, successfulPost: true };
      break
    case _types.SEND_CARDIO_MACHINE_SESSION_POST_REQUEST:
      newState = { ...state, posting: true, successfulPost: false };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
