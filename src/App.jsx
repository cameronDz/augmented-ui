import React, { Component } from 'react';
import Routine from './components/Routine';
import ExerciseDropdown from './components/ExerciseDropdown';
import PostExercise from './components/PostExercise';
import Navbar from './components/navbar/Navbar';
import './styles/css/app.css';
import './styles/css/bulma.css';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1><strong>Augmented Frontend</strong></h1>
        </div>
        <div className="columns is-desktop">
          <div className="column">
            <ExerciseDropdown />
          </div>
          <div className="column">
            <Routine />
          </div>
          <div className="column">
            <PostExercise />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
