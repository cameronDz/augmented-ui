import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import {azure} from '../../api.js';

class ExerciseDropdown extends Component {

  constructor(){
    super()
    this.state = {exercise:[]};     
  }
    
  componentDidMount() {
    function  processExercise(payLoad)  {
      var array = [];
      for(var i = 0; i < payLoad.length; i++) {
        var counter = payLoad[i];
        var obj = {};
        obj.id = counter.exerciseId;
        obj.title = counter.name;
        obj.key = i;
        obj.selected = false;
        array.push(obj);
      }
      return array;
    }

    var url = azure().base + azure().version + '/api/exercises';
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
        <Dropdown
          title="Exercise Dropdown"
          list={this.state.exercise}
          resetThenSet={this.resetThenSet}
        />
      </div>
    );
  }
}

export default ExerciseDropdown;
