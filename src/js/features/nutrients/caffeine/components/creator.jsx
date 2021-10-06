import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { InputLabel } from '../../../../components/inputs';
import { getCaffeineList, putCaffeine } from '../state/actions';

const authWarning = '* must authenticate to submit exercise';
const propTypes = {
  caffeine: PropTypes.array,
  getCaffeines: PropTypes.func,
  isLoadingCaffeine: PropTypes.bool,
  isProcessingCaffeine: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  isSuccessfulPut: PropTypes.bool,
  saveCaffeine: PropTypes.func,
  username: PropTypes.string
};
const creator = ({
  caffeine,
  getCaffeines,
  isLoadingCaffeine,
  isProcessingCaffeine,
  isSuccessfulPut,
  isUserSecured,
  saveCaffeine,
  username
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
      getCaffeines();
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
      comment: comment,
      userName: username
    };
    saveCaffeine({ caffeine: [payload, ...caffeine] });
  };

  return (
    <Fragment>
      {!isUserSecured && <div><p style={{ color: 'red' }}>{authWarning}</p></div>}
      <div className="field is-horizontal">
        <InputLabel label="Amount" />
        <input className="input input-amount"
          disabled={isDisabled}
          name="amount"
          onChange={ e => setAmount(e.target.value) }
          required
          style={{ height: '30px', width: '80px' }}
          type="number"
          value={amount} />
        <InputLabel label="Type" />
        <select disabled={isDisabled} onChange={ event => setAmountType(event.target.value)} value={amountType}>
          <option default value="">--</option>
          <option value="mg">Milligram</option>
          <option value="kg">Kilogram</option>
          <option value="pound">Pound</option>
          <option value="ounce">Ounce</option>
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

const mapStateToProps = state => ({
  caffeine: state.caffeineIntakes.caffeineGetPayload,
  isLoadingCaffeine: state.caffeineIntakes.isLoadingCaffeine,
  isProcessingCaffeine: state.caffeineIntakes.isProcessingCaffeine,
  isSuccessfulPut: !!state.caffeineIntakes.caffeinePostPayload,
  isUserSecured: !!state.auth.token,
  username: state.auth.username
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, { getCaffeines: getCaffeineList, saveCaffeine: putCaffeine })(creator);
