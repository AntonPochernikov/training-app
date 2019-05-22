import React from 'react';
import { Field } from 'redux-form';

const ChooseOne = (props) => {
  const {
    options,
    isChecked,
  } = props;
  return options.map(({ id, description }) => (
    <div className="chooseOne" key={id}>
      <label>
        <Field
          checked={isChecked}
          name="options"
          component="input"
          type="radio"
          value={id} />
        {' '}
        {description}
      </label>
    </div>
  ));
};

export default (ChooseOne);
