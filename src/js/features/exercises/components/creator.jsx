import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExerciseList, putExercise } from '../state/actions';

const propTypes = {
  exercises: PropTypes.array,
  getExerciseList: PropTypes.func,
  isLoading: PropTypes.bool,
  isProcessing: PropTypes.bool,
  putExercise: PropTypes.func,
  successfulPut: PropTypes.bool
};
const exerciseCreator = ({ exercises, getExerciseList, isLoading, isProcessing, putExercise, successfulPut }) => {
  const [description, setDescription] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState('');

  useEffect(() => {
    resetFormValues();
  }, []);

  useEffect(() => {
    setIsSubmitDisabled(isLoading || isProcessing);
  }, [isLoading, isProcessing]);

  useEffect(() => {
    if (successfulPut) {
      getExerciseList();
      resetFormValues();
    }
  }, [successfulPut]);

  const resetFormValues = () => {
    setDescription('');
    setName('');
    setTypeId(1);
  };

  const handleSubmit = () => {
    const id = 'ex-id-' + new Date().getTime();
    const item = { description, id, name, typeId };
    const payload = { exercises: [item, ...exercises] };
    putExercise(payload);
  };

  return (
    <Fragment>
      <p><strong>Create a new Exercise</strong></p>
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
        <button disabled={isSubmitDisabled} role="button" onClick={handleSubmit}>Submit</button>
      </div>
    </Fragment>);
};

const mapStateToProps = state => ({
  exercises: state.exercises.exerciseGetPayload,
  isLoading: state.exercises.isLoadingExercises,
  isProcessing: state.exercises.isProcessingExercise,
  successfulPut: !!state.exercises.exercisePostPayload
});
exerciseCreator.propTypes = propTypes;
export default connect(mapStateToProps, { getExerciseList, putExercise })(exerciseCreator);
