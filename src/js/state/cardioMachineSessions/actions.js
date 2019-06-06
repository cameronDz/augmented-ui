import * as types from './actions';

export function invalidateCardioMachineSession() {
  return { type: types.INVALIDATED_CARDIO_MACHINE_SESSIONS };
};

export function requestCardioMachineSessions(sessionApiUrl) {
  return {
    type: types.REQUEST_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl
  };
};

export function recieveCardioMachineSessions(sessionApiUrl, json) {
  return {
    type: types.RECIEVE_CARDIO_MACHINE_SESSIONS,
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
  return (!sessions)
    ? true
    : (!!sessions.isFetching)
      ? false
      : (!!sessions.didInvalidate);
};

function fetchSessions(sessionApiUrl) {
  return dispatch => {
    dispatch(requestCardioMachineSessions(sessionApiUrl))
    return fetch(sessionApiUrl)
      .then(response => response.json())
      .then(json => dispatch(recieveCardioMachineSessions(sessionApiUrl, json)))
  };
};
