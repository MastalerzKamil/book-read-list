import { combineReducers } from 'redux';
import fetchListReducer from './fetchListReducer';

const rootReducer = combineReducers({
  fetchListReducer,
});

export default rootReducer;