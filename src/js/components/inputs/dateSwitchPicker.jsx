import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, FormControlLabel, Switch } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';
import { defaultValue } from '../../lib/defaultValue';
import { handleFunction } from '../../lib/eventHandler';
import { dateSwitchPickerStyles as styles } from './styles';

const propTypes = {
  isDisabledDate: PropTypes.bool,
  isDisabledSwitch: PropTypes.bool,
  labelDate: PropTypes.string,
  labelSwitch: PropTypes.string,
  onDateChange: PropTypes.func,
  startOffset: PropTypes.number,
  valueDate: PropTypes.any
};
const useStyles = makeStyles(() => styles);
const DateSwitchPicker = ({
  isDisabledDate = true,
  isDisabledSwitch = true,
  labelDate = '',
  labelSwitch = '',
  onDateChange = null,
  startOffset = 0,
  valueDate = ''
}) => {
  const [valueSwitch, setValueSwitch] = useState(true);

  useEffect(() => {
    if (valueSwitch) {
      handleOffset();
    }
  }, [startOffset, valueSwitch]);

  const handleOffset = () => {
    const msStateTime = new Date().getTime() - (startOffset * 1000);
    handleFunction(onDateChange, Date(msStateTime));
  };

  const handleDate = (date) => {
    const value = defaultValue(date, '');
    handleFunction(onDateChange, value);
    setValueSwitch(false);
  };

  const handleToggle = (_event) => {
    setValueSwitch((prev) => !prev);
  };

  const classes = useStyles();
  return (
    <div className={classNames(classes.dateSwitchWrapper)}>
      <DateTimePicker
        ampm={false}
        autoOk
        disabled={isDisabledDate}
        inputVariant="outlined"
        label={labelDate}
        onChange={handleDate}
        value={valueDate || ''}
      />
      <FormControlLabel
        control={
          <Switch
            checked={valueSwitch}
            color="primary"
            disabled={isDisabledSwitch}
            onChange={handleToggle}
          />
        }
        label={labelSwitch}
      />
    </div>
  );
};

DateSwitchPicker.propTypes = propTypes;
export default DateSwitchPicker;
