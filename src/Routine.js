import React, { Component } from 'react';

class Exercise extends Component {

	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.note}</td>
				<td></td>
			</tr> 
		)
	}
}

class Routine extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name : "",
			count : 0,
			exercises : [{}],
			note : ""
		};
	}

	componentDidMount() {
		fetch('https://mysterious-coast-94126.herokuapp.com/basicRoutine?rountineId=1')
			.then(response => response.json())
			.then(data => this.setState({
				name : data.name,
				count : data.count,
				exercises : data.exercises,
				note : data.note
			}));
	}

	render() {

		const exerciseComponent = this.state.exercises.map(exerciseObject => {
			return (
				<Exercise {...exerciseObject} />
			)
		})

		return (
			<div className="Routine">
				<h1>Routine</h1>
				<h2>{this.props.name}</h2>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Reps</th>
							<th>Percent</th> 
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


export default Routine;