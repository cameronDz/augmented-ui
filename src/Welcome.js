import React, { Component } from 'react';
import './Welcome.css';


class Welcome extends Component {
	render() {
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
							<td>Barbell Snatch Pull</td>
						</tbody>
					</table>
				</div>
				<div>
					<h2>Routine Templatess:</h2>
					<table>
						<thead>
							<th>Name</th>
						</thead>
						<tbody>
							<td>Olympic Day 1</td>
							<td>Olympic Day 2</td>
							<td>Olympic Day 3</td>
						</tbody>
					</table>
				</div>
				<div>
					<h2>Foods:</h2>
					<table>
						<thead>
							<th>Name</th>
						</thead>
						<tbody>
							<td>Protien Bar</td>
							<td>Protien Cookie</td>
							<td>Protien Shake</td>
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
							<td>Intemittent Fasting</td>
							<td>Caloric Surplus</td> 
						</tbody>
					</table>
				</div>
		    </div>
		);
	}
}

export default Welcome;