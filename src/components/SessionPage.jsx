import React, { Component } from 'react';
import Layout from './Layout';
import CardioMachineCreator from './CardioMachineCreator';
import CardioMachineSessions from './CardioMachineSessions';

class Session extends Component {

  render() {
    return (
      <div>
        <div className="columns is-multiline is-tablet">
          <div className="column is-full">
            <p> Track exercise sessions here.</p>
          </div>
          <div className="column is-two-fifth">
            <CardioMachineCreator />
          </div>	    
          <div className="column is-three-fifths">
            <CardioMachineSessions />
          </div>	    
        </div>
      </div>
    );
  }

}

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
