import {
    INVALIDATED_CARDIO_MACHINE_SESSIONS,
    REQUEST_CARDIO_MACHINE_SESSIONS, 
    RECIEVE_CARDIO_MACHINE_SESSIONS} from './actionTypes';

export function invalidateCardioMachineSession() {
  return {
    type: INVALIDATED_CARDIO_MACHINE_SESSIONS
  };
};

export function requestCardioMachineSessions(sessionApiUrl) {
  return {
    type: REQUEST_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl
  };
};

export function recieveCardioMachineSessions(sessionApiUrl, json) {
  return {
    type: RECIEVE_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl,
    dataPayload: json.data,
    metaPayload: json.meta,
    linkPayload: json.links,
    receivedAt: Date.now()
  };
};

export function fetchSessionsIfNeeded(sessionApiUrl) {
  return (dispatch, getState) => {
    if (shouldFetchSessions(getState(), sessionApiUrl)) {
      return dispatch(fetchSessions(sessionApiUrl))
    }
  };
};

function shouldFetchSessions(state) {
  const sessions = state.cardioMachineSessions.cardioMachineSessions;
  let ret;
  if (!sessions) {
    ret = true;
  } else if (sessions.isFetching) {
    ret = false;
  } else {
    ret = sessions.didInvalidate;
  }
  return ret;
};

function fetchSessions(sessionApiUrl) {
  return dispatch => {
    dispatch(requestCardioMachineSessions(sessionApiUrl))
    return fetch(sessionApiUrl)
      .then(response => response.json())
      .then(json => dispatch(recieveCardioMachineSessions(sessionApiUrl, json)))
  };
};
