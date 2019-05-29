import React from 'react';
import { Field } from 'redux-form';
import './Options.css';


const ChooseOne = (props) => {
  const {
    options,
  } = props;

  return options.map(({ id, description }) => (
    <div className="options" key={id}>
      <Field
        className="options-input"
        checked="form.questions.fields.values.options_input" /* временно */
        name="options__input"
        component="input"
        type="radio"
        value={id}
      />
      <label className="options-label" forhtml="options__input"></label>
      <span className="options-description">{description}</span>
    </div>
  ));
};

export default (ChooseOne);
