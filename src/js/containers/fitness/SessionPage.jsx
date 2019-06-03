import React, { Component } from 'react';
import Session from '../../components/fitness/Session';
import Layout from '../../components/Layout';

class SessionPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Sessions" children = {<Session />} />
      </div>
    );
  }
}

export default SessionPage;
