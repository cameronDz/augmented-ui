import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
import Routine from './Routine.js';

class App extends Component {

	render() { 
		return (
			<div className="App">
	      	<Routine /> 
      		<Welcome />
	      	</div>
		);
	}
}

export default App;