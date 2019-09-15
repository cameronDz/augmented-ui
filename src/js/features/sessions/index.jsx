import React from 'react';
import Page from '../../containers/page';
import SessionCreator from '../../components/fitness/cardioMachine/sessionCreator';
import SessionsTableDisplay from '../../components/fitness/cardioMachine/sessionsTableDisplay';

const sessions = () => {
  const tabNames = ['Information', 'Record', 'History', 'Data Visualization'];
  const tabPanels = [
    <p key={1}>Information on fitness sessions</p>,
    <SessionCreator key={2}/>,
    <SessionsTableDisplay key={3}/>,
    <p key={4}>Under construction</p>
  ];
  return <Page title="Sessions" tabNames={tabNames} tabPanels={tabPanels} />;
};

export default sessions;
