import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const propTypes = {
  inputRef: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.any
};
const TimeFieldMask = ({ inputRef, name, onChange, ...other }) => {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      isNumericString={true}
      onValueChange={(values) => {
        onChange({
          target: {
            name: name,
            value: values.value
          }
        });
      }}
      prefix="$"
      thousandSeparator={true}
    />
  );
};
TimeFieldMask.propTypes = propTypes;
export default TimeFieldMask;
