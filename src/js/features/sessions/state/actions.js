import axios from 'axios';
import * as _types from './types';
import * as _config from '../../../../../assets/config.json';
import { shouldFetchState } from '../../../state/global';

const httpHeader = { header: { 'Content-Type': 'application/json' } };
const cardioSessionGetPath = 'json/object/cardio';
const cardioSessionPutPath = 'json/update/cardio';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

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
  return { sessionApiUrl, type: _types.REQUEST_CARDIO_MACHINE_SESSIONS };
};

const recieveCardioMachineSessions = payload => {
  return {
    dataPayload: payload.data.data,
    linkPayload: payload.data.links,
    metaPayload: payload.data.meta,
    receivedAt: Date.now(),
    type: _types.RECIEVE_CARDIO_MACHINE_SESSIONS
  };
};

const shouldFetchSessions = (state = {}) => {
  return shouldFetchState(state.cardioMachineSessions);
};

export const invalidateCardioMachineSession = () => {
  return { type: _types.INVALIDATED_CARDIO_MACHINE_SESSIONS };
};

export const fetchSessionsIfNeeded = (url = '') => {
  if (!url) {
    throw new Error('no URL to fetch');
  }
  return (dispatch, getState) => {
    if (shouldFetchSessions(getState())) {
      return dispatch(fetchSessions(url));
    }
  };
};

const getCardioSessionList = () => {
  return (dispatch) => {
    const url = _config.apis.heroku + cardioSessionGetPath;
    dispatch(emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_START));
    return axios.get(url, httpHeader)
      .then((response) => {
        const cardio = !!response && !!response.data && response.data.payload && Array.isArray(response.data.payload.cardio) ? response.data.payload.cardio : [];
        return dispatch(emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_SUCCESS, { data: cardio }));
      })
      .catch((error) => {
        return dispatch(emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_ERROR, { error }));
      })
      .finally(() => {
        return dispatch(emitDispatch(_types.GET_REQUEST_CARDIO_SESSION_LIST_COMPLETED));
      });
  };
};

const putCardioSession = payload => {
  return (dispatch) => {
    const url = _config.apis.heroku + cardioSessionPutPath;
    dispatch(emitDispatch(_types.PUT_REQUEST_CARDIO_SESSION_ITEM_START));
    return axios.put(url, payload, httpHeader)
      .then((response) => {
        const type = !!response && !!response.data ? _types.PUT_REQUEST_CARDIO_SESSION_ITEM_SUCCESS : _types.PUT_REQUEST_CARDIO_SESSION_ITEM_ERROR;
        const payload = {
          data: !!response && !!response.data ? response.data : null,
          error: 'No data in response.'
        };
        return dispatch(emitDispatch(type, payload));
      })
      .catch((error) => {
        return dispatch(emitDispatch(_types.PUT_REQUEST_CARDIO_SESSION_ITEM_ERROR, { error }));
      })
      .finally(() => {
        return dispatch(emitDispatch(_types.PUT_REQUEST_CARDIO_SESSION_ITEM_COMPLETED));
      });
  };
};

export { getCardioSessionList, putCardioSession };
