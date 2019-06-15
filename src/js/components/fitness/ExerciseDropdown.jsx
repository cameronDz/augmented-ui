import React, { useEffect, useState } from 'react';
import get from 'lodash.get';
import Dropdown from '../Dropdown';
import * as _config from '../../../../assets/data/config.json';

const exerciseDropdown = () => {
  const [exercises, setExercises] = useState();

  // TODO move to redux state
  useEffect(() => {
    const url = _config.apis.azure + 'exercises';
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        setExercises(processExercise(data));
    });
  }, []);

  const processExercise = data => {
    return (Array.isArray(data))
      ? data.map((item, index) => {
          return {
            'id': get(item, 'exerciseId', -1),
            'title': get(item, 'name', ''),
            'key': index,
            'selected': false
          };
        })
      : null;
  };

  const resetThenSet = (id, stateKey) => {
    exercises.forEach(item => item.selected = false);
    exercises[stateKey].selected = true;
  }

  return (
    <React.Fragment>
      <div>
        <strong>Exercise Dropdown Menu</strong>
      </div>
      <Dropdown list={exercises}
        resetThenSet={resetThenSet}
        title="Exercise Dropdown" />
    </React.Fragment>);
};

export default exerciseDropdown;
