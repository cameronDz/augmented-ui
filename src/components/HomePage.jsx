import React, { Component } from 'react';
import ExerciseDropdown from './ExerciseDropdown';
import ExerciseCreator from './ExerciseCreator';
import Routine from './Routine';
import '../styles/css/bulma.css';

class HomePage extends Component {

  render() {
    return (
      <div>
        <div className="columns is-table">
          <div className="column is-one-third">
            <ExerciseDropdown />
	    <ExerciseCreator />
          </div>
          <div className="column is-two-thirds">
            <Routine />
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
