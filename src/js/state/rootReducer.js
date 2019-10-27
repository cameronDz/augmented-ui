import { combineReducers } from 'redux';
import cardioMachineSessionsReducer from '../features/sessions/state/reducer';
import caffeineIntakeReducer from '../features/nutrients/caffeine/state/reducer.js.js.js.js';

export default combineReducers({
  caffeineIntakes: caffeineIntakeReducer,
  cardioMachineSessions: cardioMachineSessionsReducer
});
