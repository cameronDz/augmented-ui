import React, { Component } from 'react';
import CardioMachineCreator from './Session';
import Layout from './Layout';

class SessionPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Sessions" children = {<Session />} />
      </div>
    );
  }
}

export default SessionPage;
