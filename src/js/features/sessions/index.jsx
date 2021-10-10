import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabbedPage } from '../../components/pages';
import SessionCreator from './components/creator';
import SessionsTableDisplay from './components/table';
import { getCardioSessionList } from './state/actions';

const propTypes = { getData: PropTypes.func };
const sessions = ({ getData }) => {
  const tabNames = ['History', 'Record'];
  const tabPanels = [
    <SessionsTableDisplay key="table" />,
    <SessionCreator key="creator" />
  ];

  useEffect(() => {
    getData();
  }, []);

  return <TabbedPage isTabsCentered={false} tabNames={tabNames} tabPanels={tabPanels} title="Sessions" />;
};

sessions.propTypes = propTypes;
export default connect(null, { getData: getCardioSessionList })(sessions);
