import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';
import ExercisePage from './features/exercises/components/ExercisePage';
import RoutinePage from './features/routines/components/RoutinePage';
import DietPage from './containers/nutrition/DietPage';
import FoodPage from './containers/nutrition/FoodPage';
import MealPage from './containers/nutrition/MealPage';
import NutrientPage from './containers/nutrition/nutrientsPage';
import Session from './features/sessions';
import Help from './features/help';

const app = () => {
  return (
    <Switch>
      <Route exact path='/' component={Session} />
      <Route exact path='/diet' component={DietPage} />
      <Route exact path='/exercise' component={ExercisePage} />
      <Route exact path='/food' component={FoodPage} />
      <Route exact path='/help' component={Help} />
      <Route exact path='/meal' component={MealPage} />
      <Route exact path='/nutrient' component={NutrientPage} />
      <Route exact path='/routine' component={RoutinePage} />
      <Route exact path='/session' component={Session} />
      <Route exact path='/signin' component={SignInPage} />
      <Route exact path='/signup' component={SignUpPage} />
    </Switch>);
};

export default app;
