import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, FormControlLabel, Switch } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';
import { handleFunction } from '../../lib/eventHandler';
import { dateSwitchPickerStyles as styles } from './styles';

const isActive = false;
const propTypes = {
  isDisabled: PropTypes.bool,
  labelDate: PropTypes.string,
  labelSwitch: PropTypes.string,
  onDateChange: PropTypes.func,
  onSwitchChange: PropTypes.func,
  valueDate: PropTypes.any,
  valueSwitch: PropTypes.bool
};
const useStyles = makeStyles(() => styles);
const DateSwitchPicker = ({
  onDateChange = null,
  onSwitchChange = null,
  isDisabled = true,
  labelDate = '',
  labelSwitch = '',
  valueDate = '',
  valueSwitch = true
}) => {
  const handleDate = (value) => {
    console.info('handleDate', value);
    if (isActive) {
      handleFunction(onDateChange, value);
    }
  };

  const handleToggle = (value) => {
    console.info('handleToggle', value);
    if (isActive) {
      handleFunction(onSwitchChange, value);
    }
  };

  const classes = useStyles();
  return (
    <div className={classNames(classes.dateSwitchWrapper)}>
      <DateTimePicker
        ampm={false}
        autoOk
        disabled={isDisabled}
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
            disabled={isDisabled}
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
