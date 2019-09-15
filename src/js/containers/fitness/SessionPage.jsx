import React, { Component } from 'react';
import Session from '../../components/fitness/cardioMachine/session';
import Layout from '../../components/Layout';

class SessionPage extends Component {
  render () {
    return (
      <Layout title='Sessions'>
        <Session />
      </Layout>);
  };
}

export default SessionPage;
