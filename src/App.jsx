import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {

  render() {
    return (
      <div>
        <Header title = "Augmented Home" />
        <HomePage />
        <br />
      </div>
    );
  }
}

export default App;
