/**
 *
 */
import {combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import cardioMachineSessionAction from './cardioMachineSessionAction';

export default combineReducers({
  simpleReducer,
  cardioMachineSessionAction
});

