import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleDropdown from '../../../components/simpleDropdown';

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
        temp.push({ id: id + '', key: id + '', title: name });
      }
    }
    setProcessedExercises(temp);
  }, [exercises]);

  const resetThenSet = id => {
    setSelectedId(id);
  };

  return (
    <SimpleDropdown
      list={processedExercises}
      resetThenSet={resetThenSet}
      selectedId={selectedId}
      title="Exercise Dropdown">
    </SimpleDropdown>);
};

ExerciseDropdown.propTypes = propTypes;
const mapStateToProps = state => ({ exercises: state.exercises.exerciseGetPayload });
export default connect(mapStateToProps)(ExerciseDropdown);
