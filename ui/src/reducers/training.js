import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions/index.js';

const code = handleActions({
  [action.changeCode]: (state, { payload: { value } }) => value,
}, '');

const exercises = handleActions({
  [action.fetchDataSuccess]: (state, { payload: { data } }) => data,
}, []);

const currentTask = handleActions({
  [action.getCurrentTask]: (state, { payload: { taskId } }) => taskId,
}, null);

const modal = handleActions({
  [action.showModal]: (state, { payload: { name } }) => name,
  [action.hideModal]: () => null,
}, null);

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

const fetchInit = {
  state: 'initial',
  source: null,
  errMessage: '',
};

const dataFetch = handleActions({
  [action.fetchDataRequest]: (state, { payload: { source } }) => ({
    state: 'requested',
    source,
    errMessage: '',
  }),
  [action.fetchDataSuccess]: () => ({
    state: 'succeed',
    source: null,
    errMessage: '',
  }),
  [action.fetchDataFailure]: (state, { payload: { e } }) => ({
    state: 'failed',
    source: null,
    errMessage: e.message,
  }),
}, fetchInit);

export default combineReducers({
  code,
  exercises,
  currentTask,
  dataFetch,
  modal,
  formFields,
  loginSuccess,
});
