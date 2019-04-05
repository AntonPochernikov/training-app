import { handleActions } from 'redux-actions';
import * as action from '../actions/index.js';

const init = {
  code: '',
  exercises: [],
};

export default handleActions({
  [action.changeCode]: (state, { payload: { code } }) => ({
    ...state,
    code,
  }),
  [action.fetchDataSuccess]: (state, { payload: { data } }) => ({
    ...state,
    exercises: data,
  }),
}, init);
