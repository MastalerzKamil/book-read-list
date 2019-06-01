import { combineReducers } from 'redux';
import updateListReducer from './updateListReducer';

const rootReducer = combineReducers({
  updateListReducer,
});

export default rootReducer;