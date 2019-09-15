import * as types from './types';
import axios from 'axios';
import { shouldFetchState } from '../global';

// TODO fix call
const fetchSessions = sessionApiUrl => {
  return dispatch => {
    dispatch(requestCardioMachineSessions(sessionApiUrl));
    const header = { header: { 'Content-Type': 'application/json' } };
    return axios.get(sessionApiUrl, header)
      .then(payload => dispatch(recieveCardioMachineSessions(sessionApiUrl, payload)));
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

export const recieveCardioMachineSessions = (sessionApiUrl, payload) => {
  return {
    type: types.RECIEVE_CARDIO_MACHINE_SESSIONS,
    sessionApiUrl,
    dataPayload: payload.data.data,
    metaPayload: payload.data.meta,
    linkPayload: payload.data.links,
    receivedAt: Date.now()
  };
};

export const fetchSessionsIfNeeded = sessionApiUrl => {
  return (dispatch, getState) => {
    if (shouldFetchSessions(getState())) {
      return dispatch(fetchSessions(sessionApiUrl));
    }
  };
};

const shouldFetchSessions = (state = {}) => {
  return shouldFetchState(state.cardioMachineSessions);
};
