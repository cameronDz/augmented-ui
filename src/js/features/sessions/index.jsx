import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabbedPage } from '../../components/pages';
import SessionCreator from './components/creator';
import SessionsTableDisplay from './components/table';
import { getCardioSessionList } from './state/actions';

const propTypes = { getCardioSessions: PropTypes.func };
const sessions = ({ getCardioSessions }) => {
  const tabNames = ['Record', 'History', 'Data Visualization'];
  const tabPanels = [
    <SessionCreator key="creator" />,
    <SessionsTableDisplay key="table" />,
    <p key="construction">Under construction</p>
  ];

  useEffect(() => {
    getCardioSessions();
  }, []);

  return <TabbedPage title="Sessions" tabNames={tabNames} tabPanels={tabPanels} />;
};

sessions.propTypes = propTypes;
export default connect(null, { getCardioSessions: getCardioSessionList })(sessions);
