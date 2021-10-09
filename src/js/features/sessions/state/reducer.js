import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action = null) => {
  let newState;
  switch (action?.type) {
    // actions for getting cardio sessions list
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_START:
      newState = { ...state, cardioSessionGetError: null, isLoadingCardioSessions: true };
      break;
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_SUCCESS:
      newState = { ...state, cardioSessionGetError: null, cardioSessionGetPayload: action.data };
      break;
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_ERROR:
      newState = { ...state, cardioSessionGetError: action.error };
      break;
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_COMPLETED:
      newState = { ...state, isLoadingCardioSessions: false };
      break;
    // actions for puting a new cardio session
    case _types.PUT_REQUEST_CARDIO_SESSION_ITEM_START:
      newState = { ...state, cardioSessionPutError: null, cardioSessionPutPayload: null, isProcessingCardioSession: true };
      break;
    case _types.PUT_REQUEST_CARDIO_SESSION_ITEM_SUCCESS:
      newState = { ...state, cardioSessionPutError: null, cardioSessionPutPayload: action.data };
      break;
    case _types.PUT_REQUEST_CARDIO_SESSION_ITEM_ERROR:
      newState = { ...state, cardioSessionPutError: action.error, cardioSessionPutPayload: null };
      break;
    case _types.PUT_REQUEST_CARDIO_SESSION_ITEM_COMPLETED:
      newState = { ...state, isProcessingCardioSession: false };
      break;
    case _types.CLEAR_PUT_REQUEST_CARDIO_SESSION_STATUS:
      newState = { ...state, cardioSessionPutError: null, cardioSessionPutPayload: null };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
