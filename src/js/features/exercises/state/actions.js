import * as _types from './types';

// actions for getting exercise list
const invalidateExerciseList = () => {
  return { type: _types.INVALIDATED_EXERCISE_LIST };
};

const loadExerciseList = () => {
  return { type: _types.LOADING_EXERCISE_LIST };
};

const recieveExerciseList = () => {
  return { type: _types.RECIEVE_EXERCISE_LIST };
};

const requestExerciseList = () => {
  return { type: _types.REQUEST_EXERCISE_LIST };
};

// actions for creating new exercise
const createNewExercisePost = () => {
  return { type: _types.CREATE_NEW_EXERCISE_POST };
};

const recieveNewExerciseResponse = () => {
  return { type: _types.RECIEVE_NEW_EXERCISE_RESPONSE };
};

const waitForNewExerciseResponse = () => {
  return { type: _types.WAIT_NEW_EXERCISE_RESPONSE };
};
