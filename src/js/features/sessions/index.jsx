import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from '../../components/page';
import SessionCreator from './components/creator';
import SessionsTableDisplay from './components/table';
import { getCardioSessionList } from './state/actions';

const propTypes = { getCardioSessions: PropTypes.func };
const sessions = ({ getCardioSessions }) => {
  const tabNames = ['Information', 'Record', 'History', 'Data Visualization'];
  const tabPanels = [
    <p key={1}>Information on fitness sessions</p>,
    <SessionCreator key={2}/>,
    <SessionsTableDisplay key={3}/>,
    <p key={4}>Under construction</p>
  ];

  useEffect(() => {
    getCardioSessions();
  }, []);

  return <Page title="Sessions" tabNames={tabNames} tabPanels={tabPanels} />;
};

sessions.propTypes = propTypes;
export default connect(null, { getCardioSessions: getCardioSessionList })(sessions);
