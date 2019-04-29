import { combineReducers } from 'redux';
import login from './login.js';
import registration from './registration.js';
import user from './user.js';
import stats from './stats.js';
import info from './info.js';

export default combineReducers({
  login,
  registration,
  user,
  stats,
  info,
});
