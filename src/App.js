import React, { Component } from 'react';
import './App.css';
import Routine from './Routine.js';
import ExerciseList from './ExerciseList.js';

class App extends Component {

	render() { 
		return (
			<div className="App">
	      	<Routine /> 
	      	<ExerciseList /> 
	      	</div>
		);
	}
}

export default App;
