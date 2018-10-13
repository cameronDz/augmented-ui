import React, { Component } from 'react';
import './App.css';
import Routine from './components/Routine';
import ExerciseDropdown from './components/ExerciseDropdown';

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
