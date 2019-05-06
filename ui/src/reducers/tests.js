import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

const tests = handleActions({
  [action.fetchTestsSuccess]: (state, { payload: { data } }) => data,
}, []);


const fetchInit = {
  state: 'initial',
  source: null,
  errMessage: '',
};

const fetchDataTests = handleActions({
  [action.fetchDataRequest]: (state, { payload: { source } }) => ({
    state: 'requested',
    source,
    errMessage: '',
  }),
  [action.fetchTestsSuccess]: () => ({
    state: 'succeed',
    source: null,
    errMessage: '',
  }),
  [action.fetchTestsFailure]: (state, { payload: { e } }) => ({
    state: 'failed',
    source: null,
    errMessage: e.message,
  }),
}, fetchInit);

export default combineReducers({
  fetchDataTests,
  tests,
});
