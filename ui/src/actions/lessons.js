import { createAction } from 'redux-actions';

export const fetchLessonsRequest = createAction('LESSONS/FETCH/REQUEST');
export const fetchLessonsSuccess = createAction('LESSONS/FETCH/SUCCESS');
export const fetchLessonsFailure = createAction('LESSONS/FETCH/FAILURE');

export const fetchLessonsData = () => async (dispatch) => {
  const source = null;
  dispatch(fetchLessonsRequest({ source }));
  try {
    const data = await import('../data/lessons.json');
    dispatch(fetchLessonsSuccess({ data: data.default }));
  } catch (e) {
    console.log(e);
    dispatch(fetchLessonsFailure({ error: e }));
  }
};
export const selectTopic = createAction('TOPIC/SELECT');
export const getCurrentParagraphId = createAction('PARAGRAPH/CURRENT/ID/GET');
export const getCurrentLessonId = createAction('LESSON/CURRENT/ID/GET');
export const getNextLesson = createAction('LESSON/NEXT/GET');
export const getPrevLesson = createAction('LESSON/PREV/GET');
export const getNextParagraph = createAction('PARAGRAPH/NEXT/GET');
export const getPrevParagraph = createAction('PARAGRAPH/PREV/GET');
