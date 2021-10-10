import initialState from './initialState';
import * as _types from './types';

const reducer = (state = initialState, action = null) => {
  let newState;
  switch (action?.type) {
    // actions for getting nutrient list
    case _types.GET_REQUEST_NUTRIENTS_LIST_START:
      newState = { ...state, nutrientGetError: null, isLoadingNutrient: true };
      break;
    case _types.GET_REQUEST_NUTRIENTS_LIST_SUCCESS:
      newState = { ...state, nutrientGetError: null, nutrientGetPayload: action.data };
      break;
    case _types.GET_REQUEST_NUTRIENTS_LIST_ERROR:
      newState = { ...state, nutrientGetError: action.error };
      break;
    case _types.GET_REQUEST_NUTRIENTS_LIST_COMPLETED:
      newState = { ...state, isLoadingNutrient: false };
      break;
    // actions for puting a new nutrient
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_START:
      newState = { ...state, nutrientReportPutError: null, nutrientReportPutPayload: null, isProcessingNutrientReport: true };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS:
      newState = { ...state, nutrientReportPutError: null, nutrientReportPutPayload: action.data };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_ERROR:
      newState = { ...state, nutrientReportPutError: action.error, nutrientReportPutPayload: null };
      break;
    case _types.PUT_REQUEST_NUTRIENTS_REPORT_COMPLETED:
      newState = { ...state, isProcessingNutrientReport: false };
      break;
    case _types.CLEAR_PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS:
      newState = { ...state, nutrientReportPutError: null, nutrientReportPutPayload: null };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
