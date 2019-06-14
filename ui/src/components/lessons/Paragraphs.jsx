import React from 'react';
import './Lessons.css';
import Navigation from './Navigation.jsx';

export default class Paragraphs extends React.Component {
  render() {
    const {
      paragraph: { id, number, name },
      getNextParagraph,
      getPrevParagraph,
      getNextLesson,
      getPrevLesson,
      currentLessonId,
      isFirstParagraph,
      isLastParagraph,
      isFirstLesson,
      isLastLesson,
    } = this.props;
    return (
      <div className="paragraphs-content">
        <div className="heading">
          <h2 className="heading-main">{number} {name}</h2>
        </div>
        <Navigation
          id={id}
          getNextParagraph={getNextParagraph}
          getPrevParagraph={getPrevParagraph}
          currentLessonId={currentLessonId}
          isFirstParagraph={isFirstParagraph}
          isLastParagraph={isLastParagraph}
          getNextLesson={getNextLesson}
          getPrevLesson={getPrevLesson}
          isFirstLesson={isFirstLesson}
          isLastLesson={isLastLesson}
        />
      </div>
    );
  }
}
