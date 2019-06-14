import { createSelector } from 'reselect';
import _ from 'lodash';

export const getExercises = state => state.app.training.exercises;
export const getCurrentTaskId = state => state.app.training.currentTaskId;
export const getTests = state => state.app.tests.tests;
export const getCurrentTestId = state => state.app.tests.currentTestId;
export const getCurrentQuestionId = state => state.app.tests.currentQuestionId;
export const getLessons = state => state.app.lessons.lessons;
export const getCurrentLessonId = state => state.app.lessons.currentLessonId;
export const getCurrentParagraphId = state => state.app.lessons.currentParagraphId;

export const getTaskByComplexity = createSelector(
  getExercises,
  (items) => {
    const itemsByComplexity = _.groupBy(items, 'complexity');
    return _.keys(itemsByComplexity).map(complexity => ({
      complexity,
      tasks: itemsByComplexity[complexity],
    }));
  },
);

export const isFirst = createSelector(
  getCurrentTaskId,
  getExercises,
  (currentTaskId, items) => {
    if (currentTaskId === _.first(items).id) return true;
    return false;
  },
);

export const isLast = createSelector(
  getCurrentTaskId,
  getExercises,
  (currentTaskId, items) => {
    if (currentTaskId === _.last(items).id) return true;
    return false;
  },
);

export const getCurrentTask = createSelector(
  getExercises,
  getCurrentTaskId,
  (items, currentTaskId) => (_.find((items), (item => item.id === currentTaskId))),
);

export const getTestsByType = createSelector(
  getTests,
  (items) => {
    const itemsByType = _.groupBy(items, 'type');
    return Object.keys(itemsByType).map(type => ({
      type,
      tests: itemsByType[type],
    }));
  },
);
export const getCurrentTest = createSelector(
  getTests,
  getCurrentTestId,
  (items, currentTestId) => (_.find((items), (item => item.id === currentTestId))),
);


export const getQuestions = createSelector(
  getCurrentTest,
  items => (_.get(items, 'questions')),
);

export const getCurrentQuestion = createSelector(
  getQuestions,
  getCurrentQuestionId,
  (items, currentQuestionId) => (_.find((items), (item => item.id === currentQuestionId))),
);

export const getCurrentLesson = createSelector(
  getLessons,
  getCurrentLessonId,
  (items, currentLessonId) => (_.find((items), (item => item.id === currentLessonId))),
);

export const getParagraphs = createSelector(
  getCurrentLesson,
  items => (_.get(items, 'paragraphs')),
);

export const getCurrentParagraph = createSelector(
  getParagraphs,
  getCurrentParagraphId,
  (items, currentParagraphId) => (_.find((items), (item => item.id === currentParagraphId))),
);

export const isFirstParagraph = createSelector(
  getCurrentParagraphId,
  getParagraphs,
  (currentParagraphId, items) => {
    if (currentParagraphId === _.first(items).id) return true;
    return false;
  },
);

export const isLastParagraph = createSelector(
  getCurrentParagraphId,
  getParagraphs,
  (currentParagraphId, items) => {
    if (currentParagraphId === _.last(items).id) return true;
    return false;
  },
);
export const isFirstLesson = createSelector(
  getCurrentParagraphId,
  getLessons,
  (currentLessonId, items) => {
    if (currentLessonId === _.first(items).id) return true;
    return false;
  },
);

export const isLastLesson = createSelector(
  getCurrentLessonId,
  getLessons,
  (currentLessonId, items) => {
    if (currentLessonId === _.last(items).id) return true;
    return false;
  },
);
