import React from 'react';
import { Field } from 'redux-form';
import './WriteAnswer.css';


const WriteAnswer = (props) => {
  const {
    id,
  } = props;

  return (
    <div className="options" key={id}>
      <Field
        className="answer-input"
        name="answer__input"
        component="input"
        type="text"
      />
      <label className="options-label" forhtml="options__input"></label>
    </div>
  );
};

export default (WriteAnswer);
