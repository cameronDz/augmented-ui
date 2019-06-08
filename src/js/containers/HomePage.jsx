import React, { Component } from 'react';
import Session from '../components/fitness/cardioMachine/session';
import Layout from '../components/Layout';

class HomePage extends Component {
  render() {
    const title = 'Augmented Home';
    const children = (<Session />);
    return (<Layout children={children} title={title} />);
  };
}

export default HomePage;
