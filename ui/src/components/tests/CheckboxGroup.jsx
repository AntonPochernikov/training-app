import React from 'react';

const CheckboxGroup = (props) => {
  const handleChangeValue = (e, option, input) => {
    const newValue = [...input.value];

    if (e.target.checked) {
      newValue.push(option.description);
    } else {
      newValue.splice(newValue.indexOf(option.description), 1);
    }
    return input.onChange(newValue);
  };

  const {
    options, input,
  } = props;

  return options.map((option, id) => (
    <div className="checkbox" key={id}>
      <input className="options-input"
        type="checkbox"
        name={`${input.name}[${id}]`}
        value={option.description}
        checked={input.value.indexOf(option.description) !== -1}
        onChange={e => handleChangeValue(e, option, input)}
      />
      <label className="options-label" forhtml="options__input"></label>
      <span className="options-description">{option.description}</span>
    </div>));
};
export default CheckboxGroup;
