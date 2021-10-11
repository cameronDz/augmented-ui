import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedSelector } from '../../../components/inputs';
import { handleFunction } from '../../../lib/eventHandler';

const unitOptions = [
  { id: 'mg', name: 'mg' },
  { id: 'pill', name: 'pill' },
  { id: 'g', name: 'g' },
  { id: 'oz', name: 'oz' },
  { id: 'lb', name: 'lb' },
  { id: 'kg', name: 'kg' }
];
const propTypes = {
  isDisabled: PropTypes.bool,
  isExtended: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};
const UnitTypeSelector = ({
  isDisabled = true,
  isExtended = false,
  label = 'Units',
  onChange = null,
  value = ''
}) => {
  return (
    <OutlinedSelector
      isDisabled={isDisabled}
      isExtended={isExtended}
      label={label}
      onChange={(selected) => handleFunction(onChange, selected)}
      options={unitOptions}
      value={value}
    />
  );
};

UnitTypeSelector.propTypes = propTypes;
export { UnitTypeSelector };
