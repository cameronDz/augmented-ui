import React, { Component } from 'react';
import * as _config from '../../../assets/data/config.json';

class ExerciseCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.description = React.createRef();
    this.typeId = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
   
    const payload = JSON.stringify({
      name: this.name.current.value,
      description: this.description.current.value,
      typeId: this.typeId.current.value
    }); 

    const url = _config.apis.azure + 'exercises';
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(payload);
  }

  render() {
    return (
      <div>
        <p><strong>Create a new Exercise</strong></p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="name">Name:</label><br/>
            <input name="name"defaultValue="" type="text" ref={this.name} />
          </div>
          <div>
            <label for="description">Description:</label><br/>
            <textarea name="description" defaultValue="" ref={this.description}></textarea>
          </div>
          <div>
            <label for="typeId">Type:</label><br/>
            <input name="typeId" defaultValue="1" type="number" ref={this.typeId} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default ExerciseCreator;
