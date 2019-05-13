import { combineReducers } from 'redux';
import login from './login.js';
import registration from './registration.js';
import user from './user.js';
import stats from './stats.js';
import info from './info.js';

// сделать все редьюсеры юзера в этом файле
// reducer`ы: для формы логина, для состояния логина, для текущего пользователя

export default combineReducers({
  login,
  registration,
  user,
  stats,
  info,
});
