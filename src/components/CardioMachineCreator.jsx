import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import TimeField from 'react-simple-timefield';
import '../styles/css/cardio.css';

class CardioMachineCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.state = {
      machineType: '',
      userName: '',
      comment: '',
      timing: '00:00:00',
      distanceMiles: 0.0,
      startDate: new Date()
    };
  };

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  };

  handleTimeChange(time) {
    this.setState({
      timing: time
    });
  };

  handleSubmit(event) {
    // document.getElementById("submitCardioBtn").disabled = true;
    event.preventDefault();
    var url = 'https://augmentedaspnetbackend.azurewebsites.net/v0.3/api/CardioMachineExercises'; 
    var timingArray = this.state.timing.split(':');
    var seconds = (Number(timingArray[0] * 3600) + Number(timingArray[1] * 60) + Number(timingArray[2]));

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
      timing: '00:00:00',
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
    console.log(payload);
    // xhr.send(payload);
  };

  render() {
    return (
      <div>
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
            <label className="label">Duration &nbsp;</label>
            <TimeField className="time-field"
                       value={this.state.timing}
                       showSeconds="true"
                       style={{width:80, height:25}}
                       onChange={this.handleTimeChange} /> 
            <label className="label" for="distanceMiles">Distance (miles) &nbsp;</label>
            <input className="input distance" 
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
