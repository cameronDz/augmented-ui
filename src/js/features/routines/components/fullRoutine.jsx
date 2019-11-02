import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RoutineExercise from './routineExercise';
import { fetchRoutineSet } from '../state/actions';

const propTypes = {
  fetchRoutineSet: PropTypes.func,
  rountine: PropTypes.object
};
const fullRoutine = props => {
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    props.fetchRoutineSet(1);
  }, []);

  useEffect(() => {
    setExercises(props.rountine.exercises);
    setName(prop.rountine.name);
  }, [props.rountine]);

  const exerciseComponent = exercises.map((item, key) => {
    return (<RoutineExercise key={key} {...item} />);
  });

  return (
    <Fragment>
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
const mapStateToProps = state => ({ rountine: state.rountine });
export default connect(mapStateToProps, { fetchRoutineSet })(fullRoutine);
