import React, { Component } from 'react';
import Session from '../components/fitness/Session';
import Layout from '../components/Layout';

class Home extends Component {

  render() {
    return (<div><Session /></div>);
  };
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout title = "Augmented Home" children = {<Home />} />
      </div>);
  };
}

export default HomePage;
