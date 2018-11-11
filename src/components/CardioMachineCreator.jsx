import React, { Component } from 'react';

class CardioMachineCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.machineType = React.createRef();
    this.startTime = React.createRef();
    this.durationSeconds = React.createRef();	  
    this.distanceMiles = React.createRef();
    this.userName = React.createRef();
    this.comment = React.createRef();	  
  }

  handleSubmit(event) {
    event.preventDefault();
   
    const payload = JSON.stringify({
      machineType: this.machineType.current.value,
      startTime: this.startTime.current.value,
      durationSeconds: this.durationSeconds.current.value,
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
          <div>
            <label for="machineType">Machine Type:</label><br/>
            <input name="machineType"defaultValue="" type="text" ref={this.machineType}></input>
          </div>
          <div>
            <label for="startTime">Start Time (yyyy-MM-dd HH:mm:ss):</label><br/>
            <input name="startTime" defaultValue="" ref={this.startTime}></input>
          </div>
          <div>
            <label for="durationSeconds">Duration (seconds):</label><br/>
            <input name="durationSeconds" defaultValue="0" type="number" ref={this.durationSeconds} />
          </div>
          <div>
            <label for="distanceMiles">Distance (miles):</label><br/>
            <input name="distanceMiles" defaultValue="0.0" type="number" step="0.01" ref={this.distanceMiles} />
          </div>
          <div>
            <label for="userName">User:</label><br/>
            <input name="userName" defaultValue="" type="text" ref={this.userName} />
          </div>
          <div>
            <label for="comment">Comment:</label><br/>
            <input name="comment"defaultValue="" type="text" ref={this.comment} />
          </div>	    
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CardioMachineCreator;
