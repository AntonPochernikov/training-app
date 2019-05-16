import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../../actions';

const init = {};

const user = {
  email: '',
  password: '',
};

const formFields = handleActions({
  [action.changeEmail]: (state, { payload: { email } }) => ({
    ...state,
    email,
  }),
  [action.changePassword]: (state, { payload: { password } }) => ({
    ...state,
    password,
  }),
}, user);

const loginSuccess = handleActions({
  [action.loginSuccess]: (state, { payload: { name } }) => name,
}, null);

export default combineReducers({
  init,
  user,
  formFields,
  loginSuccess,
});
