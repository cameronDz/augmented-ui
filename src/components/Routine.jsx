import React, { Component } from 'react';
import {heroku} from '../api.js';

/*
TODO add formatter back later
import {FormattedNumber} from 'react-intl';
<td>
  {this.props.reps} X <FormattedNumber value={this.props.percent} style="percent" />
</td>
*/

class Set extends Component {
  render() {
    return (
      <tr>
        <td></td>
        <td>{this.props.reps} X {this.props.percent * 100} %</td>
        <td></td>
      </tr>
    );
  }
}

class Exercise extends Component {
  render() {
    const setComponent = this.props.sets.map(setObject => {
      return (<Set {...setObject} />)
    })

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{setComponent}</td>
        <td>{this.props.note}</td>
      </tr>
    )
  }
}

class Routine extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      count: 0,
      exercises: [{ sets: [{ reps: 0, percent: 0.0 }] }],
      note: ""
    };
  }

  componentDidMount() {
    var url = heroku().base + heroku().version + '/basicRoutine?routineId=1';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        count: data.count,
        exercises: data.exercises,
        note: data.note
    }));
  }

  render() {
    const exerciseComponent = this.state.exercises.map(exerciseObject => {
      return (<Exercise {...exerciseObject} />)
    })

    return (
      <div className="Routine">
        <div><p><strong>Routine</strong></p></div>
        <p>{this.state.name}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sets</th>
              <th>Note</th>
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
