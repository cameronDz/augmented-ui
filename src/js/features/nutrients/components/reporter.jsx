import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { UnsecuredUserAlert } from '../../../auth';
import { clearPutSuccess, putCaffeine } from '../state/actions';

const propTypes = {
  clearSuccessSave: PropTypes.func,
  isLoadingCaffeine: PropTypes.bool,
  isProcessingCaffeine: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  isSuccessfulPut: PropTypes.bool,
  saveCaffeine: PropTypes.func
};
const reporter = ({
  clearSuccessSave,
  isLoadingCaffeine,
  isProcessingCaffeine,
  isSuccessfulPut,
  isUserSecured,
  saveCaffeine
}) => {
  const [amount, setAmount] = useState('');
  const [amountType, setAmountType] = useState('mg');
  const [comment, setComment] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoadingCaffeine || isProcessingCaffeine);
  }, [isLoadingCaffeine, isProcessingCaffeine]);

  useEffect(() => {
    setIsDisabled(isLoading || !isUserSecured);
  }, [isLoading, isUserSecured]);

  useEffect(() => {
    if (isSuccessfulPut) {
      resetFormValues();
      clearSuccessSave();
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
    saveCaffeine(payload);
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
  isLoadingCaffeine: state.nutrientsData.isLoadingCaffeine,
  isProcessingCaffeine: state.nutrientsData.isProcessingCaffeine,
  isSuccessfulPut: !!state.nutrientsData.caffeinePostPayload,
  isUserSecured: !!state.auth.token
});
const mapDispatchToProps = { clearSuccessSave: clearPutSuccess, saveCaffeine: putCaffeine };
export default connect(mapStateToProps, mapDispatchToProps)(reporter);
