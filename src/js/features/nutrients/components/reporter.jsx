import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { UnitTypeSelector } from './unitTypeSelector';
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
  const [consumptionTime, setConsumptionTime] = useState(new Date());
  const [firstName, setFirstName] = useState('');
  const [firstNameId, setFirstNameId] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState('');
  const [nameId, setNameId] = useState('');
  const [unitItems, setUnitItems] = useState([]);

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
    let hasSetSelected = false;
    const units = [];
    const length = Array.isArray(types) ? types.length : 0;
    for (let idx = 0; idx < length; idx++) {
      if (types[idx]?.id && types[idx]?.name) {
        units.push(<MenuItem key={types[idx].id} value={types[idx].id}>{types[idx].name}</MenuItem>);
        if (!hasSetSelected) {
          setName(types[idx].name);
          setFirstName(types[idx].name);
          setNameId(types[idx].id);
          setFirstNameId(types[idx].id);
          hasSetSelected = true;
        }
      }
    }
    setUnitItems(units);
  }, [types]);

  const resetFormValues = () => {
    setAmount('');
    setAmountType('mg');
    setComment('');
    setConsumptionTime(new Date());
    setName(firstName);
    setNameId(firstNameId);
  };

  const handleChangeName = (event) => {
    const id = eventDefaultValue(event, '');
    if (id) {
      const matchingType = Array.isArray(types) && types.find((type) => id === type?.id);
      const foundName = matchingType?.name;
      if (foundName) {
        setName(foundName);
        setNameId(id);
      }
    }
  };

  const handleChangeDate = (event) => {
    setConsumptionTime(defaultValue(event, ''));
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
          {unitItems?.length > 0 ? unitItems : <MenuItem value=""><em>- -</em></MenuItem>}
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
      <UnitTypeSelector
        isDisabled={isDisabled}
        onChange={(value) => setAmountType(defaultValue(value, ''))}
        value={amountType}
      />
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
        <Button color="primary" disabled={hasTruthy(isDisabled, !name)} onClick={handleSubmit} variant="contained">Submit</Button>
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
