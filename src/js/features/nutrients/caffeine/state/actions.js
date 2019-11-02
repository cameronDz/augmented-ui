import axios from 'axios';
import { shouldFetchState } from '../../../../state/global';
import * as _types from './types';
import * as _config from '../../../../../../assets/data/config.json';

const apiUrl = _config.apis.azure + 'CaffeineNutrientIntakes?pageSize=10&pageNumber=1';

export const invalidateCaffeineIntakes = () => {
  return { type: _types.INVALIDATED_CAFFEINE_INTAKE };
};

export const requestCaffeineIntakes = (url = apiUrl) => {
  return { type: _types.REQUEST_CAFFEINE_INTAKE, url };
};

export const recieveCaffeineIntakes = (payload, url = apiUrl) => {
  return {
    dataPayload: payload.data.data,
    linkPayload: payload.data.links,
    metaPayload: payload.data.meta,
    receivedAt: Date.now(),
    type: _types.RECIEVE_CAFFEINE_INTAKE,
    url
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
  return shouldFetchState(state.caffeineIntakes);
};

const fetchIntakes = (url = apiUrl) => {
  return dispatch => {
    dispatch(requestCaffeineIntakes());
    const config = { header: { 'Content-Type': 'application/json' } };
    return axios.get(url, config)
      .then(payload => dispatch(recieveCaffeineIntakes(payload)));
  };
};

// posting actions
const recieveCaffeinePostResponse = () => {
  return { type: _types.RECIEVE_CAFFEINE_RESPONSE };
};

const recieveSuccessfulCaffeinePostResponse = () => {
  return { type: _types.RECIEVE_SUCCESSFUL_CAFFEINE_RESPONSE };
};

const sendCaffienePostRequest = () => {
  return { type: _types.SEND_CAFFEINE_POST_REQUEST };
};

export const createNewCaffieneConsumption = payload => {
  const url = _config.apis.azure + 'CaffeineNutrientIntakes';
  const config = { header: { 'Content-Type': 'application/json' } };
  return dispatch => {
    dispatch(sendCaffienePostRequest());
    axios.post(url, payload, config)
      .then(() => {
        dispatch(recieveSuccessfulCaffeinePostResponse());
        dispatch(invalidateCaffeineIntakes());
        dispatch(fetchIntakesIfNeeded(url));
      })
      .catch(error => {
        console.error('could not complete post request', error);
      })
      .finally(() => {
        dispatch(recieveCaffeinePostResponse());
      });
  };
};
