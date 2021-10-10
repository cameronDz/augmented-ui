import axios from 'axios';
import * as _types from './types';
import _config from '../../../../../assets/config.json';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

const getCaffeineList = () => {
  return (dispatch, _getDispatch) => {
    const url = `${_config.baseApiUrl}/object/caffeine`;
    dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_START));
    return axios.get(url, _config.baseApiConfig)
      .then((response) => {
        const caffeine = !!response && !!response.data && response.data.payload && Array.isArray(response.data.payload.caffeine) ? response.data.payload.caffeine : [];
        return dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_SUCCESS, { data: caffeine }));
      })
      .catch((error) => {
        dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_ERROR, { error }));
      })
      .finally(() => {
        dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_COMPLETED));
      });
  };
};

const clearPutSuccess = () => {
  return (dispatch, _getState) => {
    dispatch(emitDispatch(_types.CLEAR_PUT_REQUEST_CAFFEINE_ITEM_SUCCESS));
  };
};

const putCaffeine = item => {
  return (dispatch, getState) => {
    const url = `${_config.baseApiUrl}/update/caffeine`;
    const userName = getState().auth.username || 'UNKNOWN';
    const caffeines = getState().nutrientsData.caffeineGetPayload || [];
    const newCaffeine = { ...(item || {}), userName };
    const payload = [...caffeines, newCaffeine];
    dispatch(emitDispatch(_types.PUT_REQUEST_CAFFEINE_ITEM_START));
    return axios.put(url, payload, _config.baseApiConfig)
      .then((response) => {
        const isSuccessful = !!response?.data;
        const type = isSuccessful ? _types.PUT_REQUEST_CAFFEINE_ITEM_SUCCESS : _types.PUT_REQUEST_CAFFEINE_ITEM_ERROR;
        const responsePayload = { data: response?.data || null, error: 'No data in response.' };
        dispatch(emitDispatch(type, responsePayload));
        if (isSuccessful) {
          return dispatch(getCaffeineList());
        }
      })
      .catch((error) => {
        dispatch(emitDispatch(_types.PUT_REQUEST_CAFFEINE_ITEM_ERROR, { error }));
      })
      .finally(() => {
        dispatch(emitDispatch(_types.PUT_REQUEST_CAFFEINE_ITEM_COMPLETED));
      });
  };
};

export { clearPutSuccess, getCaffeineList, putCaffeine };
