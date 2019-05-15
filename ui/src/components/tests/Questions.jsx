import React from 'react';
import { reduxForm } from 'redux-form';
import ChooseOne from './Options.jsx';
import './Questions.css';

const Questions = (props) => {
  const {
    currentTest: {
      name,
      description,
    },
  } = props;

  return (
    <div className="questions">
      <div className="heading">
        <h2 className="heading-main">{name}</h2>
        <b>{description}</b>
      </div>
      <div className="questions-content">
        <form>
          <div className="questions-heading">
            <p className="question-id"> id</p>
            <p className="question-name">name</p>
            <p className="question-description">description</p>
          </div>
          <div className="options-content">
            <ChooseOne />
          </div>
          <div className="container-navigation">
            <button className="btn-back" type="submit" >Назад </button>
            <button className="btn-next" type="submit">Далее</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'questions',
})(Questions);
