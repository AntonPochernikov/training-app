import React from 'react';
import { reduxForm } from 'redux-form';
import ChooseOne from './ChooseOne.jsx';
import WriteAnswer from './WriteAnswer.jsx';
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
      return questionType;
    default:
      break;
    }
    return 0;
  }

  render() {
    const {
      currentTest: {
        name,
        description,
      },
      currentQuestion: {
        id: questionId,
        name: questionName,
        type: questionType,
        description: questionDescription,
      },
    } = this.props;

    return (
      <div className="questions">
        <div className="heading">
          <h2 className="heading-main">{name}</h2>
          <b>{description}</b>
        </div>
        <div className="questions-content">
          <form>
            <div className="questions-heading">
              <p className="question-id"> Вопрос {questionId}</p>
              <p className="question-name">{questionName}</p>
              <p className="question-description"> {questionDescription}</p>
            </div>
            <div className="options-content">
              {this.renderQuestionsByType(questionType)}
            </div>
            <button type="button" className="btn-next-test" onClick={this.handleNextButton}>Далее</button>
          </form>
        </div>
      </div>

    );
  }
}
export default reduxForm({
  form: 'questions',
})(Questions);
