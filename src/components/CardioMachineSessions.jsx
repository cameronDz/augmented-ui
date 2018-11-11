import React, { Component } from 'react';

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
        obj.duration = counter.duration;
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
        exercise : processPayload(data)
      })
    );
  }

  render() {
    return (
      <div>
        Test, Testing.
      </div>
    );
  }
}

export default CardioMachineSessions;
