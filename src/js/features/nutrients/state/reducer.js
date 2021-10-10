import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action = null) => {
  let newState;
  switch (action?.type) {
    // actions for getting caffeines list
    case _types.GET_REQUEST_CAFFEINE_LIST_START:
      newState = { ...state, caffeineGetError: null, isLoadingCaffeine: true };
      break;
    case _types.GET_REQUEST_CAFFEINE_LIST_SUCCESS:
      newState = { ...state, caffeineGetError: null, caffeineGetPayload: action.data };
      break;
    case _types.GET_REQUEST_CAFFEINE_LIST_ERROR:
      newState = { ...state, caffeineGetError: action.error };
      break;
    case _types.GET_REQUEST_CAFFEINE_LIST_COMPLETED:
      newState = { ...state, isLoadingCaffeine: false };
      break;
    // actions for puting a new caffeine
    case _types.PUT_REQUEST_CAFFEINE_ITEM_START:
      newState = { ...state, caffeinePostError: null, caffeinePostPayload: null, isProcessingCaffeine: true };
      break;
    case _types.PUT_REQUEST_CAFFEINE_ITEM_SUCCESS:
      newState = { ...state, caffeinePostError: null, caffeinePostPayload: action.data };
      break;
    case _types.PUT_REQUEST_CAFFEINE_ITEM_ERROR:
      newState = { ...state, caffeinePostError: action.error, caffeinePostPayload: null };
      break;
    case _types.PUT_REQUEST_CAFFEINE_ITEM_COMPLETED:
      newState = { ...state, isProcessingCaffeine: false };
      break;
    case _types.CLEAR_PUT_REQUEST_CAFFEINE_ITEM_SUCCESS:
      newState = { ...state, caffeinePostError: null, caffeinePostPayload: null };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
