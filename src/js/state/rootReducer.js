import { combineReducers } from 'redux';
import cardioMachineSessionsReducer from '../features/sessions/state/reducer';
import caffeineIntakeReducer from '../features/nutrients/caffeine/state/reducer';
import exerciseListReducer from '../features/exercises/state/reducer';
import rountineReducer from '../features/routines/state/reducer';

export default combineReducers({
  caffeineIntakes: caffeineIntakeReducer,
  cardioMachineSessions: cardioMachineSessionsReducer,
  exercises: exerciseListReducer,
  routine: rountineReducer
});
