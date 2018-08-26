import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';

const welcome = {
		"exercises": [
			{"name":"Barbell Snatch Pull"},
			{"name":"Barbell Full Clean"},
			{"name":"Barbell Power Clean"}
		],
		"routineTemplates": [
			{"name":"Olympic Day 1"},
			{"name":"Olympic Day 2"},
			{"name":"Olympic Day 3"}
		],
		"foods": [
			{
				"name":"Protein Bar",
				"calories": 310,
				"protien": 28
			},
			{
				"name":"Protein Cookie",
				"calories": 310,
				"protien": 20
			},
			{
				"name":"Protein Shake",
				"calories": 130,
				"protien": 25
			}
		],
		"diets": [
			{"name":"Intermittent Fasting"},
			{"name":"Caloric Surplus"}
		]
}

class App extends Component {
	render() {
	    return (
	    	<div className="App">
	      		<Welcome {...welcome} />
	      	</div>
	    );
	}
}

export default App;
