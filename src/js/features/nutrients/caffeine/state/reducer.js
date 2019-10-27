import initialState from './initialState';
import * as types from './types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.INVALIDATED_CAFFEINE_INTAKE:
      newState = { ...initialState };
      break;
    case types.REQUEST_CAFFEINE_INTAKE:
      newState = { ...state, isFetching: true };
      break;
    case types.RECIEVE_CAFFEINE_INTAKE:
      newState = {
        ...state,
        intakes: action.dataPayload,
        totalRecords: action.metaPayload._totalRecords,
        totalPages: action.metaPayload._totalPages,
        currentPage: action.metaPayload._currentPage,
        links: action.linkPayload,
        isFetching: false,
        didInvalidate: true,
        lastUpdated: action.receivedAt
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default reducer;
