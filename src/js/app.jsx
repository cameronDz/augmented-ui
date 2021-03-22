import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import ExercisePage from './features/exercises';
import Footer from './components/footer';
import Help from './features/help';
import NutrientPage from './features/nutrients';
import RoutinePage from './features/routines';
import Session from './features/sessions';

const app = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Session} />
        <Route exact path='/exercise' component={ExercisePage} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/nutrient' component={NutrientPage} />
        <Route exact path='/routine' component={RoutinePage} />
        <Route exact path='/session' component={Session} />
      </Switch>
      <Footer />
    </Fragment>);
};

export default app;
