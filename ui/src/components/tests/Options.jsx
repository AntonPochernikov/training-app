import React from 'react';
import { Field } from 'redux-form';

// ChooseOne, ChooseMultiply, WriteAnswer
const ChooseOne = () => (
  <div className="chooseOne">
    <Field name="chooseOne" component="input" type="radio" value="options" />
  </div>
);
export default ChooseOne;
