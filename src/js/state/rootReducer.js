import { combineReducers } from 'redux';
import cardioMachineSessionsReducer from '../features/sessions/state/reducer';
import caffeineIntakeReducer from './caffeineIntake/reducer.js';

export default combineReducers({
  caffeineIntakes: caffeineIntakeReducer,
  cardioMachineSessions: cardioMachineSessionsReducer
});
