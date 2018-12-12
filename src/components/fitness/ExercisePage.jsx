import React, { Component } from 'react';
import Layout from '../Layout';
import ExerciseCreator from './ExerciseCreator';
import ExerciseDropdown from './ExerciseDropdown';

class Exercise extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column is-one-half">
            <ExerciseDropdown />
          </div>
          <div className="column is-one-half">
            <ExerciseCreator />
          </div>
        </div>
      </div>
    );
  }

}
  
class ExercisePage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Exercises" children = {<Exercise />} />
      </div>
    );
  }
}

export default ExercisePage;
