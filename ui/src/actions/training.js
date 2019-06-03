import { createAction } from 'redux-actions';
import 'mocha/mocha';
import _ from 'lodash';

import { assert } from 'chai';
import * as selector from '../selectors';

const { mocha } = window;
window.assert = assert;
mocha.setup('bdd');

export const changeCode = createAction('CODE/CHANGE');
export const clearCode = createAction('CODE/CLEAR');

export const getCurrentTaskId = createAction('TASK/CURRENT/ID/GET');
export const fetchDataRequest = createAction('DATA/FETCH/REQUEST');
export const fetchDataSuccess = createAction('DATA/FETCH/SUCCESS');
export const fetchDataFailure = createAction('DATA/FETCH/FAILURE');

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

export const getNextTask = createAction('NEXT/TASK/GET');
export const getPrevTask = createAction('PREV/TASK/GET');

export const performTestRequest = createAction('TEST/PERFORM/REQUEST');
export const performTestSuccess = createAction('TEST/PERFORM/SUCCESS');
export const performTestFailure = createAction('TEST/PERFORM/FAILURE');

export const testSolution = () => async (dispatch, getState) => {
  dispatch(performTestRequest());
  // eslint-disable-next-line
  const { code } = getState().training;
  const { test } = selector.getCurrentTask(getState());

  try {
    const callback = _.once((err) => {
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
export const getCurrentOutputTab = createAction('CURRENT/OUTPUT/TAB/');
