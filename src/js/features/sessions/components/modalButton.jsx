import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bulma-components';
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
const defaultProps = {
  modal: {
    closeOnBlur: true,
    showClose: true,
    closeOnEsc: true
  }
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

  const openModal = () => { setShow(true); };
  const closeModal = () => { setShow(false); };

  const getTwoDigitValue = (time = '') => {
    return (time.toString().length === 1)
      ? '0' + time.toString()
      : time.toString();
  };

  return (
    <td className="detail-column">
      <button className="button" onClick={openModal}>
        <i className="fas fa-info-circle"></i>
      </button>
      <Modal {...props.modal} show={show} onClose={closeModal}>
        <Modal.Card>
          <header className="modal-card-head">
            <Modal.Card.Title>{props.machineType} - {date}</Modal.Card.Title>
          </header>
          <Modal.Card.Body>
            <div>Date: {date}</div>
            <div>Time: {time}</div>
            <div>Machine: {props.machineType}</div>
            <div>Duration: {minutes}m {seconds}s</div>
            <div>Distance: {parseFloat(props.distanceMiles)} miles</div>
            <div>User: {props.userName}</div>
            <div>Comment: {props.comment}</div>
          </Modal.Card.Body>
          <Modal.Card.Foot style={{ alignItems: 'center', justifyContent: 'center' }}>
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    </td>);
};

modalButton.defaultProps = defaultProps;
modalButton.propTypes = propTypes;
export default modalButton;
