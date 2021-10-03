import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCaffeineList, putCaffeine } from '../state/actions';
import '../../../../../css/creator.css';

const authWarning = '* must authenticate to submit exercise';
const propTypes = {
  caffeine: PropTypes.array,
  getCaffeines: PropTypes.func,
  isLoadingCaffeine: PropTypes.bool,
  isProcessingCaffeine: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  isSuccessfulPut: PropTypes.bool,
  saveCaffeine: PropTypes.func
};
const creator = ({ caffeine, getCaffeines, isLoadingCaffeine, isProcessingCaffeine, isSuccessfulPut, isUserSecured, saveCaffeine }) => {
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
  const [comment, setComment] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userName, setUserName] = useState('');
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
      getCaffeines();
    }
  }, [isSuccessfulPut]);

  const resetFormValues = () => {
    setAmount(0);
    setAmountType('');
    setComment('');
    setUserName('');
  };

  const handleSubmit = () => {
    const payload = {
      amount: Number(amount),
      amountType: amountType,
      comment: comment,
      intakeTime: new Date().toJSON(),
      userName: userName
    };
    saveCaffeine({ caffeine: [payload, ...caffeine] });
  };

  return (
    <Fragment>
      {!isUserSecured && <div><p style={{ color: 'red' }}>{authWarning}</p></div>}
      <div className="field is-horizontal">
        <label className="label">Amount</label>
        <input className="input input-amount"
          disabled={isDisabled}
          name="amount"
          onChange={ e => setAmount(e.target.value) }
          required
          type="number"
          value={amount} />
        <label className="label">Type</label>
        <select disabled={isDisabled} onChange={ event => setAmountType(event.target.value)} value={amountType}>
          <option default value="">--</option>
          <option value="mg">Milligram</option>
          <option value="kg">Kilogram</option>
          <option value="pound">Pound</option>
          <option value="ounce">Ounce</option>
        </select>
      </div>
      <div className="field is-horizontal">
        <label className="label">User</label>
        <input className="input"
          disabled={isDisabled}
          name="userName"
          onChange={ event => setUserName(event.target.value) }
          required
          type="text"
          value={userName} />
      </div>
      <div className="field">
        <label className="label">Comment</label>
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

const mapStateToProps = state => ({
  caffeine: state.caffeineIntakes.caffeineGetPayload,
  isLoadingCaffeine: state.caffeineIntakes.isLoadingCaffeine,
  isProcessingCaffeine: state.caffeineIntakes.isProcessingCaffeine,
  isSuccessfulPut: !!state.caffeineIntakes.caffeinePostPayload,
  isUserSecured: !!state.auth.token
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, { getCaffeines: getCaffeineList, saveCaffeine: putCaffeine })(creator);
