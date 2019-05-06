import { createSelector } from 'reselect';
import _ from 'lodash';

export const getExercises = state => state.training.exercises;
export const getCurrentTaskId = state => state.training.currentTaskId;
export const getTests = state => state.tests.tests;
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

export const getFirstElement = createSelector(
  getExercises,
  items => (
    _.first(items)
  ),
);

export const getLastElement = createSelector(
  getExercises,
  items => (
    _.last(items)
  ),
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
