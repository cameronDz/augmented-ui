import axios from 'axios';
import * as types from './types';
import { shouldFetchState } from '../../../state/global';
import * as _config from '../../../../assets/data/config.json';
const defaultFetchUrl = _config.apis.azure + 'CardioMachineExercises?pageNumber=1&pageSize=10';

// get session actions
const fetchSessions = url => {
  return dispatch => {
    dispatch(requestCardioMachineSessions(url));
    const config = { header: { 'Content-Type': 'application/json' } };
    return axios.get(url, config)
      .then(payload => dispatch(recieveCardioMachineSessions(payload)));
  };
};

const requestCardioMachineSessions = sessionApiUrl => {
  return { sessionApiUrl, type: types.REQUEST_CARDIO_MACHINE_SESSIONS };
};

const recieveCardioMachineSessions = payload => {
  return {
    dataPayload: payload.data.data,
    linkPayload: payload.data.links,
    metaPayload: payload.data.meta,
    receivedAt: Date.now(),
    type: types.RECIEVE_CARDIO_MACHINE_SESSIONS
  };
};

const shouldFetchSessions = (state = {}) => {
  return shouldFetchState(state.cardioMachineSessions);
};

export const invalidateCardioMachineSession = () => {
  return { type: types.INVALIDATED_CARDIO_MACHINE_SESSIONS };
};

export const fetchSessionsIfNeeded = (url = defaultFetchUrl) => {
  return (dispatch, getState) => {
    if (shouldFetchSessions(getState())) {
      return dispatch(fetchSessions(url));
    }
  };
};

// post session actions
