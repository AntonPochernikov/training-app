import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

const code = handleActions({
  [action.changeCode]: (state, { payload: { value } }) => value,
}, '');

const exercises = handleActions({
  [action.fetchDataSuccess]: (state, { payload: { data } }) => data,
}, []);

const currentTaskId = handleActions({
  [action.getCurrentTaskId]: (state, { payload: { taskId } }) => taskId,
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

const fetchTest = {
  state: 'initial',
};

const testSolution = handleActions({
  [action.fetchTestRequest]: () => ({
    state: 'requested',
  }),
  [action.fetchTestSuccess]: () => ({
    state: 'passed',
  }),
  [action.fetchTestFailure]: () => ({
    state: 'failed',
  }),
}, fetchTest);

export default combineReducers({
  code,
  exercises,
  currentTaskId,
  dataFetch,
  testSolution,
});
