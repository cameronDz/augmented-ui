import React, { Component } from 'react';

class PostExercise extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.name = React.createRef();
		this.description = React.createRef();
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.name.current.value);
		alert('A description was submitted: ' + this.description.current.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
			<p>Under construction</p>
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
                    <input
						defaultValue=""
						type="text"
						ref={this.name} />
			</label>
			<label>
					Description:
                    <input
						defaultValue=""
						type="text"
						ref={this.description} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			</div>
        );
	}
}
export default PostExercise;
