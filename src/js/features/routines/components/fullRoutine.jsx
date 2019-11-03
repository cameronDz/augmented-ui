import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoutineExercise from './routineExercise';
import { fetchRoutineSet } from '../state/actions';

const propTypes = {
  fetchRoutineSet: PropTypes.func,
  routine: PropTypes.shape({
    exercises: PropTypes.array,
    isFetching: PropTypes.bool,
    name: PropTypes.string
  })
};
const fullRoutine = props => {
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    props.fetchRoutineSet(1);
  }, []);

  useEffect(() => {
    setExercises(props.routine.exercises);
    setName(props.routine.name);
  }, [props.routine]);

  const exerciseComponent = exercises.map((item, key) => {
    return (<RoutineExercise key={key} {...item} />);
  });

  return (props.routine.isFetching)
    ? <div className='circular-loader'><CircularProgress /></div>
    : (<Fragment>
      <div><p><strong>Routine</strong></p></div>
      <p>{name}</p>
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
const mapStateToProps = state => ({ routine: state.routine });
export default connect(mapStateToProps, { fetchRoutineSet })(fullRoutine);
