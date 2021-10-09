import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { handleEvent } from '../../lib/eventHandler';
import TimeFieldMask from './timeFieldMask';

const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any
};
const TimeField = ({ label, name, onBlur, onChange, value }) => {
  return (
    <TextField
      InputProps={{ inputComponent: TimeFieldMask }}
      label={label}
      name={name}
      onBlur={(event) => handleEvent(onBlur, event)}
      onChange={(event) => handleEvent(onChange, event)}
      value={value}
      variant="outlined"
    />
  );
};
TimeField.propTypes = propTypes;
export default TimeField;
