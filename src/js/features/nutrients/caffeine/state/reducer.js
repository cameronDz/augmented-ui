import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.INVALIDATED_CAFFEINE_INTAKE:
      newState = { ...initialState, didInvalidate: true, isFetching: false };
      break;
    case types.REQUEST_CAFFEINE_INTAKE:
      newState = { ...state, didInvalidate: false, isFetching: true };
      break;
    case types.RECIEVE_CAFFEINE_INTAKE:
      newState = {
        ...state,
        currentPage: action.metaPayload._currentPage,
        didInvalidate: true,
        intakes: action.dataPayload,
        isFetching: false,
        lastUpdated: action.receivedAt,
        links: action.linkPayload,
        totalPages: action.metaPayload._totalPages,
        totalRecords: action.metaPayload._totalRecords
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
