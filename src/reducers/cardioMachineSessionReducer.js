import initialState from './initialState';
import {
  INVALIDATED_CARDIO_MACHINE_SESSIONS,
  REQUEST_CARDIO_MACHINE_SESSIONS,
  RECIEVE_CARDIO_MACHINE_SESSIONS
} from '../actions/actionTypes';

function sessions(state = initialState.cardioMachineSessions, action) {
  switch (action.type) {
    case INVALIDATED_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, initialState.cardioMachineSessions)
    case REQUEST_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, initialState.cardioMachineSessions)
    case RECIEVE_CARDIO_MACHINE_SESSIONS:
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
    case INVALIDATED_CARDIO_MACHINE_SESSIONS:
    case REQUEST_CARDIO_MACHINE_SESSIONS:
    case RECIEVE_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, {
        cardioMachineSessions: sessions(state, action)
      });
    default:
      return state;
  }
};
