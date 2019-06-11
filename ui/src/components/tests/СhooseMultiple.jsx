import React from 'react';
import { Field } from 'redux-form';
import './СhooseMultiple.css';


const СhooseMultiple = (props) => {
  const {
    options,
  } = props;

  return options.map(({ id, description }) => (
    <div className="options" key={id}>
      <Field
        className="options-input"
        name={description.toString()}
        component="input"
        type="checkbox"
        value={description.toString()}
      />
      <label className="options-label" forhtml="options__input"></label>
      <span className="options-description">{description}</span>
    </div>
  ));
};

export default (СhooseMultiple);
