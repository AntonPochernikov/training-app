import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

const tests = handleActions({
  [action.fetchTestsSuccess]: (state, { payload: { data } }) => data,
}, []);

const currentTestId = handleActions({
  [action.getCurrentTestId]: (state, { payload: { testId } }) => testId,
},
null);

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

const currentQuestionId = handleActions({
  [action.getCurrentQuestionId]: (state, { payload: { questionId } }) => questionId,
  [action.getNextQuestion]: questionId => questionId + 1,
},
1);

export default combineReducers({
  fetchDataTests,
  tests,
  currentTestId,
  currentQuestionId,
});
