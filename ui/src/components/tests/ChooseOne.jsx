import React from 'react';
import { Field } from 'redux-form';
import './ChooseOne.css';


const ChooseOne = (props) => {
  const {
    options,
  } = props;

  return options.map(({ id, description }) => (
    <div className="options" key={id}>
      <Field
        className="options-input"
        name="chooseOneInput"
        component="input"
        type="radio"
        value={description}
      />
      <label className="options-label" forhtml="options__input"></label>
      <span className="options-description">{description}</span>
    </div>
  ));
};

export default (ChooseOne);
