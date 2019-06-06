import * as types from './types';

const shouldFetchSessions = state => {
  const sessions = state.cardioMachineSessions;
  return (!sessions)
    ? true
    : (!!sessions.isFetching)
      ? false
      : (!!sessions.didInvalidate);
};

const fetchSessions = sessionApiUrl => {
  return dispatch => {
    dispatch(requestCardioMachineSessions(sessionApiUrl))
    return fetch(sessionApiUrl)
      .then(response => response.json())
      .then(json => dispatch(recieveCardioMachineSessions(sessionApiUrl, json)))
  };
};

export const invalidateCardioMachineSession = () => {
  return { type: types.INVALIDATED_CARDIO_MACHINE_SESSIONS };
};

export const requestCardioMachineSessions = sessionApiUrl => {
  return {
    type: types.REQUEST_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl
  };
};

export const recieveCardioMachineSessions = (sessionApiUrl, json) => {
  return {
    type: types.RECIEVE_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl,
    dataPayload: json.data,
    metaPayload: json.meta,
    linkPayload: json.links,
    receivedAt: Date.now()
  };
};

export const fetchSessionsIfNeeded = sessionApiUrl => {
  return (dispatch, getState) => {
    if (shouldFetchSessions(getState(), sessionApiUrl)) {
      return dispatch(fetchSessions(sessionApiUrl))
    }
  };
};
