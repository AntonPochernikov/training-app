import { createAction } from 'redux-actions';
import 'mocha/mocha';

import { assert } from 'chai';
import * as selector from '../selectors';

const { mocha } = window;
window.assert = assert;
mocha.setup('bdd');

export const changeCode = createAction('CODE/CHANGE');
export const getCurrentTaskId = createAction('TASK/CURRENT/ID/GET');

export const fetchDataRequest = createAction('DATA/FETCH/REQUEST');
export const fetchTestsRequest = createAction('TESTS/FETCH/REQUEST');
export const fetchDataSuccess = createAction('DATA/FETCH/SUCCESS');
export const fetchTestsSuccess = createAction('TESTS/FETCH/SUCCESS');
export const fetchDataFailure = createAction('DATA/FETCH/FAILURE');
export const fetchTestsFailure = createAction('TESTS/FETCH/FAILURE');

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

export const showModal = createAction('MODAL/SHOW');
export const hideModal = createAction('MODAL/HIDE');

export const changeEmail = createAction('EMAIL/CHANGE');
export const changePassword = createAction('PASSWORD/CHANGE');
export const loginSuccess = createAction('USER/LOGIN/SUCCESS');


export const fetchTestRequest = createAction('TEST/FETCH/REQUEST');
// export const fetchTestSuccess = createAction('TEST/FETCH/SUCCESS');
export const fetchTestFailure = createAction('TEST/FETCH/FAILURE');

export const testSolution = () => async (dispatch, getState) => {
  dispatch(fetchTestRequest());
  // eslint-disable-next-line
  const { code } = getState().training;
  const { test } = selector.getCurrentTask(getState());
  let failedTest = 0;

  try {
    eval(test);
    mocha
      .run()
      .on('fail', () => {
        dispatch(fetchTestFailure(failedTest += 1));
      });
  } catch (e) {
    console.log(e);
  }
};
