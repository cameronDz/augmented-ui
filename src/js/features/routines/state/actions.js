import * as _types from './types';
import axios from 'axios';

const recievedRoutineSet = (payload = {}) => {
  const { data } = payload;
  return { ...data, _types: types.RECIEVE_ROUTINES_SETS };
};

const requestRoutineSet = () => {
  return { type: _types.REQUEST_ROUTINES_SETS };
};

export const fetchRoutineSet = (routineId = 1) => {
  const url = _config.apis.heroku + 'basicRoutine?routineId=' + routineId;
  const header = { header: { 'Content-Type': 'application/json' } };
  return dispatch => {
    dispatch(requestRoutineSet());
    return axios.get(url, header)
      .then(payload => {
        return dispatch(recievedRoutineSet(payload));
      });
  };
};
