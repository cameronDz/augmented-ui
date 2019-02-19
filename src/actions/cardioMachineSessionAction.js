import {
    INVALIDATED_CARDIO_MACHINE_SESSIONS,
    REQUEST_CARDIO_MACHINE_SESSIONS, 
    RECIEVE_CARDIO_MACHINE_SESSIONS} from './actionTypes';

/**
 * Refresh cardio machine sessions.
 */
export function invalidateCardioMachineSession() {
  return {
    type: INVALIDATED_CARDIO_MACHINE_SESSIONS
  };
};

/**
 * Request cardio machine session payload.
 * @param {*} sessionApiUrl String URL to request sessions from.
 */
export function requestCardioMachineSessions(sessionApiUrl) {
  return {
    type: REQUEST_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl
  };
};

/**
 * Recieve a response from a request for cardio machine sessions.
 * @param {*} sessionApiUrl String URL request is being returned from.
 * @param {*} json String of payload received from request.
 */
export function recieveCardioMachineSessions(sessionApiUrl, json) {
  console.log("recieveCardioMachineSessions - json: " + JSON.stringify(json));
  return {
    type: RECIEVE_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl,
    dataPayload: json.data,
    metaPayload: json.meta,
    receivedAt: Date.now()
  };
};

/**
 * 
 * @param {*} sessionApiUrl 
 */
export function fetchSessionsIfNeeded(sessionApiUrl) {
  return (dispatch, getState) => {
    if (shouldFetchSessions(getState(), sessionApiUrl)) {
      return dispatch(fetchSessions(sessionApiUrl))
    }
  };
};

/**
 * 
 * @param {*} state 
 */
function shouldFetchSessions(state) {
  const sessions = state.cardioMachineSessions.cardioMachineSessions;
  console.log("shouldFetchSessions - sessions: " + JSON.stringify(sessions));
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

/**
 * 
 * @param {*} sessionApiUrl 
 */
function fetchSessions(sessionApiUrl) {
  return dispatch => {
    dispatch(requestCardioMachineSessions(sessionApiUrl))
    return fetch(sessionApiUrl)
      .then(response => response.json())
      .then(json => dispatch(recieveCardioMachineSessions(sessionApiUrl, json)))
  };
};
