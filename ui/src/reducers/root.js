import { combineReducers } from 'redux';
import training from './training.js';
import tests from './tests.js';
import lessons from './lessons.js';
import common from './common.js';
import user from './user/index.js';

export default combineReducers({
  training,
  tests,
  lessons,
  common,
  user,
});
