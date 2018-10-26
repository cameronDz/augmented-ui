import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
