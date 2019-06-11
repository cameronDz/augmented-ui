import React, { useState } from 'react';
import axios from 'axios';
import * as _config from '../../../../../assets/data/config.json';

const creator = () => {

  const submitButtonId = 'submitNutrientConsumption';
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
  const [comment, setComment] = useState('');
  const [nutrient, setNutrient] = useState('');
  const [userName, setUserName] = useState('');

  const resetFormValues = () => {
    setAmount(0);
    setAmountType('');
    setComment('');
    setNutrient('');
    setUserName('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    document.getElementById(submitButtonId).disabled = true;

    const url = _config.apis.azure + 'CaffeineNutrientIntakes';
    const header = { "Content-type": "application/json" };
    const payload = JSON.stringify({
      amount: amount,
      amountType: amountType,
      comment: comment,
      intakeTime: new Date().toJSON(),
      userName: userName
    });

    axios.post(url, header, payload)
      .then(response => {
        console.log('response', response);
        resetFormValues();
      })
      .catch(error => {
        console.log('error', error);
      })
      .finally(() => {
        document.getElementById(submitButtonId).disabled = false;
    });
  };

  return (
    <React.Fragment>
      <div>Caffiene Creator</div>
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
          <label className="label">Nutrient &nbsp;</label>
          <input className="input"
            name="nutrient"
            onChange={ e => setNutrient(e.target.value) }
            required
            type="text"
            value={nutrient} />
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

export default creator;
