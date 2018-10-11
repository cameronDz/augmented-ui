import React, { Component } from 'react';
import './App.css';
import Routine from './Routine';
import ExerciseList from './ExerciseList';
import ExerciseDropdown from './ExerciseDropdown';

class App extends Component {

	render() {
		return (
			<div className="App">
				<ExerciseDropdown />
				<Routine />
				<ExerciseList />
			</div>
		);
	}
}

export default App;
