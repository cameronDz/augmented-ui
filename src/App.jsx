import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header title = "Augmented Home" />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
