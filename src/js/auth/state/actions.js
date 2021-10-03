import axios from 'axios';
import * as _types from './types';
import _config from '../../../assets/config.json';

const authApiUrl = _config.authApiBaseUrl;
const endpointLiveness = _config.authApiEndpointLiveness;
const endpointToken = _config.authApiEndpointToken;
const config = _config.baseApiConfig;

const startLiveness = () => {
  return { type: _types.LIVENESS_PROBE };
};

const startRequest = () => {
  return { type: _types.GET_TOKEN_START };
};

const clearError = () => {
  return (dispatch) => {
    return dispatch({ type: _types.CLEAR_ERROR });
  };
};

const clearToken = () => {
  return (dispatch) => {
    return dispatch({ type: _types.CLEAR_TOKEN });
  };
};

const fetchToken = (credentials) => {
  return (dispatch) => {
    dispatch(startRequest());
    const url = `${authApiUrl}/${endpointToken}`;
    return axios
      .post(url, credentials, config)
      .then((payload) => {
        const type = _types.GET_TOKEN_SUCCESS;
        return dispatch({ data: payload?.data, type });
      })
      .catch((error) => {
        const type = _types.GET_TOKEN_ERROR;
        return dispatch({ error, type });
      })
      .finally(() => {
        dispatch({ type: _types.GET_TOKEN_COMPLETED });
      });
  };
};

const livenessCheck = () => {
  return (dispatch) => {
    dispatch(startLiveness());
    const url = `${authApiUrl}/${endpointLiveness}`;
    return axios.post(url, {}, config);
  };
};

export { clearError, clearToken, fetchToken, livenessCheck };