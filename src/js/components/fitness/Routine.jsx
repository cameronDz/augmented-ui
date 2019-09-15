import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as _config from '../../../../assets/data/config.json';

const setPropTypes = {
  percent: PropTypes.number,
  reps: PropTypes.number
};
class Set extends Component {
  render () {
    return `${this.props.reps} X ${this.props.percent * 100} %`;
  }
}
Set.propTypes = setPropTypes;

const excercisePropTypes = {
  name: PropTypes.string,
  note: PropTypes.string,
  sets: PropTypes.array
};
class Exercise extends Component {
  render () {
    const setComponent = this.props.sets.map((item, key) => {
      const breakLine = key + 1 !== this.props.sets.length && <br/>;
      return (
        <Fragment key={key}>
          <Set {...item} /> {breakLine}
        </Fragment>);
    });

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{setComponent}</td>
        <td>{this.props.note}</td>
      </tr>);
  }
}
Exercise.propTypes = excercisePropTypes;

class Routine extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      count: 0,
      exercises: [{ sets: [{ reps: 0, percent: 0.0 }] }],
      note: ''
    };
  }

  componentDidMount () {
    const url = _config.apis.heroku + 'basicRoutine?routineId=1';
    const header = { header: { 'Content-Type': 'application/json' } };
    axios.get(url, header)
      .then(payload => {
        this.setState({
          name: payload.data.name,
          count: payload.data.count,
          exercises: payload.data.exercises,
          note: payload.data.note
        });
      })
      .catch(error => {
        // TODO inform user
        console.error(error);
      });
  }

  render () {
    const exerciseComponent = this.state.exercises.map((item, key) => {
      return (<Exercise key={key} {...item} />);
    });

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
      </div>);
  }
}

export default Routine;
