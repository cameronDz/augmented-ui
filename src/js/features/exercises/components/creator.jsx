import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createNewExercisePost } from '../state/actions';

const propTypes = {
  createNewExercisePost: PropTypes.func,
  posting: PropTypes.bool,
  successful: PropTypes.bool
};
const exerciseCreator = props => {
  const submitButtonId = 'exerciseCreatorSubmitButton';
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState('');

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
    setDescription('');
    setName('');
    setTypeId(1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const payload = { description, name, typeId };
    props.createNewExercisePost(payload);
  };

  return (
    <Fragment>
      <p><strong>Create a new Exercise</strong></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label forhtml="name">Name</label><br/>
          <input name="name" onChange={event => setName(event.target.value) } type="text" value={name} />
        </div>
        <div>
          <label forhtml="description">Description</label><br/>
          <textarea name="description" onChange={event => setDescription(event.target.value)} value={description}>
          </textarea>
        </div>
        <div>
          <label forhtml="typeId">Type</label><br/>
          <input name="typeId" onChange={event => setTypeId(Number(event.target.value)) } type="number" value={typeId} />
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
exerciseCreator.propTypes = propTypes;
export default connect(mapStateToProps, { createNewExercisePost })(exerciseCreator);
