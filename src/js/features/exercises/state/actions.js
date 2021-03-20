import axios from 'axios';
import * as _config from '../../../../assets/config.json';
import * as _types from './types';

const httpHeader = { header: { 'Content-Type': 'application/json' } };
const exercisesGetPath = 'json/object/exercises';
const exercisesPutPath = 'json/update/exercises';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

const getExerciseList = () => {
  return (dispatch) => {
    const url = _config.apis.heroku + exercisesGetPath;
    dispatch(emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_START));
    return axios.get(url, httpHeader)
      .then((response) => {
        const exercises = !!response && !!response.data && response.data.payload && Array.isArray(response.data.payload.exercises) ? response.data.payload.exercises : [];
        return dispatch(emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_SUCCESS, { data: exercises }));
      })
      .catch((error) => {
        return dispatch(emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_ERROR, { error }));
      })
      .finally(() => {
        return dispatch(emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_COMPLETED));
      });
  };
};

const putExercise = payload => {
  return (dispatch) => {
    const url = _config.apis.heroku + exercisesPutPath;
    dispatch(emitDispatch(_types.PUT_REQUEST_EXERCISE_ITEM_START));
    return axios.put(url, payload, httpHeader)
      .then((response) => {
        const type = !!response && !!response.data ? _types.PUT_REQUEST_EXERCISE_ITEM_SUCCESS : _types.PUT_REQUEST_EXERCISE_ITEM_ERROR;
        const payload = {
          data: !!response && !!response.data ? response.data : null,
          error: 'No data in response.'
        };
        return dispatch(emitDispatch(type, payload));
      })
      .catch((error) => {
        return dispatch(emitDispatch(_types.PUT_REQUEST_EXERCISE_ITEM_ERROR, { error }));
      })
      .finally(() => {
        return dispatch(emitDispatch(_types.PUT_REQUEST_EXERCISE_ITEM_COMPLETED));
      });
  };
};

export { getExerciseList, putExercise };
