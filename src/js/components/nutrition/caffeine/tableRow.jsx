import React from 'react';
import { splitTextKeyToArray } from '../../../lib/splits';

const tableRow = ({element}) => {

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

export default tableRow;
