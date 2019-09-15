import React, { Component } from 'react';
import Session from '../../components/fitness/cardioMachine/session';
import Layout from '../../components/Layout';

class SessionPage extends Component {
  render () {
    const children = (<Session />);
    const title = 'Sessions';
    return (<Layout children={children} title={title} />);
  };
}

export default SessionPage;
