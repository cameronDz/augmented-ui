import {combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import cardioMachineSessionReducer from './cardioMachineSessionReducer';

/**
 *
 */
export default combineReducers({
  simple: simpleReducer,
  cardioMachineSessions: cardioMachineSessionReducer
});
  