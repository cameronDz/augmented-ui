import React, { useState } from 'react';
import axios from 'axios';
import * as _config from '../../../../../assets/data/config.json';

const exerciseCreator = () => {

  const submitButtonId = "exerciseCreatorSubmitButton";
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState('');

  const resetFormValues = () => {
    setDescription('');
    setName('');
    setTypeId(1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    document.getElementById(submitButtonId).disabled = true;

    const header = { header : { "Content-Type": "application/json" } };
    const payload = { description, name,  typeId };
    const url = _config.apis.azure + 'exercises';
    axios.post(url, payload, header)
      .then(() => {
        resetFormValues();
      })
      .catch(error => {
        // TODO inform user
        console.error(error);
      })
      .finally(() => {
        document.getElementById(submitButtonId).disabled = false;
    });
  }

  return (
    <div>
      <p><strong>Create a new Exercise</strong></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label forHtml="name">Name</label><br/>
          <input name="name" onChange={event => setName(event.target.value) } type="text" value={name} />
        </div>
        <div>
          <label forHtml="description">Description</label><br/>
          <textarea name="description" onChange={event => setDescription(event.target.value)} value={description}>
          </textarea>
        </div>
        <div>
          <label forHtml="typeId">Type</label><br/>
          <input name="typeId" onChange={event => setTypeId(Number(event.target.value)) } type="number" value={typeId} />
        </div>
        <div>
          <input id={submitButtonId} type="submit" value="Submit" />
        </div>
      </form>
    </div>);
};

export default exerciseCreator;
