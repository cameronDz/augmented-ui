import * as types from './types';
// import axios from 'axios';

export const fetchRoutineSets = (requestUrl = '') => {
  return {
    requestUrl,
    type: types.REQUEST_ROUTINES_SETS
   };
};

export const invalidateRoutineSets = () => {
  return { type: types.INVALIDATED_CARDIO_MACHINE_SESSIONS };
};

export const recieveCardioMachineSessions = (payload = {}) => {
  return {
    ...payload,
    type: types.RECIEVE_CARDIO_MACHINE_SESSIONS
  };
};
