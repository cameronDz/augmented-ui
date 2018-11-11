import React, { Component } from 'react';

class CardioMachine extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.machineType}</td>
        <td>{this.props.startTime}</td>
        <td>{this.props.duration}</td>
        <td>{this.props.distance}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.comment}</td>
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
        obj.id = counter.cardioMachineExerciseId;
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

    fetch('https://augmentedaspnetbackend.azurewebsites.net/v0.3/api/CardioMachineExercises')
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
        <div><p><strong>Cardio Machine Sessions</strong></p></div>
        <div>
          <table className="table is-bordered is-striped is-narrow is-fullwidth">
            <thead>
              <tr>
                <th>#</th>
                <th>Machine</th>
                <th>Date</th>
                <th>Duration (s)</th>
                <th>Distance (m)</th>
                <th>User</th>
                <th>Comment</th>
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
