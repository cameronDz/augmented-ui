import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchIntakesIfNeeded } from '../state/actions';
import * as _config from '../../../../../assets/data/config.json';
import '../../../../css/creator.css';

const propTypes = {
  fetchIntakesIfNeeded: PropTypes.func
};

const creator = props => {
  const submitButtonId = 'submitNutrientConsumption';
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');

  const resetFormValues = () => {
    setAmount(0);
    setAmountType('');
    setComment('');
    setUserName('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    document.getElementById(submitButtonId).disabled = true;
    const url = _config.apis.azure + 'CaffeineNutrientIntakes';
    const header = { header: { 'Content-Type': 'application/json' } };
    const payload = {
      amount: Number(amount),
      amountType: amountType,
      comment: comment,
      intakeTime: new Date().toJSON(),
      userName: userName
    };

    // TODO move to actions
    axios.post(url, payload, header)
      .then(() => {
        resetFormValues();
        props.fetchIntakesIfNeeded(url);
      })
      .catch(error => {
        // TOOD inform user
        console.error(error);
      })
      .finally(() => {
        document.getElementById(submitButtonId).disabled = false;
      });
  };

  return (
    <React.Fragment>
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
    </React.Fragment>);
};

creator.propTypes = propTypes;
export default connect(null, { fetchIntakesIfNeeded })(creator);
