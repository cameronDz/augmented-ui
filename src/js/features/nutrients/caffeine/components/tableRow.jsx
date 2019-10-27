import React from 'react';
import PropTypes from 'prop-types';
import { splitTextKeyToArray } from '../../../../lib/splits';

const propTypes = {
  element: PropTypes.shape({
    amount: PropTypes.number,
    amountType: PropTypes.string,
    comment: PropTypes.string,
    userName: PropTypes.string
  })
};

const tableRow = ({ element }) => {
  const getIntakeDay = intakeObject => {
    return splitTextKeyToArray(intakeObject, 'intakeTime', 'T')[0];
  };

  const getIntakeTime = intakeObject => {
    const time = splitTextKeyToArray(intakeObject, 'intakeTime', 'T')[1];
    return !!time && time.substring(0, 5);
  };

  const day = getIntakeDay(element);
  const time = getIntakeTime(element);
  return (
    <tr>
      <td>{day}</td>
      <td>{time}</td>
      <td>{element.amount}</td>
      <td>{element.amountType}</td>
      <td>{element.userName}</td>
      <td>{element.comment}</td>
    </tr>);
};

tableRow.propTypes = propTypes;
export default tableRow;
