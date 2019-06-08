import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import SignUpPage from '../containers/SignUpPage';
import SignInPage from '../containers/SignInPage';
import ExercisePage from '../containers/fitness/ExercisePage';
import SessionPage from '../containers/fitness/SessionPage';
import RoutinePage from '../containers/fitness/RoutinePage';
import DietPage from '../containers/nutrition/DietPage';
import MealPage from '../containers/nutrition/MealPage';
import FoodPage from '../containers/nutrition/FoodPage';
import AboutPage from '../containers/site/AboutPage';
import ContactPage from '../containers/site/ContactPage';
import ContributePage from '../containers/site/ContributePage';
import IssuePage from '../containers/site/IssuePage';

const app = () => {
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
    </div>);
};

export default app;
