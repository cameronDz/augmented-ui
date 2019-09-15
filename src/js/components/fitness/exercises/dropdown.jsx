import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Dropdown from '../../Dropdown';
import * as _config from '../../../../../assets/data/config.json';

const propTypes = {
  title: PropTypes.string
};
const exerciseDropdown = props => {
  const [exercises, setExercises] = useState();
  const [selectedId, setSelectedId] = useState(-1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const url = _config.apis.azure + 'exercises';
    const propTitle = (props.title) ? props.title : 'Dropdown';
    setTitle(propTitle);
    // TODO move to redux state and own useEffect method
    const header = { header: { 'Content-Type': 'application/json' } };
    axios.get(url, header)
      .then(payload => {
        setExercises(processExercise(payload));
      })
      .catch(error => {
        // TODO inform user
        console.error(error);
      });
  }, []);

  const processExercise = data => {
    return (Array.isArray(data.data)) && data.data.map((item, index) => {
      const exerciseId = (item.exerciseId) ? item.exerciseId : -1;
      const name = (item.name) ? item.name : '';
      return {
        id: exerciseId,
        title: name,
        key: index
      };
    });
  };

  const resetThenSet = id => {
    setSelectedId(id);
  };

  const dropDownTitle = () => {
    return !!title && (<div><strong>{title}</strong></div>);
  };

  return (
    <Fragment>
      {dropDownTitle()}
      <Dropdown list={exercises} resetThenSet={resetThenSet} selectedId={selectedId} title="Exercise Dropdown" />
    </Fragment>);
};

exerciseDropdown.propTypes = propTypes;
export default exerciseDropdown;
