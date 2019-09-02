import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';
import ExercisePage from './containers/fitness/ExercisePage';
import SessionPage from './containers/fitness/SessionPage';
import RoutinePage from './containers/fitness/RoutinePage';
import DietPage from './containers/nutrition/DietPage';
import FoodPage from './containers/nutrition/FoodPage';
import MealPage from './containers/nutrition/MealPage';
import NutrientPage from './containers/nutrition/nutrientsPage';
import AboutPage from './containers/site/AboutPage';
import ContactPage from './containers/site/ContactPage';
import ContributePage from './containers/site/ContributePage';
import IssuePage from './containers/site/IssuePage';

const app = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/contribute' component={ContributePage} />
      <Route exact path='/diet' component={DietPage} />
      <Route exact path='/exercise' component={ExercisePage} />
      <Route exact path='/food' component={FoodPage} />
      <Route exact path='/issue' component={IssuePage} />
      <Route exact path='/meal' component={MealPage} />
      <Route exact path='/nutrient' component={NutrientPage} />
      <Route exact path='/routine' component={RoutinePage} />
      <Route exact path='/session' component={SessionPage} />
      <Route exact path='/signin' component={SignInPage} />
      <Route exact path='/signup' component={SignUpPage} />
    </Switch>);
};

export default app;
