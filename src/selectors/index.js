import { createSelector } from 'reselect';
import _ from 'lodash';

const getExercises = state => state.training.exercises;

const getComplexity = createSelector(
  getExercises,
  (items) => {
    const itemsByComplexity = _.groupBy(items, 'complexity');
    return Object.keys(itemsByComplexity).map(complexity => ({
      complexity,
      exercises: itemsByComplexity[complexity],
    }));
  },
);

export default getComplexity;
