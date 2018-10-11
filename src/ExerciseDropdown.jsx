import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

class Exercise extends Component {

	render() {
		return (
			<p>{this.props.Name}</p>
		)
	}
}

class ExerciseDropdown extends Component {

	constructor(props) {
		super(props);

		this.state = {
			listOpen: false,
			headerTitle: "",
			exercises: []
		};
	}

	handleClickOutside(e) {
		this.setState({
			listOpen: false
		})
	}

	selectItem = (title, id, stateKey) => {
		this.setState({
			headerTitle: title,
			listOpen: false,
		},
			this.props.resetThenSet(id, stateKey))
	}

	toggleList = () => {
		this.setState(prevState => ({
			listOpen: !prevState.listOpen
		}))
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
			<div className="ExerciseDropdown">
				<h1>Exercise Dropdown</h1>
				<p>Name</p>
				<div className="dd-wrapper">
					<div className="dd-header" onClick={this.toggleList}>
						<div className="dd-header-title">{headerTitle}</div>
						{listOpen
							? <FontAwesome name="angle-up" size="2x" />
							: <FontAwesome name="angle-down" size="2x" />
						}
					</div>
					{listOpen && <ul className="dd-list">
						{list.map((item) => (
							<li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title} {item.selected && <FontAwesome name="check" />}</li>
						))}
					</ul>}
				</div>
			</div>
		)
	}
}

export default ExerciseDropdown;
