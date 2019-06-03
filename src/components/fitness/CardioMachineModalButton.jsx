import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bulma-components';
import '../../styles/css/cardio.css';

/**
 *  Pulled modal from react-bulma-components storybook pages.
 *  @source couds.github.io/react-bulma-components/
 */  
class CardioMachineModalButton extends Component {

  // no useless constructor

  state = { 
    show : false
  };

  static propTypes = {
    modal: PropTypes.object
  };

  static defaultProps = {
    modal: {
      closeOnBlur: true, 
      showClose: true, 
      closeOnEsc: true
    }
  };

  openModal = () => this.setState({ show: true });
  closeModal = () => this.setState({ show: false });

  render() {

    function getTwoDigitValue(time) {
      return (time.toString().length === 1 ? '0' + time.toString() : time.toString());
    };

    var minute = Math.floor(this.props.durationSeconds / 60);
    var second = getTwoDigitValue(this.props.durationSeconds % 60);
    var date = this.props.startTime.split('T')[0];
    var time = this.props.startTime.split('T')[1].substring(0,5);

    return (
      <td className="detail-column">
        <button className="button" onClick={this.openModal}>
          <i className="fas fa-info-circle"></i>
        </button>
        <Modal {...this.props.modal} show={this.state.show} onClose={this.closeModal}>
          <Modal.Card>
            <header className="modal-card-head">
              <Modal.Card.Title>{this.props.machineType} - {date}</Modal.Card.Title>
            </header>
            <Modal.Card.Body>
              <div>Date: {date}</div>
              <div>Time: {time}</div>
              <div>Machine: {this.props.machineType}</div>
              <div>Duration: {minute}m {second}s</div>
              <div>Distance: {this.props.distanceMiles} miles</div>
              <div>User: {this.props.userName}</div>
              <div>Comment: {this.props.comment}</div>
            </Modal.Card.Body>
            <Modal.Card.Foot style={{ alignItems: 'center', justifyContent: 'center' }}>
            </Modal.Card.Foot>
          </Modal.Card>
        </Modal>
      </td>
    );
  }

}

export default CardioMachineModalButton;
