import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedSelector } from '../../../components/inputs';
import { handleFunction } from '../../../lib/eventHandler';

const unitOptions = [
  { id: 'mg', name: 'mg' },
  { id: 'pill', name: 'pill' },
  { id: 'ounce', name: 'oz' },
  { id: 'pound', name: 'lb' },
  { id: 'kg', name: 'kg' }
];
const propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
};
const UnitTypeSelector = ({ isDisabled = true, onChange = null, value = '' }) => {
  return (
    <OutlinedSelector
      isDisabled={isDisabled}
      label="Units"
      onChange={(selected) => handleFunction(onChange, selected)}
      options={unitOptions}
      value={value}
    />
  );
};

UnitTypeSelector.propTypes = propTypes;
export { UnitTypeSelector };
