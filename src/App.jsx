import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExercisePage from './components/ExercisePage';
import SessionPage from './components/SessionPage';
import DietPage from './components/DietPage';
import MealPage from './components/MealPage';
import FoodPage from './components/FoodPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ContributePage from './components/ContributePage';
import IssuePage from './components/IssuePage';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/exercise' component={ExercisePage} />
          <Route exact path='/session' component={SessionPage} />
          <Route exact path='/diet' component={DietPage} />
          <Route exact path='/meals' component={MealPage} />
          <Route exact path='/foods' component={FoodPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contacts' component={ContactPage} />
          <Route exact path='/contribute' component={ContributePage} />
          <Route exact path='/issue' component={IssuePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
