import { createSelector } from 'reselect';
import _ from 'lodash';

export const getExercises = state => state.training.exercises;

export const getComplexity = createSelector(
  getExercises,
  (items) => {
    const itemsByComplexity = _.groupBy(items, 'complexity');
    return _.keys(itemsByComplexity).map(complexity => ({
      complexity,
      exercises: itemsByComplexity[complexity],
    }));
  },
);
