import initialState from './initialState';
import * as _types from '../types';

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case _types.UPDATE_CARDIO_MACHINE_SESSION_POST_REQUEST:
      newState = { ...state, form: { ...state.form, ...action.update } };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default reducer;
