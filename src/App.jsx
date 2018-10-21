import React, { Component } from 'react';
import Layout from './components/Layout';
import HomePage from './components/HomePage';

class App extends Component {

  render() {
    return (
      <div>
        <Layout title = "Augmented Home" children = {<HomePage />} />
      </div>
    );
  }
}

export default App;
