import axios from 'axios';
import * as _types from './types';
import _config from '../../../../assets/config.json';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

const getNutrientList = () => {
  return (dispatch, _getDispatch) => {
    const url = `${_config.baseApiUrl}/object/caffeine`;
    dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_LIST_START));
    return axios.get(url, _config.baseApiConfig)
      .then((response) => {
        const nutrients = Array.isArray(response?.data?.payload?.caffeine) ? response.data.payload.caffeine : [];
        return dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_LIST_SUCCESS, { data: nutrients }));
      })
      .catch((error) => {
        dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_LIST_ERROR, { error }));
      })
      .finally(() => {
        dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_LIST_COMPLETED));
      });
  };
};

const clearNutrientReportPutSuccess = () => {
  return (dispatch, _getState) => {
    dispatch(emitDispatch(_types.CLEAR_PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS));
  };
};

const putNutrientReport = item => {
  return (dispatch, getState) => {
    const url = `${_config.baseApiUrl}/update/caffeine`;
    const userName = getState().auth.username || 'UNKNOWN';
    const nutrients = getState().nutrientsData.nutrientGetPayload || [];
    const newNutrients = { ...(item || {}), userName };
    const payload = [...nutrients, newNutrients];
    dispatch(emitDispatch(_types.PUT_REQUEST_NUTRIENTS_REPORT_START));
    return axios.put(url, payload, _config.baseApiConfig)
      .then((response) => {
        const isSuccessful = !!response?.data;
        const type = isSuccessful ? _types.PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS : _types.PUT_REQUEST_NUTRIENTS_REPORT_ERROR;
        const responsePayload = { data: response?.data || null, error: 'No data in response.' };
        dispatch(emitDispatch(type, responsePayload));
        if (isSuccessful) {
          return dispatch(getNutrientList());
        }
      })
      .catch((error) => {
        dispatch(emitDispatch(_types.PUT_REQUEST_NUTRIENTS_REPORT_ERROR, { error }));
      })
      .finally(() => {
        dispatch(emitDispatch(_types.PUT_REQUEST_NUTRIENTS_REPORT_COMPLETED));
      });
  };
};

export { clearNutrientReportPutSuccess, getNutrientList, putNutrientReport };
