import React, { Component } from 'react';
import Layout from './Layout';
import Routine from './Routine';

class RoutineBase extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column is-one-fifth">
            <p>Side-bar for Routine information.</p>
          </div>
          <div className="column is-four-fifths">
            <Routine />
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
      </div>
    );
  }
}

export default RoutinePage;
