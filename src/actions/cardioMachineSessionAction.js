import { NEW_CARDIO_MACHINE_SESSION, UPDATE_CARDIO_MACHINE_LIST } from './actionTypes';

/**
 * 
 */
export const cardioMachineSessionAction = () => dispatch => {
  dispatch({
    type: NEW_CARDIO_MACHINE_SESSION,
    payload: 'result_of_simple_action'
  });
}
