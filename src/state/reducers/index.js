import { combineReducers } from 'redux';
import appReducer from './app.reducer';
import localReducer from './local.reducer';

const rootReducer = combineReducers({
  appReducer,
  localReducer,
});
export default rootReducer;
