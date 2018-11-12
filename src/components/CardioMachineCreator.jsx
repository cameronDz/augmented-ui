import React, { Component } from 'react';

class CardioMachineCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.machineType = React.createRef();
    this.startYear = React.createRef();
    this.startMonth = React.createRef();
    this.startDay = React.createRef();
    this.startHour = React.createRef();
    this.startMinute = React.createRef();
    this.startSecond = React.createRef();
    this.durationSeconds = React.createRef();	
    this.durationMinutes = React.createRef();	  
    this.distanceMiles = React.createRef();
    this.userName = React.createRef();
    this.comment = React.createRef();	  
  }

  handleSubmit(event) {
    event.preventDefault();

    function getTwoDigitValue(date) {
      var ret = (date.toString().length === 1 ? '0' + date.toString() : date.toString());
      return ret; 
    };

    var seconds = Number(this.durationMinutes.current.value * 60) + Number(this.durationSeconds.current.value);
    var combinedTimes = this.startYear.current.value + '-' + getTwoDigitValue(this.startMonth.current.value) + '-' + getTwoDigitValue(this.startDay.current.value) + ' ' + getTwoDigitValue(this.startHour.current.value) + ':' + getTwoDigitValue(this.startMinute.current.value) + ':' + getTwoDigitValue(this.startSecond.current.value);

    const payload = JSON.stringify({
      machineType: this.machineType.current.value,
      startTime: combinedTimes,
      durationSeconds: seconds,
      distanceMiles: this.distanceMiles.current.value,
      userName: this.userName.current.value,
      comment: this.comment.current.value
    });
    var url = 'https://augmentedaspnetbackend.azurewebsites.net/v0.3/api/CardioMachineExercises';

    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(payload);
  }

  render() {
    return (
      <div>
        <p><strong>Create a new Cardio Sessions</strong></p>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label for="machineType">Machine Type:</label><br/>
            <input className="input" name="machineType"defaultValue="" type="text" ref={this.machineType} required />
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Date</label>
            </div>
            <div className="field-body">
              <div className="field"> 
                <label for="startYear">Year</label>
                <input className="input" name="startYear" defaultValue="2018" min="1971" max="2099" type="number" ref={this.startYear} />
              </div>
              <div className="field"> 
                <label for="startMonth">Month</label>
                <input className="input" name="startMonth" defaultValue="1" min="1" max="12" type="number" ref={this.startMonth} />
              </div>
              <div className="field"> 
                <label for="startDay">Day</label>
                <input className="input" name="startDay" defaultValue="1" min="1" max="31" type="number" ref={this.startDay} />
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Time</label>
            </div>
            <div className="field-body">
              <div className="field"> 
                <label for="startHour">Hour</label>
                <input className="input" name="startHour" defaultValue="0" min="0" max="23" type="number" ref={this.startHour} />
              </div>
              <div className="field"> 
                <label for="startMinute">Minute</label>
                <input className="input" name="startMinute" defaultValue="0" min="0" max="59" type="number" ref={this.startMinute} />
              </div>
              <div className="field"> 
                <label for="startSecond">Second</label>
                <input className="input" name="startSecond" defaultValue="0" min="0" max="59" type="number" ref={this.startSecond} />
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Duration</label>
            </div>
            <div className="field-body">
              <div className="field"> 
                <label for="durationMinutes">Minutes</label>
                <input className="input" name="durationMinutes" defaultValue="0" min="0" type="number" ref={this.durationMinutes} />
              </div>
              <div className="field"> 
                <label for="durationSeconds">Seconds</label>
                <input className="input" name="durationSeconds" defaultValue="0" min="0" max="59" type="number" ref={this.durationSeconds} />
              </div>
            </div>
          </div>

          <div className="field">
            <label for="distanceMiles">Distance (miles):</label><br/>
            <input className="input" name="distanceMiles" defaultValue="0.0" type="number" step="0.01" ref={this.distanceMiles} />
          </div>
          <div className="field">
            <label for="userName">User:</label><br/>
            <input className="input" name="userName" defaultValue="" type="text" ref={this.userName} required />
          </div>
          <div className="field">
            <label for="comment">Comment:</label><br/>
            <textarea className="textarea" name="comment"defaultValue="" type="textarea" ref={this.comment} />
          </div>	    
          <div className="field">
            <div className="control">
              <input className="input" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CardioMachineCreator;
