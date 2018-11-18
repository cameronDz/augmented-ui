import React, { Component } from 'react';
import DatePicker from "react-datepicker";

class CardioMachineCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMachineChange = this.handleMachineChange.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this); 
    this.state = {
      machineType: '',
      userName: '',
      comment: '',
      durationSeconds: 0,
      durationMinutes: 0,
      distanceMiles: 0.0,
      startDate: new Date()
    };
  };

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  };

  handleMachineChange(machine) {
    this.setState({
      machineType: machine
    });
  };

  handleSecondChange(seconds) {
    this.setState({
      durationSeconds: seconds
    });
  };

  handleMinuteChange(minutes) {
    this.setState({
      durationMinutes: minutes
    });
  };

  handleDistanceChange(miles) {
    this.setState({
      distanceMiles: miles
    });
  };

  handleUserChange(user) {
    this.setState({
      userName: user
    });
  };

  handleCommentChange(comments) {
    this.setState({
      comment: comments
    });
  }; 
  

  handleSubmit(event) {
    document.getElementById("submitCardioBtn").disabled = true;
    event.preventDefault();
    var url = 'https://augmentedaspnetbackend.azurewebsites.net/v0.3/api/CardioMachineExercises';
    var seconds = Number(this.state.durationMinutes * 60) + Number(this.state.durationSeconds);

    const payload = JSON.stringify({
      machineType: this.state.machineType,
      startTime: this.state.startDate,
      durationSeconds: seconds,
      distanceMiles: this.state.distanceMiles,
      userName: this.state.userName,
      comment: this.state.comment
    });
    
    console.log("payload before");
    console.log(payload);
    
    this.setState({
      userName: '',
      comment: '',
      machineType: '',
      durationSeconds: 0,
      durationMinutes: 0,
      distanceMiles: 0.0,
      startDate: new Date()
    });
    
    console.log("payload after");
    console.log(payload);
    
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(payload);
  };

  render() {
    return (
      <div>
        <p><strong>Create a new Cardio Sessions</strong></p>
        <form onSubmit={this.handleSubmit}>
          <div className="field is-horizontal">
            <label className="label" for="machineType">Machine Type &nbsp;</label>
            <input className="input" name="machineType" defaultValue="" type="text" value={this.state.machineType} onChange={this.handleMachineChange} required />
          </div>

          <div className="field is-horizontal">
	          <label className="label" for="startDate">Date &nbsp;</label>
	          <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={5}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Duration &nbsp;</label>
            </div>
            <div className="field-body">
              <div className="field"> 
                <label for="durationMinutes">Minutes</label>
                <input className="input" name="durationMinutes" defaultValue="0" min="0" type="number" value={this.state.durationMinutes} onChange={this.handleMinuteChange} />
              </div>
              <div className="field"> 
                <label for="durationSeconds">Seconds</label>
                <input className="input" name="durationSeconds" defaultValue="0" min="0" max="59" type="number" value={this.state.durationSeconds} onChange={this.handleSecondChange} />
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <label className="label" for="distanceMiles">Distance (miles) &nbsp;</label>
            <input className="input" name="distanceMiles" defaultValue="0.0" type="number" step="0.01" value={this.state.distanceMiles} />
          </div>
          <div className="field is-horizontal">
            <label className="label" for="userName">User &nbsp;</label>
            <input className="input" name="userName" defaultValue="" type="text" value={this.state.userName} onChange={this.handleUserChange} required />
          </div>
          <div className="field">
            <label className="label" for="comment">Comment &nbsp;</label>
            <textarea className="textarea" name="comment"defaultValue="" type="textarea" value={this.state.comment} onChange={this.handleCommentChange} />
          </div>	    
          <div className="field">
            <div className="control">
              <input id="submitCardioBtn" className="input" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  };
}

export default CardioMachineCreator;
