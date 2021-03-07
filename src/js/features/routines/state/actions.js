import * as _types from './types';
import axios from 'axios';
import * as _config from '../../../../assets/config.json';

const httpHeader = { header: { 'Content-Type': 'application/json' } };
const rountinesPath = 'json/object/routines';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

export const fetchRoutineList = () => {
  return (dispatch) => {
    const url = _config.apis.heroku + rountinesPath;
    dispatch(emitDispatch(_types.GET_REQUEST_ROUTINE_LIST_START));
    return axios.get(url, httpHeader)
      .then((payload) => {
        const routines = !!payload && !!payload.data && payload.data.payload ? payload.data.payload.routines : [];
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
