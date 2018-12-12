import React, { Component } from 'react';
import CardioMachineCreator from './CardioMachineCreator';
import CardioMachineSessions from './CardioMachineSessions';
import {apis} from '../../api.js';

class Session extends Component {

  render() {
    var url = apis().azure + 'CardioMachineExercises?csv=csv';
    const linkTag = React.createElement(
      'a',
      {
        className: "card-footer-item",
        href : url
      },
      'Download Sessions as CSV file.'
    );

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
                  {linkTag}
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
