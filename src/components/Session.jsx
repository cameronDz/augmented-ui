import React, { Component } from 'react';
import Parser from 'html-react-parser';
import CardioMachineCreator from './CardioMachineCreator';
import CardioMachineSessions from './CardioMachineSessions';
import {azure} from '../api.js';

class Session extends Component {

  render() {
    var url = azure().base + azure().version + '/api/CardioMachineExercises?csv=csv';
    const linkTag = '<a className="card-footer-item" ref="' + url + '" download>Download Sessions as CSV file.</a>';

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
                  {Parser(linkTag)}
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
