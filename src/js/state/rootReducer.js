import { combineReducers } from 'redux';
import cardioMachineSessionsReducer from '../features/sessions/state/reducer';
import caffeineIntakeReducer from '../features/nutrients/caffeine/state/reducer';

export default combineReducers({
  caffeineIntakes: caffeineIntakeReducer,
  cardioMachineSessions: cardioMachineSessionsReducer
});
