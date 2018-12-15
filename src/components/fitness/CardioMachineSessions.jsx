import React, { Component } from 'react';
import CardioMachineModalButton from './CardioMachineModalButton';
import '../../styles/css/cardio.css';
import {apis} from  '../../api.js';

class CardioMachine extends Component {

  render() {
    var date = this.props.startTime.split('T')[0];

    return (
      <tr>
        <td>{date}</td>
        <td>{this.props.machineType}</td>
        <td>{this.props.userName}</td>
        <CardioMachineModalButton {...this.props} />
      </tr>
    );
  }
}

class CardioMachineSessions extends Component {

  constructor(props) {
    super(props);
    this.state = {cardioSessions:[]};
  }

  componentDidMount() {
    function  processPayload(payLoad)  {
      var array = [];
      for(var i = 0; i < payLoad.length; i++) {
        var counter = payLoad[i];
        var obj = {};
        obj.machineType = counter.machineType;
        obj.startTime = counter.startTime;
        obj.duration = counter.durationSeconds;
        obj.distance = counter.distanceMiles;
        obj.userName = counter.userName;
        obj.comment = counter.comment;
        array.push(obj);
      }
      return array;
    }

    var url = apis().azure + 'CardioMachineExercises';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        cardioSessions: processPayload(data)
      })
    );
  }

  render() {
    const cardioMachineComponent = this.state.cardioSessions.map(cardioMachineObjects => {
      return (
        <CardioMachine {...cardioMachineObjects} />
      );
    })

    return (
      <div>
        <div className="table-wrapper">
          <table className="table is-bordered is-striped is-narrow is-fullwidth">
            <thead>
              <tr>
                <th>Date</th>
                <th>Machine</th>
                <th>User</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {cardioMachineComponent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CardioMachineSessions;
