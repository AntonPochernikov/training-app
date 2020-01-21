import React from 'react';
import { Field } from 'redux-form';
import CheckboxGroup from './CheckboxGroup.jsx';
import './СhooseMultiple.css';

const СhooseMultiple = (props) => {
  const {
    options,
  } = props;
  return <Field name="chooseMultiplyInput" component={CheckboxGroup} options={options} />;
};

export default (СhooseMultiple);
