import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header';
import ExerciseDropdown from './components/ExerciseDropdown';
import PostExercise from './components/PostExercise';
import Routine from './components/Routine';
import './styles/css/bulma.css';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="columns is-table">
          <div className="column is-one-third">
            <ExerciseDropdown />
	    <PostExercise />
          </div>
          <div className="column is-two-thirds">
            <Routine />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
