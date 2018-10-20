import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header';
import ExerciseDropdown from './components/ExerciseDropdown';
import ExerciseCreator from './components/ExerciseCreator';
import Routine from './components/Routine';
import './styles/css/bulma.css';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Header 
          title = "Augmented Home"
	/>
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

export default App;
