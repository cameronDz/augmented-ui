import React, { Component } from 'react';
import SessionPage from './SessionPage';
import Routine from './Routine';
import Layout from './Layout';

class Home extends Component {

  render() {
    return (
      <div>
        <SessionPage />
      </div>
    );
  }

}

class HomePage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Augmented Home" children = {<Home />} />
      </div>
    );
  }
}

export default HomePage;
