import React from 'react';
import { reduxForm } from 'redux-form';
import ChooseOne from './Options.jsx';
import './Questions.css';

class Questions extends React.Component {
  handleNextButton = () => {
    this.props.getNextQuestions();
  }

  handlePrevButton = () => {
    this.props.getPrevQuestions();
  }

  submit = (values) => {
    // print the form values to the console
    console.log(values);
  }

  render() {
    const {
      currentTest: {
        name,
        description,
      },
      firstQuestion: {
        id: questionId,
        name: questionName,
        description: questionDescription,
        options,
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
              <ChooseOne
                options={options}
              />
            </div>
            <button className="btn-next-test" onClick={this.handleNextButton}>Далее</button>
          </form>
        </div>
      </div>

    );
  }
}
export default reduxForm({
  form: 'questions',
})(Questions);
