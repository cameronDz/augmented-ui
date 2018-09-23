import React, { Component } from 'react';
import './App.css';
import Routine from './Routine';
import ExerciseList from './ExerciseList';

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
