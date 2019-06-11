import * as types from './types';

export const invalidateCaffeineIntakes = () => {
  return { type: types.INVALIDATED_CAFFEINE_INTAKE };
};

export const requestCaffeineIntakes = apiUrl => {
  return {
    type: types.REQUEST_CAFFEINE_INTAKE,
    apiUrl
  };
};

export const recieveCaffeineIntakes = (apiUrl, json) => {
  console.log('hit recieveCaffeineIntakes', json);
  return {
    apiUrl,
    dataPayload: json.data,
    linkPayload: json.links,
    metaPayload: json.meta,
    receivedAt: Date.now(),
    type: types.RECIEVE_CAFFEINE_INTAKE
  };
};

export const fetchIntakesIfNeeded = apiUrl => {
  return (dispatch, getState) => {
    if (shouldFetchIntakes(getState(), apiUrl)) {
      return dispatch(fetchIntakes(apiUrl))
    }
  };
};

const shouldFetchIntakes = state => {
  const intakes = state.caffeineIntakes;
  return (!intakes)
    ? true
    : (!!intakes.isFetching)
      ? false
      : (!!intakes.didInvalidate);
};

const fetchIntakes = apiUrl => {
  return dispatch => {
    dispatch(requestCaffeineIntakes(apiUrl))
    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => dispatch(recieveCaffeineIntakes(apiUrl, json)))
  };
};
