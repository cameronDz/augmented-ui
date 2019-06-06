import initialState from './initialState';
import * as types from './types';

function getFetchingState() {
  let fetching = initialState;
  fetching.isFetching = true;
  return fetching;
}

function sessions(state = initialState, action) {
  switch (action.type) {
    case types.INVALIDATED_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, initialState)
    case types.REQUEST_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, getFetchingState())
    case types.RECIEVE_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, {
        sessions: action.dataPayload,
        totalRecords: action.metaPayload._totalRecords,
        totalPages: action.metaPayload._totalPages,
        currentPage: action.metaPayload._currentPage,
        links: action.linkPayload,
        isFetching: false,
        didInvalidate: true,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INVALIDATED_CARDIO_MACHINE_SESSIONS:
    case types.REQUEST_CARDIO_MACHINE_SESSIONS:
    case types.RECIEVE_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, {
        cardioMachineSessions: sessions(state, action)
      });
    default:
      return state;
  }
};
