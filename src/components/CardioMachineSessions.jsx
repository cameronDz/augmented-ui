import React, { Component } from 'react';

class CardioMachine extends Component {

  render() {
    return (
      <div>
        <span>Session #: {this.props.id}</span><br/>
        <span>Machine: {this.props.machineType}</span><br/>
        <span>When: {this.props.startTime}</span><br/>
        <span>Duration (seconds): {this.props.duration}</span><br/>
        <span>Distance (miles): {this.props.distance}</span><br/>
        <span>User: {this.props.userName}</span><br/>
        <span>Comment: {this.props.comment}</span><br/><br/>
      </div>
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
        <div>{cardioMachineComponent}</div>
      </div>
    );
  }
}

export default CardioMachineSessions;
