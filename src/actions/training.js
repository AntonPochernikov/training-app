import { createAction } from 'redux-actions';

export const changeCode = createAction('CODE/CHANGE');

export const fetchDataRequest = createAction('CODE/CHANGE');
export const fetchDataSuccess = createAction('CODE/CHANGE');
export const fetchDataFailure = createAction('CODE/CHANGE');
export const fetchData = () => async (dispatch) => {
  const source = null;
  dispatch(fetchDataRequest({ source }));
  try {
    const data = await import(/* webpackChunkName: "exercises" */ '../data/exercises.json');
    dispatch(fetchDataSuccess({ data: data.default }));
  } catch (e) {
    console.log(e);
    dispatch(fetchDataFailure({ error: e }));
  }
};
