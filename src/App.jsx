import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/general/HomePage';
import ExercisePage from './components/fitness/ExercisePage';
import SessionPage from './components/fitness/SessionPage';
import RoutinePage from './components/fitness/RoutinePage';
import DietPage from './components/nutrition/DietPage';
import MealPage from './components/nutrition/MealPage';
import FoodPage from './components/nutrition/FoodPage';
import AboutPage from './components/general/AboutPage';
import ContactPage from './components/general/ContactPage';
import ContributePage from './components/general/ContributePage';
import IssuePage from './components/general/IssuePage';
import SignUpPage from './components/general/SignUpPage';
import SignInPage from './components/general/SignInPage';

import { connect } from 'react-redux';
import { simpleAction } from '/actions/simpleAction';

class App extends Component {

  const mapStateToProps = state => ({
    ...state
  });

  const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
  });

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

export default connect(mapStateToProps, mapDispatchToProps) (App);
