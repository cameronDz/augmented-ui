import React, { Component } from 'react';
import Card from '../../components/bulmaCard';
import Layout from '../../components/layout';
import Routine from './components/fullRoutine';

class RoutineBase extends Component {
  render () {
    const sideBarTitle = 'Routine Side Bar';
    const sideBarChild = (<p>Side-bar for Routine information.</p>);
    const routineTitle = 'Latest Routine';
    const routineChild = (<Routine />);
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Routines Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-fifth">
            <Card child={sideBarChild} title={sideBarTitle} />
          </div>
          <div className="content column is-four-fifths">
            <Card child={routineChild} title={routineTitle} />
          </div>
        </div>
      </div>);
  };
}

class RoutinePage extends Component {
  render () {
    return (
      <Layout title='Routines Page'>
        <RoutineBase />
      </Layout>);
  };
}

export default RoutinePage;
