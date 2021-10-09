import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { UnsecuredUserAlert } from '../../../../auth';
import { InputLabel } from '../../../../components/inputs';
import { clearPutSuccess, putCaffeine } from '../state/actions';

const propTypes = {
  clearSuccessSave: PropTypes.func,
  isLoadingCaffeine: PropTypes.bool,
  isProcessingCaffeine: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  isSuccessfulPut: PropTypes.bool,
  saveCaffeine: PropTypes.func
};
const creator = ({
  clearSuccessSave,
  isLoadingCaffeine,
  isProcessingCaffeine,
  isSuccessfulPut,
  isUserSecured,
  saveCaffeine
}) => {
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
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
    setAmount(0);
    setAmountType('');
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
      <div className="field is-horizontal">
        <InputLabel label="Amount" name="amount" />
        <input className="input input-amount"
          disabled={isDisabled}
          name="amount"
          onChange={ e => setAmount(e.target.value) }
          required
          style={{ height: '30px', width: '80px' }}
          type="number"
          value={amount} />
        <select
          disabled={isDisabled}
          onChange={ event => setAmountType(event.target?.value || '')}
          title="units"
          value={amountType}
        >
          <option default value="mg">mg</option>
          <option value="kg">kg</option>
          <option value="pound">lb</option>
          <option value="ounce">oz</option>
          <option value="">--</option>
        </select>
      </div>
      <div className="field">
        <InputLabel label="Comment" />
        <textarea className="textarea"
          disabled={isDisabled}
          name="comment"
          onChange={ event => setComment(event.target.value) }
          type="textarea"
          value={comment} />
      </div>
      <div>
        <button disabled={isDisabled} role="button" onClick={handleSubmit}>Submit</button>
      </div>
    </Fragment>);
};

creator.propTypes = propTypes;
const mapStateToProps = state => ({
  isLoadingCaffeine: state.caffeineIntakes.isLoadingCaffeine,
  isProcessingCaffeine: state.caffeineIntakes.isProcessingCaffeine,
  isSuccessfulPut: !!state.caffeineIntakes.caffeinePostPayload,
  isUserSecured: !!state.auth.token
});
const mapDispatchToProps = { clearSuccessSave: clearPutSuccess, saveCaffeine: putCaffeine };
export default connect(mapStateToProps, mapDispatchToProps)(creator);
