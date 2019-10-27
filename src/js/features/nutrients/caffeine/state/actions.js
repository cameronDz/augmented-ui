import * as types from './types';
import axios from 'axios';
import { shouldFetchState } from '../../../../state/global';
import * as _config from '../../../../assets/data/config.json';
const apiUrl = _config.apis.azure + 'CaffeineNutrientIntakes?pageSize=10&pageNumber=1';

export const invalidateCaffeineIntakes = () => {
  return { type: types.INVALIDATED_CAFFEINE_INTAKE };
};

export const requestCaffeineIntakes = (url = apiUrl) => {
  return { type: types.REQUEST_CAFFEINE_INTAKE, url };
};

export const recieveCaffeineIntakes = (payload, url = apiUrl) => {
  return {
    url,
    dataPayload: payload.data.data,
    linkPayload: payload.data.links,
    metaPayload: payload.data.meta,
    receivedAt: Date.now(),
    type: types.RECIEVE_CAFFEINE_INTAKE
  };
};

export const fetchIntakesIfNeeded = (url = apiUrl) => {
  return (dispatch, getState) => {
    if (shouldFetchIntakes(getState())) {
      return dispatch(fetchIntakes(url));
    }
  };
};

const shouldFetchIntakes = (state = {}) => {
  return shouldFetchState(state.cardioMachineSessions);
};

// TODO wtf is this logic???
const fetchIntakes = (url = apiUrl) => {
  return dispatch => {
    dispatch(requestCaffeineIntakes());
    const header = { header: { 'Content-Type': 'application/json' } };
    return axios.get(url, header)
      .then(payload => dispatch(recieveCaffeineIntakes(payload)));
  };
};
