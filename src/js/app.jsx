import React, { Fragment } from 'react';
import classNames from 'classnames';
import { HashRouter, Route, Switch as RouterSwtich } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ExercisePage from './features/exercises';
import Footer from './components/footer';
import Help from './features/help';
import NutrientPage from './features/nutrients';
import RoutinePage from './features/routines';
import Session from './features/sessions';
import { appStyles as styles } from './styles';

const useStyles = makeStyles(() => styles);
const app = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classNames(classes.appContainer)}>
        <HashRouter>
          <RouterSwtich>
            <Route exact path='/' component={Session} />
            <Route exact path='/exercise' component={ExercisePage} />
            <Route exact path='/help' component={Help} />
            <Route exact path='/nutrient' component={NutrientPage} />
            <Route exact path='/routine' component={RoutinePage} />
            <Route exact path='/session' component={Session} />
          </RouterSwtich>
        </HashRouter>
      </div>
      <Footer className="app-root-footer" />
    </Fragment>);
};

export default app;
