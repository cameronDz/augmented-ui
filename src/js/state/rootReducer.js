import { combineReducers } from 'redux';
import authReducer from '../auth/state/reducer';
import cardioMachineSessionsReducer from '../features/sessions/state/reducer';
import caffeineIntakeReducer from '../features/nutrients/caffeine/state/reducer';
import exerciseListReducer from '../features/exercises/state/reducer';
import rountineReducer from '../features/routines/state/reducer';

export default combineReducers({
  auth: authReducer,
  caffeineIntakes: caffeineIntakeReducer,
  cardioMachineSessions: cardioMachineSessionsReducer,
  exercises: exerciseListReducer,
  routine: rountineReducer
});
