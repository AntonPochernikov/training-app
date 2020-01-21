import { createSelector } from 'reselect';
import _ from 'lodash';

export const getTests = state => state.app.tests.tests;
export const getCurrentTestId = state => state.app.tests.currentTestId;
export const getCurrentQuestionId = state => state.app.tests.currentQuestionId;
export const getFormQuestions = state => state.form.questions;
export const getResult = state => state.app.tests.result;

export const getTestsByType = createSelector(
  getTests,
  (items) => {
    const itemsByType = _.groupBy(items, 'type');
    return _.keys(itemsByType).map(type => ({
      type,
      tests: itemsByType[type],
    }));
  },
);

export const getCurrentTest = createSelector(
  getTests,
  getCurrentTestId,
  (items, currentTestId) => _.find(items, item => item.id === currentTestId),
);

export const getQuestions = createSelector(
  getCurrentTest,
  items => _.get(items, 'questions'),
);

export const getCurrentQuestion = createSelector(
  getQuestions,
  getCurrentQuestionId,
  (items, currentQuestionId) => _.find(items, item => item.id === currentQuestionId),
);

export const getFormValues = createSelector(
  getFormQuestions,
  items => _.get(items, 'values'),
);

export const getCorrectAnswer = createSelector(
  getCurrentQuestion,
  items => _.get(items, 'correctAnswer'),
);

export const getCorrectValues = createSelector(
  getCorrectAnswer,
  items => _.map(items, 'description'),
);

export const compareChooseOneAnswer = createSelector(
  getFormValues,
  getCorrectValues,
  (formValues, correctValues) => {
    const inputValue = _.get(formValues, 'chooseOneInput');
    if (inputValue === correctValues.toString()) return true;
    return false;
  },
);

export const compareWriteAnswer = createSelector(
  getFormValues,
  getCorrectAnswer,
  (formValues, correctAnswer) => {
    const inputValue = _.get(formValues, 'writeAnswerInput');
    if (inputValue === correctAnswer) return true;
    return false;
  },
);

export const compareMultiplyAnswer = createSelector(
  getFormValues,
  getCorrectValues,
  (formValues, correctValues) => {
    const inputValues = _.get(formValues, 'chooseMultiplyInput');
    if (inputValues && inputValues.length === correctValues.length) {
      return correctValues.every(e => inputValues.includes(e));
    }
    return false;
  },
);

export const countResult = createSelector(
  getResult,
  items => items.filter(item => item !== 'false').length,
);

export const isLastQuestion = createSelector(
  getCurrentQuestionId,
  getQuestions,
  (currentQuestion, items) => {
    if (currentQuestion === _.last(items).id) return true;
    return false;
  },
);

export const isFinish = createSelector(
  getResult,
  getQuestions,
  (res, questions) => {
    if (res.length === questions.length) return true;
    return false;
  },
);
