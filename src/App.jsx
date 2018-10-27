import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExercisePage from './components/ExercisePage';
import SessionPage from './components/SessionPage';
import RoutinePage from './components/RoutinePage';
import DietPage from './components/DietPage';
import MealPage from './components/MealPage';
import FoodPage from './components/FoodPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ContributePage from './components/ContributePage';
import IssuePage from './components/IssuePage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/exercise' component={ExercisePage} />
          <Route exact path='/session' component={SessionPage} />
          <Route exact path='/routine' component={RoutinePage} />
          <Route exact path='/diet' component={DietPage} />
          <Route exact path='/meal' component={MealPage} />
          <Route exact path='/food' component={FoodPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/contribute' component={ContributePage} />
          <Route exact path='/issue' component={IssuePage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
