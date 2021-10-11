import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoutineExercise from './routineExercise';
import { defaultValue } from '../../../lib/defaultValue';

const propTypes = {
  isErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  list: PropTypes.array,
  selectedId: PropTypes.string
};
const FullRoutine = ({
  isErrored = false,
  isLoading = false,
  list = [],
  selectedId = ''
}) => {
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const current = Array.isArray(list) && selectedId ? list.find((item) => selectedId === item?.id) : null;
    const currExercises = defaultValue(current?.exercises, []);
    const currName = defaultValue(current?.name, '');
    setExercises(currExercises);
    setName(currName);
  }, [selectedId]);

  const exerciseComponent = exercises.map((item, key) => {
    return (<RoutineExercise key={key} {...item} />);
  });

  return (
    <Fragment>
      {isLoading && <div className='circular-loader'><CircularProgress /></div>}
      {!isLoading && isErrored && <div className='circular-loader'><CircularProgress /></div>}
      {!isLoading && !isErrored && (
        <Fragment>
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
        </Fragment>
      )}
    </Fragment>
  );
};

FullRoutine.propTypes = propTypes;
const mapStateToProps = (state) => ({
  isErrored: !!state.routine.rountineError,
  isLoading: !!state.routine.isFetchingRountines,
  list: state.routine.routineList
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(FullRoutine);
