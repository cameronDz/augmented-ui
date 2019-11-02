import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createNewCaffieneConsumption } from '../state/actions';
import '../../../../../css/creator.css';

const propTypes = {
  fetchIntakesIfNeeded: PropTypes.func,
  posting: PropTypes.bool,
  successful: PropTypes.bool
};
const creator = props => {
  const submitButtonId = 'submitNutrientConsumption';
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (props.posting) {
      document.getElementById(submitButtonId).disabled = true;
    } else {
      document.getElementById(submitButtonId).disabled = false;
      if (props.successful) {
        resetFormValues();
      }
    }
  }, [props.posting]);

  const resetFormValues = () => {
    setAmount(0);
    setAmountType('');
    setComment('');
    setUserName('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const payload = {
      amount: Number(amount),
      amountType: amountType,
      comment: comment,
      intakeTime: new Date().toJSON(),
      userName: userName
    };
    props.createNewCaffieneConsumption(payload);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="field is-horizontal">
          <label className="label">Amount</label>
          <input className="input input-amount"
            name="amount"
            onChange={ e => setAmount(e.target.value) }
            required
            type="number"
            value={amount} />
          <label className="label">Type</label>
          <select onChange={ event => setAmountType(event.target.value)} value={amountType}>
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
            name="userName"
            onChange={ event => setUserName(event.target.value) }
            required
            type="text"
            value={userName} />
        </div>
        <div className="field">
          <label className="label">Comment</label>
          <textarea className="textarea"
            name="comment"
            onChange={ event => setComment(event.target.value) }
            type="textarea"
            value={comment} />
        </div>
        <div>
          <input id={submitButtonId} type="submit" value="Submit" />
        </div>
      </form>
    </Fragment>);
};

const mapStateToProps = state => ({
  posting: !!state.exercises.posting,
  successful: !!state.exercises.successfulPost
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, { createNewCaffieneConsumption })(creator);
