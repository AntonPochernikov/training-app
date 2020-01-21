import { createSelector } from 'reselect';
import _ from 'lodash';

export const getLessons = state => state.app.lessons.lessons;
export const getCurrentLessonId = state => state.app.lessons.currentLessonId;
export const getCurrentParagraphId = state => state.app.lessons.currentParagraphId;

export const getCurrentLesson = createSelector(
  getLessons,
  getCurrentLessonId,
  (items, currentLessonId) => _.find(items, item => item.id === currentLessonId),
);

export const getParagraphs = createSelector(
  getCurrentLesson,
  items => _.get(items, 'paragraphs'),
);

export const getCurrentParagraph = createSelector(
  getParagraphs,
  getCurrentParagraphId,
  (items, currentParagraphId) => _.find(items, item => item.id === currentParagraphId),
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

export const isLastLessonParagraphs = createSelector(
  getCurrentParagraphId,
  getLessons,
  (сurrentParagraphId, lessons) => {
    const lastLesson = _.last(lessons);
    const lastParagraphs = _.get(lastLesson, 'paragraphs');
    if (сurrentParagraphId === _.last(lastParagraphs).id) return true;
    return false;
  },
);
