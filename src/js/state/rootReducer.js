import {combineReducers } from 'redux';
import cardioMachineSessionsReducer from './cardioMachineSessions/reducer.js';

export default combineReducers({ cardioMachineSessions: cardioMachineSessionsReducer });
