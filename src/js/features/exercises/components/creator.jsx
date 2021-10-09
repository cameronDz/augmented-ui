import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles, Button, TextField } from '@material-ui/core';
import { clearSuccessSaveFlag, putExercise } from '../state/actions';
import { creatorStyles as styles } from './styles';

const authWarning = '* must authenticate to submit exercise';
const propTypes = {
  clearSave: PropTypes.func,
  isLoading: PropTypes.bool,
  isProcessing: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  saveExercise: PropTypes.func,
  successfulPut: PropTypes.bool
};
const useStyles = makeStyles(() => styles);
const ExerciseCreator = ({
  clearSave,
  isLoading,
  isProcessing,
  isUserSecured,
  saveExercise,
  successfulPut
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
      resetFormValues();
      clearSave();
    }
  }, [successfulPut]);

  const resetFormValues = () => {
    setDescription('');
    setName('');
    setTypeId('');
  };

  const handleSubmit = () => {
    const item = {
      createdDate: new Date().toJSON(),
      id: uuidv4(),
      description,
      name,
      typeId
    };
    saveExercise(item);
  };

  const classes = useStyles();
  return (
    <div className={classNames(classes.exerciseCreatorRoot)}>
      {!isUserSecured && <p style={{ color: 'red' }}>{authWarning}</p>}
      <div className={classes.exerciseInputContainer}>
        <TextField
          disabled={isDisabled}
          label="Exercise name"
          name="name"
          onChange={event => setName(event.target.value || '')}
          value={name}
          variant="outlined"
        />
      </div>
      <div className={classNames(classes.exerciseInputContainer)}>
        <TextField
          disabled={isDisabled}
          label="Exercise type"
          name="typeId"
          onChange={event => setTypeId(event.target?.value || '')}
          value={typeId}
          variant="outlined"
        />
      </div>
      <div className={classNames(classes.exerciseInputContainer)}>
        <TextField
          disabled={isDisabled}
          fullWidth={true}
          label="Exercise description"
          multiline={true}
          name="description"
          onChange={event => setDescription(event.target.value || '')}
          value={description}
          variant="outlined"
        />
      </div>
      <div className={classNames(classes.exerciseInputContainer)}>
        <Button color="primary" disabled={isDisabled || !name} onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
    </div>);
};

ExerciseCreator.propTypes = propTypes;
const mapStateToProps = state => ({
  isLoading: state.exercises.isLoadingExercises,
  isProcessing: state.exercises.isProcessingExercise,
  isUserSecured: !!state.auth.token,
  successfulPut: !!state.exercises.exercisePostPayload
});
const mapDispatchToProps = {
  clearSave: clearSuccessSaveFlag,
  saveExercise: putExercise
};
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCreator);
