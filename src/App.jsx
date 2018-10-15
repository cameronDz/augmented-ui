import React, { Component } from 'react';
import './styles/App.css';
import './styles/css/bootstrap.css';
import Routine from './components/Routine';
import ExerciseDropdown from './components/ExerciseDropdown';
import PostExercise from './components/PostExercise';
import BulmaNavbar from './components/navbar/BulmaNavbar';

class App extends Component {

  render() {
    return (
      <div>
      <BulmaNavbar />
      <div className="container">
        <div className="row">
	  <div className="col-sm-12">
            <h1>Augmented Frontend</h1>
          </div>
          <div className="col-sm-4">
            <ExerciseDropdown />
          </div>
          <div className="col-sm-4">
            <Routine />
          </div>
          <div className="col-sm-4">
            <PostExercise />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
