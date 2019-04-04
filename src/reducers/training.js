import { handleActions } from 'redux-actions';
import * as action from '../actions/index.js';

const init = {
  code: '',
};

export default handleActions({
  [action.changeCode]: (state, { payload: { code } }) => ({
    code,
  }),
}, init);
