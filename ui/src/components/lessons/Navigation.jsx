import React from 'react';

export default class Navigation extends React.Component {
  handleNextButton = () => {
    const { isLastParagraph, getNextLesson, getNextParagraph } = this.props;
    if (isLastParagraph) getNextLesson();
    getNextParagraph();
  }

  handlePrevButton = () => {
    const { isFirstParagraph, getPrevLesson, getPrevParagraph } = this.props;
    if (isFirstParagraph) getPrevLesson();
    getPrevParagraph();
  }

  render() {
    const {
      isFirstLesson,
      isLastLessonParagraphs,
    } = this.props;

    return (
      <div className="container-navigation">
        <button
          className="btn-back"
          onClick={this.handlePrevButton}
          disabled={isFirstLesson}
        >
          Назад
        </button>
        <button
          className="btn-next"
          onClick={this.handleNextButton}
          disabled={isLastLessonParagraphs}
        >
          Далее
        </button>
      </div>
    );
  }
}