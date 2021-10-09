import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { handleFunction } from '../../lib/eventHandler';
import TimeFieldMask from './timeFieldMask';

const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any
};
const TimeField = ({ label, name, onBlur, onChange, value }) => {
  const [currentValue, setCurrentValue] = useState(() => value || '');

  useEffect(() => {
    setCurrentValue(value || '');
  }, [value]);

  const handleChange = (event) => {
    setCurrentValue((event?.target?.value || '').replace(/:/g, ''));
    handleFunction(onChange, event);
  };

  return (
    <TextField
      InputProps={{ inputComponent: TimeFieldMask }}
      label={label}
      name={name}
      onBlur={(event) => handleFunction(onBlur, event)}
      onChange={(event) => handleChange(event)}
      value={currentValue}
      variant="outlined"
    />
  );
};
TimeField.propTypes = propTypes;
export default TimeField;
