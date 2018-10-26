import React, { Component } from 'react';
import ExerciseDropdown from './ExerciseDropdown';
import ExerciseCreator from './ExerciseCreator';
import Routine from './Routine';
import Layout from './Layout';
import '../styles/css/bulma.css';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
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

class HomePage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Augmented Home" children = {<Home />} />
      </div>
    );
  }
}

export default HomePage;
