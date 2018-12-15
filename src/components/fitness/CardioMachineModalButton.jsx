import React, { Component } from 'react';
import {Modal} from 'react-bulma-components';
import '../../styles/css/cardio.css';

/**
 *  Pulled modal from react-bulma-components storybook pages.
 *  @source couds.github.io/react-bulma-components/
 */  
class CardioMachineModalButton extends Component {

  constructor(props) {
    super(props);
    this.state = { open : false };
  }

  render() {

    function getTwoDigitValue(time) {
      var ret = (time.toString().length === 1 ? '0' + time.toString() : time.toString());
      return ret;
    };

    var minute = Math.floor(this.props.duration / 60);
    var second = getTwoDigitValue(this.props.duration % 60);
    var date = this.props.startTime.split('T')[0];
    var time = this.props.startTime.split('T')[1].substring(0,5);

    return (
      <td className="detail-column">
        <button className="button" onClick={() => this.setState({open : true})}>
          <i className="fas fa-info-circle"></i>
        </button>
        <Modal show={this.state.open} onClose={() => this.setState({open : false})}>
          <Modal.Card>
            <Modal.Card.Head>
              <Modal.Card.Title>{this.props.machineType} - {date}</Modal.Card.Title>
            </Modal.Card.Head>
            <Modal.Card.Body>
              <div>Date: {date}</div>
              <div>Time: {time}</div>
              <div>Machine: {this.props.machineType}</div>
              <div>Duration: {minute}m {second}s</div>
              <div>Distance: {this.props.distance} miles</div>
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
