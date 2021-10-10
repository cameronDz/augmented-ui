import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action = null) => {
  let newState;
  switch (action?.type) {
    // actions for getting nutrient list
    case _types.GET_REQUEST_NUTRIENTS_REPORTS_START:
      newState = { ...state, isLoadingReports: true };
      break;
    case _types.GET_REQUEST_NUTRIENTS_REPORTS_SUCCESS:
      newState = { ...state, reportsGetError: null, reportsPayload: action.data };
      break;
    case _types.GET_REQUEST_NUTRIENTS_REPORTS_ERROR:
      newState = { ...state, reportsGetError: action.error, reportsPayload: null };
      break;
    case _types.GET_REQUEST_NUTRIENTS_REPORTS_COMPLETED:
      newState = { ...state, isLoadingReports: false };
      break;

    // actions for getting nutrient types
    case _types.GET_REQUEST_NUTRIENTS_TYPES_START:
      newState = { ...state, isLoadingTypes: true };
      break;
    case _types.GET_REQUEST_NUTRIENTS_TYPES_SUCCESS:
      newState = { ...state, typesGetError: null, typesPayload: action.data };
      break;
    case _types.GET_REQUEST_NUTRIENTS_TYPES_ERROR:
      newState = { ...state, typesGetError: action.error, typesPayload: null };
      break;
    case _types.GET_REQUEST_NUTRIENTS_TYPES_COMPLETED:
      newState = { ...state, isLoadingTypes: false };
      break;

    // actions for putting a new nutrient report
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_START:
      newState = { ...state, isProcessingReport: true };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS:
      newState = { ...state, reportPutError: null, reportPutPayload: action.data };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_ERROR:
      newState = { ...state, reportPutError: action.error, reportPutPayload: null };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_COMPLETED:
      newState = { ...state, isProcessingReport: false };
      break;
    case _types.CLEAR_PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS:
      newState = { ...state, reportPutError: null, reportPutPayload: null };
      break;

    // actions for putting a new nutrient type
    case _types.PUT_REQUEST_NUTRIENTS_TYPE_START:
      newState = { ...state, isProcessingType: true };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_TYPE_SUCCESS:
      newState = { ...state, typePutError: null, typePutPayload: action.data };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_TYPE_ERROR:
      newState = { ...state, typePutError: action.error, typePutPayload: null };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_TYPE_COMPLETED:
      newState = { ...state, isProcessingType: false };
      break;
    case _types.CLEAR_PUT_REQUEST_NUTRIENTS_TYPE_SUCCESS:
      newState = { ...state, typePutError: null, typePutPayload: null };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
