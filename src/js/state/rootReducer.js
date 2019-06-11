import {combineReducers } from 'redux';
import cardioMachineSessionsReducer from './cardioMachineSessions/reducer.js';
import caffeineIntakeReducer from './caffeineIntake/reducer.js';

export default combineReducers({
  caffeineIntakes: caffeineIntakeReducer,
  cardioMachineSessions: cardioMachineSessionsReducer
});
