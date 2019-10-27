import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.INVALIDATED_CARDIO_MACHINE_SESSIONS:
      newState = { ...state, didInvalidate: true, isFetching: false };
      break;
    case types.REQUEST_CARDIO_MACHINE_SESSIONS:
      newState = { ...state, didInvalidate: false, isFetching: true };
      break;
    case types.RECIEVE_CARDIO_MACHINE_SESSIONS:
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
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
