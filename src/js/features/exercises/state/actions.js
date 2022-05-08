import axios from 'axios';
import _config from '../../../../assets/config.json';
import * as _types from './types';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

const getExerciseList = () => {
  return (dispatch, _getState) => {
    const url = `${_config.baseApiUrl}/object/exercises`;
    dispatch(emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_START));
    return axios
      .get(url, _config.baseApiConfig)
      .then((response) => {
        const exercises = Array.isArray(response?.data?.payload?.exercises)
          ? response.data.payload.exercises
          : [];
        return dispatch(
          emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_SUCCESS, {
            data: exercises
          })
        );
      })
      .catch((error) => {
        return dispatch(
          emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_ERROR, { error })
        );
      })
      .finally(() => {
        return dispatch(
          emitDispatch(_types.GET_REQUEST_EXERCISE_LIST_COMPLETED)
        );
      });
  };
};

const putExercise = (item) => {
  return (dispatch, getState) => {
    const url = `${_config.baseApiUrl}/update/exercises`;
    const exercises = getState().exercises.exerciseGetPayload || [];
    const username = getState().auth.username || 'UNKNOWN';
    const newExercise = { ...(item || {}), username };
    const payload = { exercises: [...exercises, newExercise] };
    dispatch(emitDispatch(_types.PUT_REQUEST_EXERCISE_ITEM_START));
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
          ? _types.PUT_REQUEST_EXERCISE_ITEM_SUCCESS
          : _types.PUT_REQUEST_EXERCISE_ITEM_ERROR;
        dispatch(emitDispatch(type, responsePayload));
        if (isValidResponse) {
          dispatch(getExerciseList());
        }
      })
      .catch((error) => {
        dispatch(
          emitDispatch(_types.PUT_REQUEST_EXERCISE_ITEM_ERROR, { error })
        );
      })
      .finally(() => {
        dispatch(emitDispatch(_types.PUT_REQUEST_EXERCISE_ITEM_COMPLETED));
      });
  };
};

const clearSuccessSaveFlag = () => {
  return (dispatch, _getState) => {
    dispatch(emitDispatch(_types.PUT_REQUEST_EXERCISE_ITEM_CLEAR_SUCCESS_FLAG));
  };
};

export { clearSuccessSaveFlag, getExerciseList, putExercise };
