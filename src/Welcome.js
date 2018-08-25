import React, { Component } from 'react';
import './Welcome.css';


class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
	<h1>Welcome to Augmented</h1>
	<div>
		<h2>Find a Workout:</h2>
	</div>
	<div>
		<h2>Find a Routine:</h2>
	</div>
	<div>
		<h2>Register/Sign In</h2>
	</div>
      </div>
    );
  }
}

export default Welcome;
