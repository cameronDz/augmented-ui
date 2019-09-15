import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.INVALIDATED_CARDIO_MACHINE_SESSIONS:
      newState = { ...initialState };
      break;
    case types.REQUEST_CARDIO_MACHINE_SESSIONS:
      newState = { ...state, isFetching: true };
      break;
    case types.RECIEVE_CARDIO_MACHINE_SESSIONS:
      newState = {
        ...state,
        sessions: action.dataPayload,
        totalRecords: action.metaPayload._totalRecords,
        totalPages: action.metaPayload._totalPages,
        currentPage: action.metaPayload._currentPage,
        links: action.linkPayload,
        isFetching: false,
        didInvalidate: true,
        lastUpdated: action.receivedAt
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
