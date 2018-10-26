import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExercisePage from './components/ExercisePage';
import SessionPage from './components/SessionPage';
import DietPage from './components/DietPage';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/exercise' component={ExercisePage} />
          <Route exact path='/session' component={SessionPage} />
          <Route exact path='/diet' component={DietPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
