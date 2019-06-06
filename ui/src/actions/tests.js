import { createAction } from 'redux-actions';

export const fetchTestsRequest = createAction('TESTS/FETCH/REQUEST');
export const fetchTestsSuccess = createAction('TESTS/FETCH/SUCCESS');
export const fetchTestsFailure = createAction('TESTS/FETCH/FAILURE');

export const fetchTestsData = () => async (dispatch) => {
  const source = null;
  dispatch(fetchTestsRequest({ source }));
  try {
    const data = await import('../data/tests.json');
    dispatch(fetchTestsSuccess({ data: data.default }));
  } catch (e) {
    console.log(e);
    dispatch(fetchTestsFailure({ error: e }));
  }
};

export const getCurrentTestId = createAction('TEST/CURRENT/ID/GET');
export const getCurrentQuestionId = createAction('QUESTION/CURRENT/ID/GET');
export const getNextQuestion = createAction('NEXT/QUESTION/GET');
