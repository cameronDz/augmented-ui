import axios from 'axios';
import * as _types from './types';
import _config from '../../../../../assets/config.json';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

const getCaffeineList = () => {
  return (dispatch) => {
    const url = `${_config.baseApiUrl}/object/caffeine`;
    dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_START));
    return axios.get(url, _config.baseApiConfig)
      .then((response) => {
        const caffeine = !!response && !!response.data && response.data.payload && Array.isArray(response.data.payload.caffeine) ? response.data.payload.caffeine : [];
        return dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_SUCCESS, { data: caffeine }));
      })
      .catch((error) => {
        return dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_ERROR, { error }));
      })
      .finally(() => {
        return dispatch(emitDispatch(_types.GET_REQUEST_CAFFEINE_LIST_COMPLETED));
      });
  };
};

const putCaffeine = payload => {
  return (dispatch) => {
    const url = `${_config.baseApiUrl}/update/caffeine`;
    dispatch(emitDispatch(_types.PUT_REQUEST_CAFFEINE_ITEM_START));
    return axios.put(url, payload, _config.baseApiConfig)
      .then((response) => {
        const type = !!response && !!response.data ? _types.PUT_REQUEST_CAFFEINE_ITEM_SUCCESS : _types.PUT_REQUEST_CAFFEINE_ITEM_ERROR;
        const responsePayload = {
          data: !!response && !!response.data ? response.data : null,
          error: 'No data in response.'
        };
        return dispatch(emitDispatch(type, responsePayload));
      })
      .catch((error) => {
        return dispatch(emitDispatch(_types.PUT_REQUEST_CAFFEINE_ITEM_ERROR, { error }));
      })
      .finally(() => {
        return dispatch(emitDispatch(_types.PUT_REQUEST_CAFFEINE_ITEM_COMPLETED));
      });
  };
};

export { getCaffeineList, putCaffeine };
