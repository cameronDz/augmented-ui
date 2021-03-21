import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case _types.INVALIDATED_CARDIO_MACHINE_SESSIONS:
      newState = { ...initialState, didInvalidate: true, isFetching: false };
      break;
    case _types.REQUEST_CARDIO_MACHINE_SESSIONS:
      newState = { ...state, didInvalidate: false, isFetching: true };
      break;
    case _types.RECIEVE_CARDIO_MACHINE_SESSIONS:
      newState = {
        ...state,
        currentPage: action.metaPayload._currentPage,
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.receivedAt,
        links: action.linkPayload,
        sessions: action.dataPayload,
        totalPages: action.metaPayload._totalPages,
        totalRecords: action.metaPayload._totalRecords
      };
      break;
    // actions for getting cardio sessions list
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_START:
      newState = { ...state, cardioSessionGetError: null, isLoadingCardioSession: true };
      break;
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_SUCCESS:
      newState = { ...state, cardioSessionGetError: null, cardioSessionGetPayload: action.data };
      break;
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_ERROR:
      newState = { ...state, cardioSessionGetError: action.error };
      break;
    case _types.GET_REQUEST_CARDIO_SESSION_LIST_COMPLETED:
      newState = { ...state, isLoadingCardioSession: false };
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
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
