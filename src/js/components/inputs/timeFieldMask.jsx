import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { handleFunction } from '../../lib/eventHandler';

const timeFormatNumber = (num) => {
  let ret;
  const val = num + '';
  const len = val.length;
  if (len === 0) {
    ret = '00:00:00';
  } else if (len === 1) {
    ret = `00:00:0${val}`;
  } else if (len === 2) {
    ret = `00:00:${val}`;
  } else if (len === 3) {
    ret = `00:0${val.substring(0, 1)}:${val.substring(1)}`;
  } else if (len === 4) {
    ret = `00:${val.substring(0, 2)}:${val.substring(2)}`;
  } else if (len === 5) {
    ret = `0${val.substring(0, 1)}:${val.substring(1, 3)}:${val.substring(3)}`;
  } else {
    ret = `${val.substring(0, len - 4)}:${val.substring(len - 4, len - 2)}:${val.substring(len - 2)}`;
  }
  return ret;
};

const formatInput = (current) => {
  let display = '';
  const parsedCurrent = parseInt(current);
  if (parsedCurrent) {
    display = timeFormatNumber(parsedCurrent);
  }
  return display;
};

const propTypes = {
  inputRef: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
};
const TimeFieldMask = ({ inputRef, name, onChange, value, ...other }) => {
  const handleChange = (values) => {
    const payload = { target: { name, value: values.formattedValue } };
    handleFunction(onChange, payload);
  };

  return (
    <NumberFormat
      {...other}
      allowNegative={false}
      allowLeadingZeros={false}
      format={formatInput}
      getInputRef={inputRef}
      isNumericString={true}
      onValueChange={handleChange}
      prefix=""
      thousandSeparator={false}
      value={value || 0}
    />
  );
};
TimeFieldMask.propTypes = propTypes;
export default TimeFieldMask;
