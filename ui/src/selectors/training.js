import { createSelector } from 'reselect';
import _ from 'lodash';

export const getExercises = state => state.app.training.exercises;
export const getCurrentTaskId = state => state.app.training.currentTaskId;

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
  (items, currentTaskId) => _.find(items, item => item.id === currentTaskId),
);
