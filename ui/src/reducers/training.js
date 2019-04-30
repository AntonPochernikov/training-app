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
  failedQuantity: null,
};

const testSolution = handleActions({
  [action.fetchTestRequest]: state => ({
    ...state,
    state: 'requested',
    failedQuantity: null,
  }),
  [action.fetchTestFailure]: (state, { payload: failedQuantity }) => ({
    ...state,
    state: 'failed',
    failedQuantity,
  }),
}, fetchTest);

export default combineReducers({
  code,
  exercises,
  currentTaskId,
  dataFetch,
  testSolution,
});
