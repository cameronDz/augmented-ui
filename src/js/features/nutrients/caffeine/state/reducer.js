import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case _types.INVALIDATED_CAFFEINE_INTAKE:
      newState = { ...initialState, didInvalidate: true, isFetching: false };
      break;
    case _types.REQUEST_CAFFEINE_INTAKE:
      newState = { ...state, didInvalidate: false, isFetching: true };
      break;
    case _types.RECIEVE_CAFFEINE_INTAKE:
      newState = {
        ...state,
        currentPage: action.metaPayload._currentPage,
        didInvalidate: true,
        intakes: action.dataPayload,
        isFetching: false,
        lastUpdated: action.receivedAt,
        links: action.linkPayload,
        totalPages: action.metaPayload._totalPages,
        totalRecords: action.metaPayload._totalRecords
      };
      break;
    case _types.SEND_CAFFEINE_POST_REQUEST:
      newState = { ...state, posting: true, successfulPost: false };
      break;
    case _types.RECIEVE_CAFFEINE_RESPONSE:
      newState = { ...state, posting: false };
      break;
    case _types.RECIEVE_SUCCESSFUL_CAFFEINE_RESPONSE:
      newState = { ...state, successfulPost: true };
        break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
