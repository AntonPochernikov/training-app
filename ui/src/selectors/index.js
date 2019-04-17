import { createSelector } from 'reselect';
import _ from 'lodash';

export const getExercises = state => state.training.exercises;
export const getTaskId = state => state.training.currentTask;

export const getComplexity = createSelector(
  getExercises,
  (items) => {
    const itemsByComplexity = _.groupBy(items, 'complexity');
    return _.keys(itemsByComplexity).map(complexity => ({
      complexity,
      tasks: itemsByComplexity[complexity],
    }));
  },
);

export const getTask = createSelector(
  getExercises,
  getTaskId,
  (items, taskId) => (_.find((items), (item => item.id === taskId))),
);
