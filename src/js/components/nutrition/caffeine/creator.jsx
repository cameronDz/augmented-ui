import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchIntakesIfNeeded } from '../../../state/caffeineIntake/actions';
import * as _config from '../../../../../assets/data/config.json';

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
    const header = { header : { "Content-Type": "application/json" } };
    const payload = {
      amount: Number(amount),
      amountType: amountType,
      comment: comment,
      intakeTime: new Date().toJSON(),
      userName: userName
    };

    axios.post(url, payload, header)
      .then(() => {
        resetFormValues();
        props.fetchIntakesIfNeeded(url);
      })
      .catch(error => {
        // TODO inform user
        console.log('error', error);
      })
      .finally(() => {
        document.getElementById(submitButtonId).disabled = false;
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="field is-horizontal">
          <label className="label">Amount &nbsp;</label>
          <input className="input"
            name="amount"
            onChange={ e => setAmount(e.target.value) }
            required
            type="number"
            value={amount} />
        </div>
        <div className="field is-horizontal">
          <label className="label">Amount Type &nbsp;</label>
          <input className="input"
            name="amountType"
            onChange={ e => setAmountType(e.target.value) }
            required
            type="text"
            value={amountType} />
        </div>
        <div className="field is-horizontal">
          <label className="label">User Name &nbsp;</label>
          <input className="input"
            name="userName"
            onChange={ e => setUserName(e.target.value) }
            required
            type="text"
            value={userName} />
        </div>
        <div className="field">
          <label className="label">Comment &nbsp;</label>
          <textarea className="textarea"
            name="comment"
            onChange={ e => setComment(e.target.value) }
            type="textarea"
            value={comment} />
        </div>
        <div>
          <input id={submitButtonId}
            type="submit"
            value="Submit" />
        </div>
      </form>
    </React.Fragment>);
};

export default connect(null, { fetchIntakesIfNeeded })(creator);
