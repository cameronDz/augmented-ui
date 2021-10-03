import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { SimpleDialog } from '../../../components/simpleDialog';
import '../../../../css/table.css';

const propTypes = {
  comment: PropTypes.string,
  distanceMiles: PropTypes.string,
  durationSeconds: PropTypes.number,
  machineType: PropTypes.string,
  modal: PropTypes.object,
  startTime: PropTypes.string,
  userName: PropTypes.string
};

const modalButton = props => {
  const [show, setShow] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (props) {
      const { durationSeconds, startTime } = props;
      if (startTime) {
        setDate(startTime.split('T')[0]);
        setTime(startTime.split('T')[1].substring(0, 5));
      }
      if (durationSeconds) {
        setMinutes(Math.floor(durationSeconds / 60));
        setSeconds(getTwoDigitValue(durationSeconds % 60));
      }
    }
  }, [props]);

  const getTwoDigitValue = (value = '') => {
    return (!value || value.toString().length === 1)
      ? '0' + value.toString()
      : value.toString();
  };

  return (
    <td className="detail-column">
      <button className="button" onClick={() => setShow(true)}>
        <i className="fas fa-info-circle"></i>
      </button>
      <SimpleDialog
        isOpen={show}
        onClose={() => setShow(false)}
        contentHeader={`${props.machineType} - ${date}`}
        contentBody={
          <Fragment>
            <div>Date: {date}</div>
            <div>Time: {time}</div>
            <div>Machine: {props.machineType}</div>
            <div>Duration: {minutes}m {seconds}s</div>
            <div>Distance: {parseFloat(props.distanceMiles)} miles</div>
            <div>User: {props.userName}</div>
            <div>Comment: {props.comment}</div>
          </Fragment>
        }
      />
    </td>);
};

modalButton.propTypes = propTypes;
export default modalButton;
