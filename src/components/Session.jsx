import React, { Component } from 'react';
import CardioMachineCreator from './CardioMachineCreator';
import CardioMachineSessions from './CardioMachineSessions';

class Session extends Component {

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Sessions Page</p>
        </header>
        <div className="card-content columns is-multiline is-tablet">
          <div className="content column is-two-fifths">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Cardio Machine Session Creator</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <CardioMachineCreator />
                </div>
              </div>   
            </div>
          </div>      
          <div className="content column is-three-fifths">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Cardio Machine Session</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <CardioMachineSessions />
                </div>
              </div>
            </div>
          </div>      
        </div>
      </div>
    );
  }
}

export default Session;