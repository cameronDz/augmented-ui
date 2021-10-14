import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action = null) => {
  let newState;
  switch (action.type) {
    // actions for getting exercise list
    case _types.GET_REQUEST_EXERCISE_LIST_START:
      newState = { ...state, exerciseGetError: null, isLoadingExercises: true };
      break;
    case _types.GET_REQUEST_EXERCISE_LIST_SUCCESS:
      newState = {
        ...state,
        exerciseGetError: null,
        exerciseGetPayload: action.data
      };
      break;
    case _types.GET_REQUEST_EXERCISE_LIST_ERROR:
      newState = { ...state, exerciseGetError: action.error };
      break;
    case _types.GET_REQUEST_EXERCISE_LIST_COMPLETED:
      newState = { ...state, isLoadingExercises: false };
      break;
    // actions for puting a new exercise
    case _types.PUT_REQUEST_EXERCISE_ITEM_START:
      newState = {
        ...state,
        exercisePostError: null,
        exercisePostPayload: null,
        isProcessingExercise: true
      };
      break;
    case _types.PUT_REQUEST_EXERCISE_ITEM_SUCCESS:
      newState = {
        ...state,
        exercisePostError: null,
        exercisePostPayload: action.data
      };
      break;
    case _types.PUT_REQUEST_EXERCISE_ITEM_ERROR:
      newState = {
        ...state,
        exercisePostError: action.error,
        exercisePostPayload: null
      };
      break;
    case _types.PUT_REQUEST_EXERCISE_ITEM_COMPLETED:
      newState = { ...state, isProcessingExercise: false };
      break;
    case _types.PUT_REQUEST_EXERCISE_ITEM_CLEAR_SUCCESS_FLAG:
      newState = { ...state, exercisePostPayload: null };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
