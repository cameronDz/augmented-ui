import React, { Component } from 'react';
import Dropdown from './components/Dropdown';

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
        obj.key = 'exercise';
        obj.selected = false;
        array.push(obj);
      }
      return array;
    }

    fetch('https://augmentedaspnetbackend.azurewebsites.net/v0.2/api/exercises')
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
    exercises[id].selected = true;
  }

  render() {
    return (
      <div className="App">
        <p>Dropdown menu examples</p>
	<div>
          <Dropdown
	    title="Testing Exercises"
	    list={this.state.exercise}
	    resetThenSet={this.resetThenSet}
	  />
	</div>
	
      </div>
    );
  }
}

export default ExerciseDropdown;
