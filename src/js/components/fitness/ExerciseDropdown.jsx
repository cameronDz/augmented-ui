import React, { Component } from 'react';
import get from 'lodash.get';
import Dropdown from '../Dropdown';
import * as _config from '../../../../assets/data/config.json';

class ExerciseDropdown extends Component {

  constructor(){
    super()
    this.state = {exercise:[]};     
  }

  componentDidMount() {
    function  processExercise(payLoad)  {
      return (Array.isArray(payload))
        ? payLoad.map((item, index) => {
            return {
              'id': get(item, 'exerciseId', -1),
              'title': get(item, 'name', ''),
              'key': index,
              'selected': false
            };
          })
        : null;
    };

    const url = _config.apis.azure + 'exercises';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        exercise : processExercise(data)
      })
    );
  }

  toggleSelected = (id, key) => {
    let temp = [...this.state[key]]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, stateKey) => {
    let exercises = [...this.state.exercise]
    exercises.forEach(item => item.selected = false);
    exercises[stateKey].selected = true;
  }

  render() {
    return (
      <div>
        <div>
          <p><strong>Exercise Dropdown Menu</strong></p>
        </div>
        <Dropdown list={this.state.exercise}
          resetThenSet={this.resetThenSet}
          title="Exercise Dropdown" />
      </div>
    );
  }
}

export default ExerciseDropdown;
