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
              <footer className="card-footer">
                <div>
                  <a className="card-footer-item" ref='https://augmentedaspnetbackend.azurewebsites.net/v0.3/api/CardioMachineExercises?csv=csv' download>Download Sessions as CSV file.</a>
                </div>
              </footer>
            </div>
          </div>      
        </div>
      </div>
    );
  }
}

export default Session;
