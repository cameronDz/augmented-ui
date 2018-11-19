import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import TimeField from 'react-simple-timefield';

class CardioMachineCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      machineType: '',
      userName: '',
      comment: '',
      duration: '00:00:00',
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

  handleSubmit(event) {
    // document.getElementById("submitCardioBtn").disabled = true;
    event.preventDefault();
    var url = 'https://augmentedaspnetbackend.azurewebsites.net/v0.3/api/CardioMachineExercises'; 
    var durationArray = this.state.duration.split(':');
    var seconds = ((Number(durationArray[0] * 3600) + (Number(durationArray[1] * 60) + (Number(durationArray[2]));

    const payload = JSON.stringify({
      machineType: this.state.machineType,
      startTime: this.state.startDate,
      durationSeconds: seconds,
      distanceMiles: this.state.distanceMiles,
      userName: this.state.userName,
      comment: this.state.comment
    });

    this.setState({
      userName: '',
      comment: '',
      machineType: '',
      duration: '00:00:00',
      durationSeconds: 0,
      durationMinutes: 0,
      distanceMiles: 0.0,
      startDate: new Date()
    });

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        document.getElementById("submitCardioBtn").disabled = false;
      }
    };
    // xhr.send(payload);
  };

  render() {
    return (
      <div>
        <p><strong>Create a new Cardio Sessions</strong></p>
        <form onSubmit={this.handleSubmit}>
          <div className="field is-horizontal">
            <label className="label" for="machineType">Machine Type &nbsp;</label>
            <input className="input" 
                   name="machineType" 
                   type="text" 
                   value={this.state.machineType} 
                   onChange={ e => this.setState({ machineType : e.target.value }) } 
                   required />
          </div>

          <div className="field is-horizontal">
	          <label className="label" for="startDate">Date &nbsp;</label>
	          <DatePicker selected={this.state.startDate}
                        onChange={this.handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={5}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time" />
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Duration &nbsp;</label>
            </div>
            <TimeField value={this.state.duration}
                       showSeconds="true"
                       onChange={ e => this.setState({ duration : e.target.value }) } />
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Duration &nbsp;</label>
            </div>
            <div className="field-body">
              <div className="field"> 
                <label for="durationMinutes">Minutes</label>
                <input className="input" 
                       name="durationMinutes" 
                       min="0" 
                       type="number" 
                       value={this.state.durationMinutes} 
                       onChange={ e => this.setState({ durationMinutes : e.target.value }) } />
              </div>
              <div className="field"> 
                <label for="durationSeconds">Seconds</label>
                <input className="input" 
                       name="durationSeconds" 
                       min="0" 
                       max="59" 
                       type="number"
                       value={this.state.durationSeconds} 
                       onChange={ e => this.setState({ durationSeconds : e.target.value }) } />
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <label className="label" for="distanceMiles">Distance (miles) &nbsp;</label>
            <input className="input" 
                   name="distanceMiles" 
                   type="number" 
                   step="0.01" 
                   value={this.state.distanceMiles}
                   onChange={ e => this.setState({ distanceMiles : e.target.value }) } />
          </div>
          <div className="field is-horizontal">
            <label className="label" for="userName">User &nbsp;</label>
            <input className="input" 
                   name="userName" 
                   type="text" 
                   value={this.state.userName} 
                   onChange={ e => this.setState({ userName : e.target.value }) } 
                   required />
          </div>
          <div className="field">
            <label className="label" for="comment">Comment &nbsp;</label>
            <textarea className="textarea" 
                      name="comment" 
                      type="textarea" 
                      value={this.state.comment} 
                      onChange={ e => this.setState({ comment : e.target.value }) } />
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
