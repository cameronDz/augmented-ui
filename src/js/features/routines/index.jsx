import React from 'react';
import Routine from './components/fullRoutine';
import Card from '../../components/bulmaCard';
import Layout from '../../components/layout';

const routinePage = () => {
  const sideBarTitle = 'Routine Side Bar';
  const sideBarChild = (<p>Side-bar for Routine information.</p>);
  const routineTitle = 'Latest Routine';
  const routineChild = (<Routine />);
  return (
    <Layout title='Routines Page'>
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
      </div>
    </Layout>);
};

export default routinePage;
