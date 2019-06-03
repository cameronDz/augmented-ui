import React, { Component } from 'react';
import Layout from '../Layout';
import Routine from './Routine';

class RoutineBase extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Routines Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-fifth">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Routine Side Bar</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p>Side-bar for Routine information.</p>
                </div>
              </div>   
            </div>
          </div>
          <div className="content column is-four-fifths">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Latest Routine</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <Routine />
                </div>
              </div>   
            </div>	    
          </div>
        </div>
      </div>
    );
  }

}

class RoutinePage extends Component {
  render() {
    return (
      <div>
        <Layout title = "Routines Page" children = {<RoutineBase />} />
      </div>);
  };
}

export default RoutinePage;
