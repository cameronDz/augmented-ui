import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../../components/Dropdown';

const propTypes = {
  exercises: PropTypes.array
};
const exerciseDropdown = ({ exercises }) => {
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
    <Dropdown
      list={processedExercises}
      resetThenSet={resetThenSet}
      selectedId={selectedId}
      title="Exercise Dropdown">
    </Dropdown>);
};

exerciseDropdown.propTypes = propTypes;
export default exerciseDropdown;
