import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { DateSwitchPicker } from '../../../components/inputs';
import { UnsecuredUserAlert } from '../../../auth';
import { defaultValue, eventDefaultValue } from '../../../lib/defaultValue';
import { hasTruthy } from '../../../lib/hasTruthy';
import { clearNutrientReportPutSuccess, putNutrientReport } from '../state/actions';

const propTypes = {
  clearSaveSuccess: PropTypes.func,
  isLoadingData: PropTypes.bool,
  isProcessing: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  isSuccessfulPut: PropTypes.bool,
  saveNutrientReport: PropTypes.func,
  types: PropTypes.array
};
const reporter = ({
  clearSaveSuccess,
  isLoading,
  isProcessing,
  isSuccessfulPut,
  isUserSecured,
  saveNutrientReport,
  types
}) => {
  const [amount, setAmount] = useState('');
  const [amountType, setAmountType] = useState('mg');
  const [comment, setComment] = useState('');
  const [consumptionTime, setConsumptionTime] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState('Caffeine');
  const [nameId, setNameId] = useState('caffeine');

  useEffect(() => {
    setIsDisabled(hasTruthy(isLoading, isProcessing, !isUserSecured));
  }, [isLoading, isProcessing, isUserSecured]);

  useEffect(() => {
    if (isSuccessfulPut) {
      resetFormValues();
      clearSaveSuccess();
    }
  }, [isSuccessfulPut]);

  useEffect(() => {
    console.info('types', types);
  }, [types]);

  const resetFormValues = () => {
    setAmount('');
    setAmountType('mg');
    setComment('');
    setConsumptionTime('');
    setName('');
    setNameId('');
  };

  const handleChangeName = (event) => {
    console.info('handleChangeName', event);
  };

  const handleChangeDate = (event) => {
    console.info(defaultValue(event, ''));
    setConsumptionTime('');
  };

  const handleSubmit = () => {
    const payload = {
      amount: Number(amount),
      amountType: amountType,
      comment: comment,
      id: uuidv4(),
      intakeTime: defaultValue(consumptionTime, new Date()).toJSON(),
      name,
      nameId
    };
    saveNutrientReport(payload);
  };

  return (
    <Fragment>
      <UnsecuredUserAlert isSecured={isUserSecured} />
      <FormControl variant="outlined">
        <Select
          disabled={isDisabled}
          onChange={handleChangeName}
          title="units"
          value={nameId}
        >
          <MenuItem value=""><em>- -</em></MenuItem>
          <MenuItem value="caffeine">Caffeine</MenuItem>
          <MenuItem value="excedrin">Excedrin</MenuItem>
        </Select>
      </FormControl>
      <TextField
        disabled={isDisabled}
        InputProps={{ min: 0 }}
        label="Amount"
        name="amount"
        onChange={(event) => setAmount(eventDefaultValue(event, 0))}
        type="number"
        value={amount}
        variant="outlined"
      />
      <FormControl variant="outlined">
        <Select
          disabled={isDisabled}
          onChange={(event) => setAmountType(eventDefaultValue(event, ''))}
          title="units"
          value={amountType}
        >
          <MenuItem value=""><em>- -</em></MenuItem>
          <MenuItem value="mg">mg</MenuItem>
          <MenuItem value="pill">pill</MenuItem>
          <MenuItem value="ounce">oz</MenuItem>
          <MenuItem value="pound">lb</MenuItem>
          <MenuItem value="kg">kg</MenuItem>
        </Select>
      </FormControl>
      <TextField
        disabled={isDisabled}
        fullWidth={true}
        label="Description"
        minRows={isDisabled ? 1 : 3}
        multiline={!isDisabled}
        name="comment"
        onChange={(event) => setComment(eventDefaultValue(event, ''))}
        value={comment}
        variant="outlined"
      />
      <DateSwitchPicker
        onDateChange={handleChangeDate}
        isDisabledDate={isDisabled}
        isDisabledSwitch={isDisabled}
        labelDate="Consumed"
        labelSwitch="Just consumed"
        valueDate={defaultValue(consumptionTime, '')}
      />
      <div>
        <Button disabled={isDisabled} onClick={resetFormValues} variant="contained">Clear</Button>
        <Button color="primary" disabled={hasTruthy(isDisabled, !!name)} onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
    </Fragment>);
};

reporter.propTypes = propTypes;
const mapStateToProps = state => ({
  isLoading: hasTruthy(state.nutrientsData.isLoadingReports, state.nutrientsData.isLoadingTypes),
  isProcessing: hasTruthy(state.nutrientsData.isProcessingReport, state.nutrientsData.isProcessingType),
  isSuccessfulPut: !!state.nutrientsData.reportPutPayload,
  isUserSecured: !!state.auth.token,
  types: state.nutrientsData.typesPayload
});
const mapDispatchToProps = {
  clearSaveSuccess: clearNutrientReportPutSuccess,
  saveNutrientReport: putNutrientReport
};
export default connect(mapStateToProps, mapDispatchToProps)(reporter);
