import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { UnsecuredUserAlert } from '../../../auth';
import { clearNutrientReportPutSuccess, putNutrientReport } from '../state/actions';

const propTypes = {
  clearSaveSuccess: PropTypes.func,
  isLoadingNutrient: PropTypes.bool,
  isProcessingNutrientReport: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  isSuccessfulPut: PropTypes.bool,
  saveNutrientReport: PropTypes.func
};
const reporter = ({
  clearSaveSuccess,
  isLoadingNutrient,
  isProcessingNutrientReport,
  isSuccessfulPut,
  isUserSecured,
  saveNutrientReport
}) => {
  const [amount, setAmount] = useState('');
  const [amountType, setAmountType] = useState('mg');
  const [comment, setComment] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoadingNutrient || isProcessingNutrientReport);
  }, [isLoadingNutrient, isProcessingNutrientReport]);

  useEffect(() => {
    setIsDisabled(isLoading || !isUserSecured);
  }, [isLoading, isUserSecured]);

  useEffect(() => {
    if (isSuccessfulPut) {
      resetFormValues();
      clearSaveSuccess();
    }
  }, [isSuccessfulPut]);

  const resetFormValues = () => {
    setAmount('');
    setAmountType('mg');
    setComment('');
  };

  const handleSubmit = () => {
    const payload = {
      amount: Number(amount),
      id: uuidv4(),
      intakeTime: new Date().toJSON(),
      amountType: amountType,
      comment: comment
    };
    saveNutrientReport(payload);
  };

  return (
    <Fragment>
      <UnsecuredUserAlert isSecured={isUserSecured} />
      <div>
        <TextField
          disabled={isDisabled}
          InputProps={{ min: 0 }}
          label="Amount"
          name="amount"
          onChange={event => setAmount(event.target?.value || 0)}
          type="number"
          value={amount}
          variant="outlined"
        />
        <FormControl className="aug-mrg-left-12" variant="outlined">
          <Select
            disabled={isDisabled}
            onChange={event => setAmountType(event.target?.value || '')}
            title="units"
            value={amountType}
          >
            <MenuItem value=""><em>- -</em></MenuItem>
            <MenuItem value="mg">mg</MenuItem>
            <MenuItem value="kg">kg</MenuItem>
            <MenuItem value="pound">lb</MenuItem>
            <MenuItem value="ounce">oz</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          disabled={isDisabled}
          fullWidth={true}
          label="Description"
          minRows={isDisabled ? 1 : 3}
          multiline={!isDisabled}
          name="comment"
          onChange={event => setComment(event.target?.value || '')}
          value={comment}
          variant="outlined"
        />
      </div>
      <div>
        <Button disabled={isDisabled} onClick={resetFormValues} variant="contained">Clear</Button>
        <Button color="primary" disabled={isDisabled} onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
    </Fragment>);
};

reporter.propTypes = propTypes;
const mapStateToProps = state => ({
  isLoadingNutrient: state.nutrientsData.isLoadingNutrient,
  isProcessingNutrientReport: state.nutrientsData.isProcessingNutrientReport,
  isSuccessfulPut: !!state.nutrientsData.nutrientReportPutPayload,
  isUserSecured: !!state.auth.token
});
const mapDispatchToProps = {
  clearSaveSuccess: clearNutrientReportPutSuccess,
  saveNutrientReport: putNutrientReport
};
export default connect(mapStateToProps, mapDispatchToProps)(reporter);
