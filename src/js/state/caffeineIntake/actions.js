import * as types from './types';
import { shouldFetchState } from '../global';
import * as _config from '../../../../assets/data/config.json';
const apiUrl = _config.apis.azure + 'CaffeineNutrientIntakes';

export const invalidateCaffeineIntakes = () => {
  return { type: types.INVALIDATED_CAFFEINE_INTAKE };
};

export const requestCaffeineIntakes = () => {
  return { type: types.REQUEST_CAFFEINE_INTAKE, apiUrl };
};

export const recieveCaffeineIntakes = json => {
  return {
    apiUrl,
    dataPayload: json.data,
    linkPayload: json.links,
    metaPayload: json.meta,
    receivedAt: Date.now(),
    type: types.RECIEVE_CAFFEINE_INTAKE
  };
};

export const fetchIntakesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchIntakes(getState())) {
      return dispatch(fetchIntakes())
    }
  };
};

const shouldFetchIntakes = (state = {}) => {
  return shouldFetchState(state.cardioMachineSessions);
};

// TODO wtf is this logic???
const fetchIntakes = () => {
  return dispatch => {
    dispatch(requestCaffeineIntakes())
    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => dispatch(recieveCaffeineIntakes(json)))
  };
};
