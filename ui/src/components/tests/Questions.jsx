import React from 'react';
import { reduxForm } from 'redux-form';
import ChooseOne from './ChooseOne.jsx';
import СhooseMultiple from './СhooseMultiple.jsx';
import WriteAnswer from './WriteAnswer.jsx';
import Progress from './Progress.js';
import './Questions.css';

class Questions extends React.Component {
  handleNextButton = () => {
    this.props.getNextQuestion();
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
      submitting,
      pristine,
      invalid,
    } = this.props;

    return (
      <div className="questions">
        <div className="heading">
          <h3 className="heading-main">{description}</h3>
        </div>
        <div className="questions-content">
          <form>
            <Progress id={questionId}/>
            <div className="questions-heading">
              <p className="question-id"> Вопрос {questionId}</p>
              <p className="question-name">{questionName}</p>
              <p className="question-description"> {questionDescription}</p>
            </div>
            <div className="options-content">
              {this.renderQuestionsByType(questionType)}
            </div>
            <button
              type="button"
              className="btn-next-test"
              disabled={submitting || pristine || invalid}
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
