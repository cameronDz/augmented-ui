import * as _types from '../types';

const updateCardioMachineSessionPostRequest = update => {
  return { update, type: _types.UPDATE_CARDIO_MACHINE_SESSION_POST_REQUEST };
};

export const updateCardioMachineSessionPostForm = update => {
  return dispatch => {
    dispatch(updateCardioMachineSessionPostRequest(update));
  };
};
