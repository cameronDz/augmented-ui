import React, { Component } from 'react';
import './App.css';
import Routine from './Routine';
import ExerciseDropdown from './ExerciseDropdown';

class App extends Component {

	render() {
		return (
			<div className="App">
				<ExerciseDropdown />
				<Routine />
			</div>
		);
	}
}

export default App;
