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

const topic = handleActions({
  [action.selectTopic]: (state, { payload: { id } }) => id,
}, null);

const currentLessonId = handleActions({
  [action.getCurrentLessonId]: (state, { payload: { lessonId } }) => lessonId,
  [action.getNextLesson]: lessonId => lessonId + 1,
  [action.getPrevLesson]: lessonId => lessonId - 1,
},
null);

const currentParagraphId = handleActions({
  [action.getCurrentParagraphId]: (state, { payload: { paragraphId } }) => paragraphId,
  [action.getNextParagraph]: paragraphId => paragraphId + 1,
  [action.getPrevParagraph]: paragraphId => paragraphId - 1,
},
null);

export default combineReducers({
  fetchLessonsData,
  lessons,
  topic,
  currentParagraphId,
  currentLessonId,
});
