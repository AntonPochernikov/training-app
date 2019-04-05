import { createAction } from 'redux-actions';

export const changeCode = createAction('CODE/CHANGE');

export const loadDataRequest = createAction('CODE/CHANGE');
export const loadDataSuccess = createAction('CODE/CHANGE');
export const loadDataFailure = createAction('CODE/CHANGE');
export const loadData = () => async (dispatch) => {
  const source = null;
  dispatch(loadDataRequest({ source }));
  try {
    const data = await import(/* webpackChunkName: "exercises" */ '../data/exercises.json');
    dispatch(loadDataSuccess({ data: data.default }));
  } catch (e) {
    console.log(e);
    dispatch(loadDataFailure({ error: e }));
  }
};
