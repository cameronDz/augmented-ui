import React, { Component } from 'react';

class CardioMachineCreator extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
   
    const payload = JSON.stringify({});
    var url = 'https://augmentedaspnetbackend.azurewebsites.net/v0.2/api/CardioMachineExercises';

    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(payload);
  }

  render() {
    return (
      <div>
        TESTING
      </div>
    );
  }
}

export default CardioMachineCreator;
