import { createAction } from 'redux-actions';

export const changeCode = createAction('CODE/CHANGE');
export const getCurrentTask = createAction('TASK/ID/GET');

export const fetchDataRequest = createAction('DATA/FETCH/REQUEST');
export const fetchDataSuccess = createAction('DATA/FETCH/SUCCESS');
export const fetchDataFailure = createAction('DATA/FETCH/FAILURE');
export const showModal = createAction('MODAL/SHOW');
export const hideModal = createAction('MODAL/HIDE');
export const changeEmail = createAction('EMAIL/CHANGE');
export const changePassword = createAction('PASSWORD/CHANGE');
export const loginSuccess = createAction('USER/LOGIN/SUCCESS');

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

// TODO: actions for solution testing
export const testSolution = () => async (dispatch, getState) => {
  const { code } = getState().training;
  const evalCode = `${code};\nreturn solution(a, b)`;
  const solution = new Function('a', 'b', evalCode).bind({});
  console.log(solution(1, 2));
};
