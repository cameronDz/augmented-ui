import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';

const welcome = {
		"exercises": [
			{"name":"Barbell Snatch Pull"},
			{"name":"Barbell Full Clean"},
			{"name":"Barbell Power Clean"},
			{"name":"Push Press"}
		],
		"routineTemplates": [
			{"name":"Olympic Day 1"},
			{"name":"Olympic Day 2"},
			{"name":"Olympic Day 3"},
			{"name":"Cardio Day 1"}
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
	
  componentDidMount() {
	fetch('https://mysterious-coast-94126.herokuapp.com/welcomeModel?welcomeId=1')
	  .then(response => response.json())
	  .then(data => this.setState({ welcome: data }));
  }
	
}

export default App;
