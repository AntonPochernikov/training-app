import { createSelector } from 'reselect';
import _ from 'lodash';

export const getExercises = state => state.training.exercises;
export const getCurrentTaskId = state => state.training.currentTaskId;

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

export const getCurrentTask = createSelector(
  getExercises,
  getCurrentTaskId,
  (items, currentTaskId) => (_.find((items), (item => item.id === currentTaskId))),
);
