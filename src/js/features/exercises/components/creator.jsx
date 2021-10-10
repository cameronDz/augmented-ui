import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles, Button, TextField } from '@material-ui/core';
import { UnsecuredUserAlert } from '../../../auth';
import { clearSuccessSaveFlag, putExercise } from '../state/actions';
import { creatorStyles as styles } from './styles';

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
  const [type, setType] = useState('');

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
    setType('');
  };

  const handleSubmit = () => {
    const item = {
      createdDate: new Date().toJSON(),
      id: uuidv4(),
      description,
      name,
      type
    };
    saveExercise(item);
  };

  const classes = useStyles();
  return (
    <div className={classNames(classes.exerciseCreatorRoot)}>
      <UnsecuredUserAlert isSecured={isUserSecured} />
      <div className={classes.exerciseInputContainer}>
        <TextField
          disabled={isDisabled}
          label="Exercise name"
          name="name"
          onChange={event => setName(event.target.value || '')}
          value={name}
          variant="outlined"
        />
        <TextField
          disabled={isDisabled}
          label="Exercise type"
          name="type"
          onChange={event => setType(event.target?.value || '')}
          value={type}
          variant="outlined"
        />
      </div>
      <div className={classNames(classes.exerciseInputContainer)}>
        <TextField
          disabled={isDisabled}
          fullWidth={true}
          label="Exercise description"
          multiline={!isDisabled}
          name="description"
          onChange={event => setDescription(event.target.value || '')}
          value={description}
          variant="outlined"
        />
      </div>
      <div className={classNames(classes.exerciseInputContainer)}>
        <Button
          disabled={isDisabled || (!name && !type && !description)}
          onClick={resetFormValues}
          variant="contained"
        >
          Clear
        </Button>
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
