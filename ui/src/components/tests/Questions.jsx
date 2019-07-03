import React from 'react';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import ChooseOne from './ChooseOne.jsx';
import СhooseMultiple from './СhooseMultiple.jsx';
import WriteAnswer from './WriteAnswer.jsx';
import Progress from './Progress.js';
import './Questions.css';

class Questions extends React.Component {
  handleNextButton = () => {
    const {
      getCorrectAnswer,
      isLastQuestion,
    } = this.props;

    this.props.saveResult({ res: getCorrectAnswer.toString() });

    if (isLastQuestion === false) {
      this.props.getNextQuestion();
    }
  }

  renderQuestionsByType = (questionType) => {
    const { currentQuestion: { options } } = this.props;

    switch (questionType) {
    case 'chooseOne':
      return <ChooseOne options={options}/>;
    case 'writeAnswer':
      return <WriteAnswer />;
    case 'chooseMultiply':
      return <СhooseMultiple options={options}/>;
    default:
      break;
    }
    return 0;
  }

  render() {
    const {
      currentTest: {
        description,
      },
      currentQuestion: {
        id: questionId,
        name: questionName,
        type: questionType,
        description: questionDescription,
      },
      pristine,
      isFinish,
    } = this.props;

    return (
      <div className="questions">
        <h3 className="heading">{description}</h3>
        <div className="questions-content">
          <form>
            <Progress id={questionId}/>
            <div className="questions-heading">
              <p className="question-id"> Вопрос {questionId}</p>
              <p className="question-name">{questionName}</p>
              <p className="question-description"> {questionDescription}</p>
            </div>
            <div className="options-content">
              {!(isFinish) ? this.renderQuestionsByType(questionType) : <Redirect to ="/result" />}
            </div>
            <button
              type="button"
              className="btn-next-test"
              disabled={pristine}
              onClick={this.handleNextButton}
            >
              Далее
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default reduxForm({
  form: 'questions',
})(Questions);
