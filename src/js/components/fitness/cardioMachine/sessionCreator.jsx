import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import TimeField from 'react-simple-timefield';
import * as _config from '../../../../../assets/data/config.json';
import '../../../../css/cardio.css';

class SessionCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.state = {
      comment: '',
      distanceMiles: 0.0,
      machineType: '',
      startDate: new Date(),
      timing: '00:00:00',
      userName: ''
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
    const self = this;
    document.getElementById("submitCardioBtn").disabled = true;
    event.preventDefault();
    const url = _config.apis.azure + 'CardioMachineExercises';
    const timingArray = self.state.timing.split(':');
    const seconds = (Number(timingArray[0] * 3600) + Number(timingArray[1] * 60) + Number(timingArray[2]));

    const payload = JSON.stringify({
      comment: self.state.comment,
      distanceMiles: self.state.distanceMiles,
      durationSeconds: seconds,
      machineType: self.state.machineType,
      startTime: self.state.startDate.toLocaleString(),
      userName: self.state.userName
    });

    self.setState({
      comment: '',
      distanceMiles: 0.0,
      machineType: '',
      startDate: new Date(),
      timing: '00:00:00',
      userName: ''
    });

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        document.getElementById("submitCardioBtn").disabled = false;
        self.props.dispatchFetchSessions(self.props.links.self);
      }
    };
    xhr.send(payload);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field is-horizontal">
            <label className="label" htmlFor="machineType">Machine Type &nbsp;</label>
            <input className="input"
              name="machineType"
              onChange={ e => this.setState({ machineType : e.target.value }) }
              required
              type="text"
              value={this.state.machineType} />
          </div>

          <div className="field is-horizontal">
            <label className="label" htmlFor="startDate">Date &nbsp;</label>
            <DatePicker dateFormat="MMMM d, yyyy h:mm aa"
              onChange={this.handleDateChange}
              selected={this.state.startDate}
              showTimeSelect
              timeCaption="time"
              timeFormat="HH:mm"
              timeIntervals={5} />
          </div>

          <div className="field is-horizontal">
            <label className="label">Duration &nbsp;</label>
            <TimeField className="time-field"
              onChange={this.handleTimeChange}
              showSeconds={true}
              style={{width:80, height:25}}
              value={this.state.timing} />
            <label className="label" htmlFor="distanceMiles">Distance (miles) &nbsp;</label>
            <input className="distance"
              name="distanceMiles"
              onChange={ e => this.setState({ distanceMiles : e.target.value }) }
              step="0.01"
              type="number"
              value={this.state.distanceMiles} />
          </div>

          <div className="field is-horizontal">
            <label className="label" htmlFor="userName">User &nbsp;</label>
            <input className="input"
              name="userName"
              onChange={ e => this.setState({ userName : e.target.value }) }
              required
              type="text"
              value={this.state.userName} />
          </div>

          <div className="field">
            <label className="label" htmlFor="comment">Comment &nbsp;</label>
            <textarea className="textarea"
              name="comment"
              onChange={ e => this.setState({ comment : e.target.value }) }
              type="textarea"
              value={this.state.comment} />
          </div>
          <div className="field">
            <div className="control">
              <input className="input"
                id="submitCardioBtn"
                type="submit"
                value="Submit" />
            </div>
          </div>
        </form>
      </div>);
  };
}

const mapStateToProps = state =>  ({ links: state.cardioMachineSessions.links });
export default connect(mapStateToProps)(SessionCreator);
