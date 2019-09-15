import React, { useEffect, useState } from 'react';
import Dropdown from '../../Dropdown';
import * as _config from '../../../../../assets/data/config.json';

const exerciseDropdown = props => {
  const [exercises, setExercises] = useState();
  const [selectedId, setSelectedId] = useState(-1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const url = _config.apis.azure + 'exercises';
    const propTitle = (props.title) ? props.title : 'Dropdown';
    setTitle(propTitle);
    // TODO move to redux state and own useEffect method
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setExercises(processExercise(data));
      });
  }, []);

  const processExercise = data => {
    return (Array.isArray(data))
      ? data.map((item, index) => {
        const exerciseId = (item.exerciseId) ? item.exerciseId : -1;
        const name = (item.name) ? item.name : '';
        return {
          id: exerciseId,
          title: name,
          key: index,
          selected: false
        };
      })
      : null;
  };

  const resetThenSet = (id, stateKey) => {
    exercises.forEach(item => item.selected = false);
    exercises[stateKey].selected = true;
    setSelectedId(id);
  };

  const dropDownTitle = () => {
    return (title)
      ? (<div><strong>{title}</strong></div>)
      : null;
  };

  return (
    <React.Fragment>
      {dropDownTitle()}
      <Dropdown list={exercises} resetThenSet={resetThenSet} title="Exercise Dropdown" />
    </React.Fragment>);
};

export default exerciseDropdown;
