import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { getExerciseList, putExercise } from '../state/actions';

const authWarning = '* must authenticate to submit exercise';
const propTypes = {
  exercises: PropTypes.array,
  getExercises: PropTypes.func,
  isLoading: PropTypes.bool,
  isProcessing: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  saveExercise: PropTypes.func,
  successfulPut: PropTypes.bool,
  username: PropTypes.string
};
const ExerciseCreator = ({
  exercises,
  getExercises,
  isLoading,
  isProcessing,
  isUserSecured,
  saveExercise,
  successfulPut,
  username
}) => {
  const [description, setDescription] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState('');

  useEffect(() => {
    resetFormValues();
  }, []);

  useEffect(() => {
    setDisabled(isLoading || isProcessing || !isUserSecured);
  }, [isLoading, isProcessing, isUserSecured]);

  useEffect(() => {
    if (successfulPut) {
      getExercises();
      resetFormValues();
    }
  }, [successfulPut]);

  const resetFormValues = () => {
    setDescription('');
    setName('');
    setTypeId(1);
  };

  const handleSubmit = () => {
    const item = { createdDate: new Date(), description, id: uuidv4(), name, typeId, username };
    const payload = { exercises: [item, ...exercises] };
    saveExercise(payload);
  };

  return (
    <Fragment>
      <p><strong>Create a new Exercise</strong></p>
      {!isUserSecured && <p style={{ color: 'red' }}>{authWarning}</p>}
      <div>
        <label forhtml="name">Name</label><br/>
        <input disabled={isDisabled} name="name" onChange={event => setName(event.target.value)} type="text" value={name} />
      </div>
      <div>
        <label forhtml="description">Description</label><br/>
        <textarea disabled={isDisabled} name="description" onChange={event => setDescription(event.target.value)} value={description}>
        </textarea>
      </div>
      <div>
        <label forhtml="typeId">Type</label><br/>
        <input disabled={isDisabled} name="typeId" onChange={event => setTypeId(Number(event.target.value)) } type="number" value={typeId} />
      </div>
      <div>
        <button disabled={isDisabled} role="button" onClick={handleSubmit}>Submit</button>
      </div>
    </Fragment>);
};

ExerciseCreator.propTypes = propTypes;
const mapStateToProps = state => ({
  exercises: state.exercises.exerciseGetPayload,
  isLoading: state.exercises.isLoadingExercises,
  isProcessing: state.exercises.isProcessingExercise,
  isUserSecured: !!state.auth.token,
  successfulPut: !!state.exercises.exercisePostPayload,
  username: state.auth.username
});
export default connect(mapStateToProps, { getExercises: getExerciseList, saveExercise: putExercise })(ExerciseCreator);
