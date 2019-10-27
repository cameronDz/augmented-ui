import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from '../../containers/page';
import SessionCreator from './components/sessionCreator';
import SessionsTableDisplay from './components/sessionsTableDisplay';
import { fetchSessionsIfNeeded } from '../../state/cardioMachineSessions/actions';
import * as _config from '../../../../assets/data/config.json';

const propTypes = { fetchSessionsIfNeeded: PropTypes.func.isRequired };
const sessions = props => {
  const tabNames = ['Information', 'Record', 'History', 'Data Visualization'];
  const tabPanels = [
    <p key={1}>Information on fitness sessions</p>,
    <SessionCreator key={2}/>,
    <SessionsTableDisplay key={3}/>,
    <p key={4}>Under construction</p>
  ];

  useEffect(() => {
    const apiUrl = _config.apis.azure + 'CardioMachineExercises?pageNumber=1&pageSize=10';
    props.fetchSessionsIfNeeded(apiUrl);
  }, []);

  return <Page title="Sessions" tabNames={tabNames} tabPanels={tabPanels} />;
};

sessions.propTypes = propTypes;
export default connect(null, { fetchSessionsIfNeeded })(sessions);
