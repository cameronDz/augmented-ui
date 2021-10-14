import axios from 'axios';
import * as _types from './types';
import _config from '../../../../assets/config.json';

const emitDispatch = (type, actions = {}) => {
  return { type, ...actions };
};

const getNutrientReports = () => {
  return (dispatch, _getState) => {
    const url = `${_config.baseApiUrl}/object/nutrientReports`;
    dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_REPORTS_START));
    return axios
      .get(url, _config.baseApiConfig)
      .then((response) => {
        const nutrients = Array.isArray(response?.data?.payload?.reports)
          ? response.data.payload.reports
          : [];
        return dispatch(
          emitDispatch(_types.GET_REQUEST_NUTRIENTS_REPORTS_SUCCESS, {
            data: nutrients
          })
        );
      })
      .catch((error) => {
        dispatch(
          emitDispatch(_types.GET_REQUEST_NUTRIENTS_REPORTS_ERROR, { error })
        );
      })
      .finally(() => {
        dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_REPORTS_COMPLETED));
      });
  };
};

const getNutrientTypes = () => {
  return (dispatch, _getState) => {
    const url = `${_config.baseApiUrl}/object/nutrientTypes`;
    dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_TYPES_START));
    return axios
      .get(url, _config.baseApiConfig)
      .then((response) => {
        const types = Array.isArray(response?.data?.payload?.types)
          ? response.data.payload.types
          : [];
        dispatch(
          emitDispatch(_types.GET_REQUEST_NUTRIENTS_TYPES_SUCCESS, {
            data: types
          })
        );
      })
      .catch((error) => {
        dispatch(
          emitDispatch(_types.GET_REQUEST_NUTRIENTS_TYPES_ERROR, { error })
        );
      })
      .finally(() => {
        dispatch(emitDispatch(_types.GET_REQUEST_NUTRIENTS_TYPES_COMPLETED));
      });
  };
};

const clearNutrientReportPutSuccess = () => {
  return (dispatch, _getState) => {
    dispatch(emitDispatch(_types.CLEAR_PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS));
  };
};

const clearNutrientTypePutSuccess = () => {
  return (dispatch, _getState) => {
    dispatch(emitDispatch(_types.CLEAR_PUT_REQUEST_NUTRIENTS_TYPE_SUCCESS));
  };
};

const putNutrientReport = (item) => {
  return (dispatch, getState) => {
    const url = `${_config.baseApiUrl}/update/nutrientReports`;
    const userName = getState().auth.username || 'UNKNOWN';
    const nutrients = getState().nutrientsData.reportsPayload || [];
    const newNutrients = { ...(item || {}), userName };
    const payload = { reports: [...nutrients, newNutrients] };
    dispatch(emitDispatch(_types.PUT_REQUEST_NUTRIENTS_REPORT_START));
    return axios
      .put(url, payload, _config.baseApiConfig)
      .then((response) => {
        const isSuccessful = !!response?.data;
        const type = isSuccessful
          ? _types.PUT_REQUEST_NUTRIENTS_REPORT_SUCCESS
          : _types.PUT_REQUEST_NUTRIENTS_REPORT_ERROR;
        const responsePayload = {
          data: response?.data || null,
          error: 'No data in response.'
        };
        dispatch(emitDispatch(type, responsePayload));
        if (isSuccessful) {
          return dispatch(getNutrientReports());
        }
      })
      .catch((error) => {
        dispatch(
          emitDispatch(_types.PUT_REQUEST_NUTRIENTS_REPORT_ERROR, { error })
        );
      })
      .finally(() => {
        dispatch(emitDispatch(_types.PUT_REQUEST_NUTRIENTS_REPORT_COMPLETED));
      });
  };
};

const putNutrientType = (item) => {
  return (dispatch, getState) => {
    const url = `${_config.baseApiUrl}/update/nutrientTypes`;
    const userName = getState().auth.username || 'UNKNOWN';
    const types = getState().nutrientsData.typesPayload || [];
    const newType = { ...(item || {}), userName };
    const payload = { types: [...types, newType] };
    dispatch(emitDispatch(_types.PUT_REQUEST_NUTRIENTS_TYPE_START));
    return axios
      .put(url, payload, _config.baseApiConfig)
      .then((response) => {
        const isSuccessful = !!response?.data;
        const type = isSuccessful
          ? _types.PUT_REQUEST_NUTRIENTS_TYPE_SUCCESS
          : _types.PUT_REQUEST_NUTRIENTS_TYPE_ERROR;
        const responsePayload = {
          data: response?.data || null,
          error: 'No data in response.'
        };
        dispatch(emitDispatch(type, responsePayload));
        if (isSuccessful) {
          return dispatch(getNutrientTypes());
        }
      })
      .catch((error) => {
        dispatch(
          emitDispatch(_types.PUT_REQUEST_NUTRIENTS_TYPE_ERROR, { error })
        );
      })
      .finally(() => {
        dispatch(emitDispatch(_types.PUT_REQUEST_NUTRIENTS_TYPE_COMPLETED));
      });
  };
};

export {
  clearNutrientReportPutSuccess,
  clearNutrientTypePutSuccess,
  getNutrientReports,
  getNutrientTypes,
  putNutrientReport,
  putNutrientType
};
