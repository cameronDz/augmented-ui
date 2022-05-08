import axios from 'axios';
import * as _types from './types';
import _config from '../../../../assets/config.json';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

const clearSuccessPutCardioSession = () => {
  return (dispatch, _getState) => {
    dispatch(emitDispatch(_types.CLEAR_PUT_REQUEST_CARDIO_SESSION_STATUS));
  };
};

const getCardioSessionList = () => {
  return (dispatch, _getState) => {
    const url = `${_config.baseApiUrl}/object/cardio`;
    dispatch(emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_START));
    return axios
      .get(url, _config.baseApiConfig)
      .then((response) => {
        const cardio = Array.isArray(response?.data?.payload?.cardio)
          ? response.data.payload.cardio
          : [];
        return dispatch(
          emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_SUCCESS, {
            data: cardio
          })
        );
      })
      .catch((error) => {
        return dispatch(
          emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_ERROR, { error })
        );
      })
      .finally(() => {
        return dispatch(
          emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_COMPLETED)
        );
      });
  };
};

const putCardioSession = (item) => {
  return (dispatch, getState) => {
    const url = `${_config.baseApiUrl}/update/cardio`;
    const sessions = getState().cardioMachineSessions.cardioSessionGetPayload;
    const userName = getState().auth.username || 'UNKNOWN';
    const newSession = { ...(item || {}), userName };
    const payload = { cardio: [...sessions, newSession] };
    dispatch(emitDispatch(_types.PUT_REQUEST_CARDIO_SESSION_ITEM_START));
    const config = { ..._config.baseApiConfig };
    config.headers.Authorization = `Bearer ${getState().auth.token}`;
    return axios
      .put(url, payload, config)
      .then((response) => {
        const isValidResponse = !!response?.data;
        const responsePayload = {
          data: !!response?.data,
          error: 'No data in response.'
        };
        const type = isValidResponse
          ? _types.PUT_REQUEST_CARDIO_SESSION_ITEM_SUCCESS
          : _types.PUT_REQUEST_CARDIO_SESSION_ITEM_ERROR;
        dispatch(emitDispatch(type, responsePayload));
        if (isValidResponse) {
          dispatch(getCardioSessionList());
        }
      })
      .catch((error) => {
        dispatch(
          emitDispatch(_types.PUT_REQUEST_CARDIO_SESSION_ITEM_ERROR, { error })
        );
      })
      .finally(() => {
        dispatch(
          emitDispatch(_types.PUT_REQUEST_CARDIO_SESSION_ITEM_COMPLETED)
        );
      });
  };
};

export { clearSuccessPutCardioSession, getCardioSessionList, putCardioSession };
