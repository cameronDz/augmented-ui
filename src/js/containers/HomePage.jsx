import React, { Component } from 'react';
import Session from '../components/fitness/cardioMachine/session';
import Caffeine from '../components/nutrition/caffeine';
import Layout from '../components/Layout';

class HomePage extends Component {
  render() {
    const title = 'Augmented Home';
    const children = (
      <React.Fragment>
        <Caffeine />
        <Session />
      </React.Fragment>);
    return (<Layout children={children} title={title} />);
  };
}

export default HomePage;
