import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { eventDefaultValue } from '../../lib/defaultValue';
import { handleFunction } from '../../lib/eventHandler';
import { outlinedSelectorStyles as styles } from './styles';

const propTypes = {
  isDisabled: PropTypes.bool,
  isExtended: PropTypes.bool,
  isFullExtended: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string
};
const useStyles = makeStyles(() => styles);
const OutlinedSelector = ({
  isDisabled = true,
  isExtended = false,
  isFullExtended = false,
  label = '',
  onChange = null,
  options = [],
  value = ''
}) => {
  const [items, setItems] = useState([]);
  const [labelId, setLabelId] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setLabelId(uuidv4());
  }, []);

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

  const classes = useStyles();
  return (
    <div className={classNames(
      classes.rootSelectorContainer,
      isExtended && !isFullExtended && classes.extendedSelectorContainer,
      isFullExtended && classes.fullExtendedSelectorContainer
    )}>
      <FormControl variant="outlined">
        {label && <InputLabel id={labelId}>{label}</InputLabel>}
        <Select
          labelId={labelId}
          disabled={isDisabled}
          onChange={handleChange}
          value={selected}
        >
          <MenuItem value=""><em>- -</em></MenuItem>
          {items}
        </Select>
      </FormControl>
    </div>
  );
};

OutlinedSelector.propTypes = propTypes;
export default OutlinedSelector;
