import React, { Component } from 'react';

class CardioMachine extends Component {

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
      <tr>
        <td>{this.props.machineType}</td>
        <td>{date} {time}</td>
        <td>{minute}:{second}</td>
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
                <th>Machine</th>
                <th>Date/Time</th>
                <th>Duration (hh:mm)</th>
                <th>Distance (miles)</th>
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
