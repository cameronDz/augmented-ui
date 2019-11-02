import axios from 'axios';
import * as _config from '../../../../../assets/data/config.json';
import * as _types from './types';

const recieveExerciseList = data => {
  const processResponseExercise = response => {
    return (Array.isArray(response.data)) && response.data.map((item, index) => {
      const id = (item.exerciseId) ? item.exerciseId : -1;
      const title = (item.name) ? item.name : '';
      return { id, title, key: index };
    });
  };
  return { data: processResponseExercise(data), type: _types.RECIEVE_EXERCISE_LIST };
};

const loadExerciseList = () => {
  return { type: _types.REQUESTING_EXERCISE_LIST };
};

const requestExerciseList = () => {
  return dispatch => {
    dispatch(loadExerciseList());
    const config = { header: { 'Content-Type': 'application/json' } };
    const url = _config.apis.azure + 'exercises';
    return axios.get(url, config).then(payload => {
      dispatch(recieveExerciseList(payload));
    });
  };
};

// actions for creating new exercise
const recieveNewExerciseResponse = () => {
  return { type: _types.RECIEVE_NEW_EXERCISE_RESPONSE };
};
const recieveSuccessfulNewExerciseResponse = () => {
  return { type: _types.RECIEVE_SUCCESSFUL_NEW_EXERCISE_RESPONSE };
};

const createNewExercisePost = payload => {
  return dispatch => {
    dispatch({ type: _types.CREATE_NEW_EXERCISE_POST });
    const config = { header: { 'Content-Type': 'application/json' } };
    const url = _config.apis.azure + 'exercises';
    return axios.post(url, payload, config)
      .then(() => {
        dispatch(recieveNewExerciseResponse());
      })
      .catch(error => {
        console.error('posting issue', error);
      })
      .finally(() => {
        dispatch(recieveSuccessfulNewExerciseResponse());
      });
  };
};

export { createNewExercisePost, requestExerciseList };
