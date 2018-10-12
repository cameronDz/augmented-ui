import React, { Component } from 'react';

class Exercise extends Component {

	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.description}</td>
			</tr>
		)
	}
}

class ExerciseList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			exercises: []
		};
	}

	componentDidMount() {
		fetch('https://augmentedaspnetbackend.azurewebsites.net/v0.2/api/exercises')
			.then(response => response.json())
			.then(data => this.setState({
				exercises: data
			}));
	}

	render() {
		const exerciseComponent = this.state.exercises.map(exerciseObject => {
			return (
				<Exercise {...exerciseObject} />
			)
		})

		return (
			<div className="ExerciseList">
				<h1>Exercise List</h1>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{exerciseComponent}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ExerciseList;
