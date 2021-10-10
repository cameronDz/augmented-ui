import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { eventDefaultValue } from '../../lib/defaultValue';
import { handleFunction } from '../../lib/eventHandler';

const propTypes = {
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string
};
const OutlinedSelector = ({
  isDisabled = true,
  label = '',
  onChange = null,
  options = [],
  value = ''
}) => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const newItems = [];
    const length = Array.isArray(options) ? options.length : 0;
    for (let idx = 0; idx < length; idx++) {
      if (options[idx]?.id) {
        newItems.push(
          <MenuItem key={options[idx].id} value={options[idx].id}>
            {options[idx].name}
          </MenuItem>
        );
      }
    }
    setItems(newItems);
  }, [options]);

  useEffect(() => {
    let newValue = '';
    if (items?.length > 0) {
      newValue = value;
    }
    setSelected(newValue);
  }, [items, value]);

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
        value={selected}
      >
        <MenuItem value=""><em>- -</em></MenuItem>
        {items}
      </Select>
    </FormControl>
  );
};

OutlinedSelector.propTypes = propTypes;
export default OutlinedSelector;
