import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const excercisePropTypes = {
  name: PropTypes.string,
  note: PropTypes.string,
  sets: PropTypes.array
};
const exercise = ({ name, note, sets }) => {

  const setComponent = sets.map((item, key) => {
    const line = `${item.reps} X ${item.percent * 100} %`;
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

exercise.propTypes = excercisePropTypes;
export default exercise;
