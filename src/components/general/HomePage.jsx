import React, { Component } from 'react';
import Session from '../fitness/Session';
import Layout from '../Layout';

class Home extends Component {

  render() {
    return (
      <div>
        <Session />
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
