import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { eventDefaultValue } from '../../../lib/defaultValue';
import { handleFunction } from '../../../lib/eventHandler';

const propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
};
const UnitTypeSelector = ({ isDisabled = true, onChange = null, value = '' }) => {
  const handleChange = (event) => {
    const newValue = eventDefaultValue(event, '');
    handleFunction(onChange, newValue);
  };

  return (
    <FormControl variant="outlined">
      <Select
        disabled={isDisabled}
        onChange={handleChange}
        title="units"
        value={value}
      >
        <MenuItem value=""><em>- -</em></MenuItem>
        <MenuItem value="mg">mg</MenuItem>
        <MenuItem value="pill">pill</MenuItem>
        <MenuItem value="ounce">oz</MenuItem>
        <MenuItem value="pound">lb</MenuItem>
        <MenuItem value="kg">kg</MenuItem>
      </Select>
    </FormControl>
  );
};

UnitTypeSelector.propTypes = propTypes;
export { UnitTypeSelector };
