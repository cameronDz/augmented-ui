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

class Welcome extends Component {
	render() {
		
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
		
		const exerciseComponent = welcome.exercises.map(exerciseObject => {
			return (
				<Exercise {...exerciseObject} />
			)
		})
		
		const routineTemplateComponent = welcome.routineTemplates.map(routineTemplateObject => {
			return (
				<RoutineTemplate {...routineTemplateObject} />
			)
		})
		
		const foodComponent = welcome.foods.map(foodObject => {
			return (
				<Food {...foodObject} />
			)
		})
		
		const dietComponent = welcome.diets.map(dietObject => {
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