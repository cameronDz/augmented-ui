import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OutlinedSelector } from '../../../components/inputs';

const propTypes = {
  exercises: PropTypes.array
};
const ExerciseDropdown = ({ exercises }) => {
  const [processedExercises, setProcessedExercises] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    const temp = [];
    const length = Array.isArray(exercises) ? exercises.length : 0;
    for (let idx = 0; idx < length; idx++) {
      if ((exercises[idx]) && (exercises[idx].id) && (exercises[idx].name)) {
        const { id, name } = exercises[idx];
        temp.push({ id, name });
      }
    }
    setProcessedExercises(temp);
  }, [exercises]);

  const handleChange = (id) => {
    setSelectedId(id);
  };

  return (
    <OutlinedSelector
      isDisabled={false}
      isExtended={true}
      label="Exercise dropdown"
      onChange={handleChange}
      options={processedExercises}
      value={selectedId}
    />
  );
};

ExerciseDropdown.propTypes = propTypes;
const mapStateToProps = state => ({ exercises: state.exercises.exerciseGetPayload });
export default connect(mapStateToProps)(ExerciseDropdown);
