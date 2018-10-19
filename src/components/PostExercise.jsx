import React, { Component } from 'react';

class PostExercise extends Component {

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
    });; 

    var url = 'https://augmentedaspnetbackend.azurewebsites.net/v0.2/api/exercises';
    
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(payload);
  }

  render() {
    return (
      <div>
        <p>POST a new exercise:</p>
        <form onSubmit={this.handleSubmit}>
          <div>
	    <label>
              Name:
              <input defaultValue="" type="text" ref={this.name} />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input defaultValue="" type="text" ref={this.description} />
            </label>
          </div>
	  <div>
            <label>
              Type:
              <input defaultValue="1" type="number" ref={this.typeId} />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default PostExercise;
