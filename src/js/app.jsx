import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpPage from './features/signUp';
import SignInPage from './features/signIn';
import ConstructionPlaceholder from './components/constructionPlaceholder';
import ExercisePage from './features/exercises/components/ExercisePage';
import RoutinePage from './features/routines/components/RoutinePage';
import NutrientPage from './containers/nutrition/nutrientsPage';
import Session from './features/sessions';
import Help from './features/help';

const app = () => {
  const dietPage = (<ConstructionPlaceholder title='Diet Page' />);
  const foodPage = (<ConstructionPlaceholder title='Food Page' />);
  const mealPage = (<ConstructionPlaceholder title='Meal Page' />);
  return (
    <Switch>
      <Route exact path='/' component={Session} />
      <Route exact path='/diet' component={() => dietPage} />
      <Route exact path='/exercise' component={ExercisePage} />
      <Route exact path='/food' component={() => foodPage} />
      <Route exact path='/help' component={Help} />
      <Route exact path='/meal' component={() => mealPage} />
      <Route exact path='/nutrient' component={NutrientPage} />
      <Route exact path='/routine' component={RoutinePage} />
      <Route exact path='/session' component={Session} />
      <Route exact path='/signin' component={SignInPage} />
      <Route exact path='/signup' component={SignUpPage} />
    </Switch>);
};

export default app;
