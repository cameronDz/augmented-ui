import React, { Component } from 'react';
import {Modal} from 'react-bulma-components';
import '../../styles/css/cardio.css';

class CardioMachineModalButton extends Component {

  constructor(props) {
    super(props);
    this.state = { open : false };
  }

  render() {
    return (
      <td className="detail-column">
        <button className="button" onClick={() => this.setState({open : true})}>
          <i className="fas fa-info-circle"></i>
        </button>
        <Modal show={this.state.open} onClose={() => this.setState({open : false})}>
	  <div>
            <p>testing</p>
          </div>
        </Modal>
      </td>
    );
  }

}

export default CardioMachineModalButton;
