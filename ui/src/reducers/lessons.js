import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

const lessons = handleActions({
  [action.fetchLessonsSuccess]: (state, { payload: { data } }) => data,
}, []);

const fetchInit = {
  state: 'initial',
  source: null,
  errMessage: '',
};

const fetchLessonsData = handleActions({
  [action.fetchLessonsRequest]: (state, { payload: { source } }) => ({
    state: 'requested',
    source,
    errMessage: '',
  }),
  [action.fetchLessonsSuccess]: () => ({
    state: 'succeed',
    source: null,
    errMessage: '',
  }),
  [action.fetchLessonsFailure]: (state, { payload: { e } }) => ({
    state: 'failed',
    source: null,
    errMessage: e.message,
  }),
}, fetchInit);
const collapse = handleActions({
  [action.showHideParagraphs]: (state, { payload: { lesson } }) => lesson,
}, {});

export default combineReducers({
  fetchLessonsData,
  lessons,
  collapse,
});
