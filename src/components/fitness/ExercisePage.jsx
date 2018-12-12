import React, { Component } from 'react';
import Layout from '../Layout';
import ExerciseCreator from './ExerciseCreator';
import ExerciseDropdown from './ExerciseDropdown';

class Exercise extends Component {

  render() {
    return (
      <div className="card">
        <header>
          <p className="card-header-title">Exercise Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-half">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Exercise Dropdown Sample</p>
              </header>
              <div className="card-content">
                <div className="content">	    
                  <ExerciseDropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="content column is-one-half">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Exercise Creator</p>
              </header>
              <div className="card-content">
                <div className="content">	    
                  <ExerciseCreator />
                </div>
              </div>
            </div>
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
