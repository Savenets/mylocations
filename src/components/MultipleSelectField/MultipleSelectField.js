import React from 'react';
import PropTypes from 'prop-types';

import MUISelectField from 'material-ui/SelectField';

const SelectField = ({ input, label, meta: { touched, error }, children, style, ...custom }) => {

  const onBlur = (event, value) => {
    input.onChange(value);
  };

  return (
    <MUISelectField
      multiple
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onBlur={onBlur}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );
};

SelectField.defaultProps = {
  style: null,
};

SelectField.propTypes = {
  style: PropTypes.shape({}),
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

export default SelectField;
