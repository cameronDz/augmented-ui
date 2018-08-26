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
							<tr>
								<td>Barbell Snatch Pull</td>
							</tr>
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
							<tr>
								<td>Olympic Day 1</td>
							</tr> 
							<tr>
								<td>Olympic Day 1</td>
							</tr> 
							<tr>
								<td>Olympic Day 1</td>
							</tr> 
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
							<tr>
								<td>Protien Bar</td>
								<td>310</td>
								<td>28</td>
							</tr>
							<tr>
								<td>Protien Cookie</td>
								<td>310</td>
								<td>20</td>
							</tr>
							<tr>
								<td>Protien Shake</td>
								<td>130</td>
								<td>25</td>
							</tr>
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
							<tr>
								<td>Intemittent Fasting</td>
							</tr>
							<tr>
								<td>Caloric Surplus</td> 
							</tr>
						</tbody>
					</table>
				</div>
		    </div>
		);
	}
}

export default Welcome;