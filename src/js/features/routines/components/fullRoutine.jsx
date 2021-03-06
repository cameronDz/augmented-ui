import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoutineExercise from './routineExercise';

const propTypes = {
  currentRoutine: PropTypes.shape({
    exercises: PropTypes.array,
    id: PropTypes.string,
    name: PropTypes.string,
    note: PropTypes.string
  }),
  isFetching: PropTypes.bool
};

const fullRoutine = ({ currentRoutine, isFetching }) => {
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    setExercises(((currentRoutine) && (Array.isArray(currentRoutine.exercises))) ? currentRoutine.exercises : []);
    setName(currentRoutine ? currentRoutine.name : '');
  }, [currentRoutine]);

  const exerciseComponent = exercises.map((item, key) => {
    return (<RoutineExercise key={key} {...item} />);
  });

  return (isFetching)
    ? <div className='circular-loader'><CircularProgress /></div>
    : (<Fragment>
      <div>
        <p>
          <strong>Routine: </strong>
          {name}
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sets</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {exerciseComponent}
        </tbody>
      </table>
    </Fragment>);
};

fullRoutine.propTypes = propTypes;
export default fullRoutine;
