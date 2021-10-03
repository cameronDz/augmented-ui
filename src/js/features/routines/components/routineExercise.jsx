import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  note: PropTypes.string,
  sets: PropTypes.array
};
const RoutineExercise = ({ name, note, sets }) => {
  const setComponent = sets.map((item, key) => {
    let byAmount = '';
    let reps = '';
    if (item) {
      reps = item.reps + '';
      if (item.percent !== null) {
        byAmount = 'x ' + (item.percent * 100) + '%';
      } else if (item.pounds) {
        byAmount = 'x ' + (item.pounds) + '#';
      }
    }
    const line = reps + ' ' + byAmount;
    const breakLine = key + 1 !== sets.length && <br/>;
    return (
      <Fragment key={key}>
        {line} {breakLine}
      </Fragment>);
  });

  return (
    <tr>
      <td>{name}</td>
      <td>{setComponent}</td>
      <td>{note}</td>
    </tr>);
};

RoutineExercise.propTypes = propTypes;
export default RoutineExercise;
