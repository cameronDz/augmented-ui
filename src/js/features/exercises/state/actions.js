import axios from 'axios';
import * as _config from '../../../../../assets/data/config.json';
import * as _types from './types';

const recieveExerciseList = data => {
  return { data, type: _types.RECIEVE_EXERCISE_LIST };
};

const requestExerciseList = () => {
  return dispatch => {
    dispatch({ type: _type.LOADING_EXERCISE_LIST });
    const config = { header: { 'Content-Type': 'application/json' } };
    return axios.get(url, config).then(payload => {
      dispatch(recieveExerciseList(payload.data));
    });
  };
};

// actions for creating new exercise

const recieveNewExerciseResponse = response => {
  return { response, type: _types.RECIEVE_NEW_EXERCISE_RESPONSE };
};

const createNewExercisePost = payload => {
  dispatch({ type: _types.CREATE_NEW_EXERCISE_POST });
  const config = { header: { 'Content-Type': 'application/json' } };
  return axios.post(url, config, payload).then(response => {
    dispatch(recieveNewExerciseResponse(response));
  });
};

export { createNewExercisePost, requestExerciseList };
