import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';
import { UnitTypeSelector } from './unitTypeSelector';
import { DateSwitchPicker, OutlinedSelector } from '../../../components/inputs';
import { UnsecuredUserAlert } from '../../../auth';
import { createValidTypesList } from '../lib';
import { defaultValue, eventDefaultValue } from '../../../lib/defaultValue';
import { hasTruthy } from '../../../lib/hasTruthy';
import {
  clearNutrientReportPutSuccess,
  putNutrientReport
} from '../state/actions';

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
  const [description, setDescription] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameId, setFirstNameId] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState('');
  const [nameId, setNameId] = useState('');
  const [optionNames, setOptionNames] = useState([]);

  useEffect(() => {
    setIsDisabled(hasTruthy(isLoading, isProcessing, !isUserSecured));
  }, [isLoading, isProcessing, isUserSecured]);

  useEffect(() => {
    if (isSuccessfulPut) {
      resetFormValues();
      resetOptions();
      clearSaveSuccess();
    }
  }, [isSuccessfulPut]);

  useEffect(() => {
    const validTypes = createValidTypesList(types);
    setOptionNames(validTypes);
  }, [types]);

  useEffect(() => {
    resetOptions();
  }, [optionNames]);

  const resetFormValues = () => {
    setAmount('');
    setAmountType('mg');
    setComment('');
    setConsumptionTime(new Date());
    setName(firstName);
    setNameId(firstNameId);
  };

  const resetOptions = () => {
    const baseName = defaultValue(optionNames?.[0]?.name, '');
    const baseId = defaultValue(optionNames?.[0]?.id, '');
    setName(baseName);
    setFirstName(baseName);
    setNameId(baseId);
    setFirstNameId(baseId);
    handleChangeName(baseId);
  };

  const handleChangeName = (newId = '') => {
    const matchingType =
      Array.isArray(types) && newId && types.find((type) => newId === type?.id);
    const newName = defaultValue(matchingType?.name, '');
    const newUnit = defaultValue(matchingType?.defaultUnit, '');
    const newDesc = defaultValue(matchingType?.description, '');
    setName(newName);
    setNameId(newId);
    setAmountType(newUnit);
    setDescription(newDesc);
  };

  const handleChangeDate = (date) => {
    setConsumptionTime(defaultValue(date, ''));
  };

  const handleSubmit = () => {
    const payload = {
      amount: Number(amount),
      amountType: amountType,
      createdDate: new Date().toJSON(),
      comment: comment,
      description,
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
      <OutlinedSelector
        isDisabled={isDisabled}
        isExtended={true}
        label="Nutrient Name"
        onChange={handleChangeName}
        options={optionNames}
        value={nameId}
      />
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
        <Button
          disabled={isDisabled}
          onClick={resetFormValues}
          variant="contained"
        >
          Clear
        </Button>
        <Button
          color="primary"
          disabled={hasTruthy(isDisabled, !name)}
          onClick={handleSubmit}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </Fragment>
  );
};

reporter.propTypes = propTypes;
const mapStateToProps = (state) => ({
  isLoading: hasTruthy(
    state.nutrientsData.isLoadingReports,
    state.nutrientsData.isLoadingTypes
  ),
  isProcessing: hasTruthy(
    state.nutrientsData.isProcessingReport,
    state.nutrientsData.isProcessingType
  ),
  isSuccessfulPut: !!state.nutrientsData.reportPutPayload,
  isUserSecured: !!state.auth.token,
  types: state.nutrientsData.typesPayload
});
const mapDispatchToProps = {
  clearSaveSuccess: clearNutrientReportPutSuccess,
  saveNutrientReport: putNutrientReport
};
export default connect(mapStateToProps, mapDispatchToProps)(reporter);
