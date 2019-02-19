import initialState from './initialState';
import {
  INVALIDATED_CARDIO_MACHINE_SESSIONS,
  REQUEST_CARDIO_MACHINE_SESSIONS, 
  RECIEVE_CARDIO_MACHINE_SESSIONS} from '../actions/actionTypes';

function sessions(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATED_CARDIO_MACHINE_SESSIONS:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_CARDIO_MACHINE_SESSIONS:
		  console.log("hit request");
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECIEVE_CARDIO_MACHINE_SESSIONS:
      console.log("hit recieve");
      console.log("action: "  + JSON.stringify(action));
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        sessions: action.dataPayload.cardioMachineSessions.cardioMachineSessions,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

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
