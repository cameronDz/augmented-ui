import { combineReducers } from 'redux';
import cardioMachineSessionsReducer from '../features/sessions/state/reducer';
import cardioMachineSessionPostReducer from '../features/sessions/state/creator/reducer';
import caffeineIntakeReducer from '../features/nutrients/caffeine/state/reducer';
import exerciseListReducer from '../features/exercises/state/reducer';
import rountineReducer from '../features/routines/state/reducer';

export default combineReducers({
  caffeineIntakes: caffeineIntakeReducer,
  cardioMachineSessions: cardioMachineSessionsReducer,
  cardioMachineSessionPost: cardioMachineSessionPostReducer,
  exercises: exerciseListReducer,
  routine: rountineReducer
});
