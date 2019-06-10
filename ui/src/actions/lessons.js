// здесь будут action по lessons
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
export const showHideParagraphs = createAction('PARAGRAPHS/SHOW/HIDE');
