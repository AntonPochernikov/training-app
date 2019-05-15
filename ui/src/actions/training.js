import { createAction } from 'redux-actions';
import 'mocha/mocha';

import { assert } from 'chai';
import * as selector from '../selectors';

const { mocha } = window;
window.assert = assert;
mocha.setup('bdd');

export const changeCode = createAction('CODE/CHANGE');
export const clearCode = createAction('CODE/CLEAR');

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

// экшены не из тренировки
export const showModal = createAction('MODAL/SHOW');
export const hideModal = createAction('MODAL/HIDE');
export const changeEmail = createAction('EMAIL/CHANGE');
export const changePassword = createAction('PASSWORD/CHANGE');
export const loginSuccess = createAction('USER/LOGIN/SUCCESS');
// экшены не из тренировки

export const getNextTask = createAction('NEXT/TASK/GET');
export const getPrevTask = createAction('PREV/TASK/GET');

export const performTestRequest = createAction('TEST/PERFORM/REQUEST');
export const performTestSuccess = createAction('TEST/PERFORM/SUCCESS');
export const performTestFailure = createAction('TEST/PERFORM/FAILURE');

// взять с lodash
const once = (f) => {
  let isDone = false;
  return (...args) => {
    if (isDone) {
      return;
    }
    isDone = true;
    f(...args);
  };
};

export const testSolution = () => async (dispatch, getState) => {
  dispatch(performTestRequest());
  // eslint-disable-next-line
  const { code } = getState().training;
  const { test } = selector.getCurrentTask(getState());

  try {
    const callback = once((err) => {
      if (err) {
        dispatch(performTestFailure({ err }));
        return;
      }
      dispatch(performTestSuccess());
    });
    eval(test);
    mocha
      .run()
      // передать ошибку в колбэк для обработки
      .on('fail', callback);
    // после завершения тестов, вызовем коллбек без ошибки
  } catch (e) {
    console.log(e);
  }
};
