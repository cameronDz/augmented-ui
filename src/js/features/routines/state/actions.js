import * as _types from './types';
import axios from 'axios';
import _config from '../../../../assets/config.json';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

export const fetchRoutineList = () => {
  return (dispatch) => {
    const url = `${_config.baseApiUrl}/object/routines`;
    dispatch(emitDispatch(_types.GET_REQUEST_ROUTINE_LIST_START));
    return axios.get(url, _config.baseApiConfig)
      .then((payload) => {
        const routines = Array.isArray(payload?.data?.payload?.routines) ? payload.data.payload.routines : [];
        return dispatch(emitDispatch(_types.GET_REQUEST_ROUTINE_LIST_SUCCESS, { routines }));
      })
      .catch((error) => {
        return dispatch(emitDispatch(_types.GET_REQUEST_ROUTINE_LIST_ERROR, { error }));
      })
      .finally(() => {
        return dispatch(emitDispatch(_types.GET_REQUEST_ROUTINE_LIST_COMPLETED));
      });
  };
};
