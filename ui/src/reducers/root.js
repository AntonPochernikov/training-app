import { combineReducers } from 'redux';
import training from './training.js';
import user from './user.js';

export default combineReducers({
  user,
  training,
});
