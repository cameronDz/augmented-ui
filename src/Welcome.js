import React, { Component } from 'react';
import './Welcome.css';

class Exercise extends Component {
	render() {
		return ( 
			<tr>
				<td>{this.props.name}</td>
			</tr>
		)
	}
}

class RoutineTemplate extends Component {
	render() {
		return ( 
			<tr>
				<td>{this.props.name}</td>
			</tr>
		)
	}
}

class Food extends Component {
	render() {
		return ( 
			<tr>
			<td>{this.props.name}</td>
			<td>{this.props.calories}</td>
			<td>{this.props.protien}</td>
			</tr>
		)
	}
}

class Diet extends Component {
	render() {
		return ( 
			<tr>
				<td>{this.props.name}</td>
			</tr>
		)
	}
}

const model = {
	"exercises": [],
	"routineTemplates": [],
	"foods": [],
	"diets": []
}

class Welcome extends Component {

	  componentDidMount() {
		fetch('https://mysterious-coast-94126.herokuapp.com/welcomeModel?welcomeId=1')
		  .then(response => response.json())
		  .then(data => this.setState({ model: data }));
	  }
	  
	render() {
		
		const exerciseComponent = model.exercises.map(exerciseObject => {
			return (
				<Exercise {...exerciseObject} />
			)
		})
		
		const routineTemplateComponent = model.routineTemplates.map(routineTemplateObject => {
			return (
				<RoutineTemplate {...routineTemplateObject} />
			)
		})
		
		const foodComponent = model.foods.map(foodObject => {
			return (
				<Food {...foodObject} />
			)
		})
		
		const dietComponent = model.diets.map(dietObject => {
			return (
				<Diet {...dietObject} />
			)
		})
		
		return (
			<div className="Welcome">
				<h1>Welcome to Augmented</h1>
				<div>
					<h2>Exercises:</h2>
					<table>
						<thead>
							<th>Name</th>
						</thead>
						<tbody> 
							{exerciseComponent} 
						</tbody>
					</table>
				</div>
				<div>
					<h2>Routine Templates:</h2>
					<table>
						<thead>
							<th>Name</th>
						</thead>
						<tbody> 
							{routineTemplateComponent} 
						</tbody>
					</table>
				</div>
				<div>
					<h2>Foods:</h2>
					<table>
						<thead>
							<th>Name</th>
							<th>Calories</th>
							<th>Protien</th>
						</thead>
						<tbody>
							{foodComponent} 
						</tbody>
					</table>
				</div>
				<div>
					<h2>Diets:</h2>
					<table>
						<thead>
							<th>Name</th>
						</thead>
						<tbody> 
							{dietComponent} 
						</tbody>
					</table>
				</div>
		    </div>
		);
	}
}

export default Welcome;