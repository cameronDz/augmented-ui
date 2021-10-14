import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabbedPage } from '../../components/pages';
import { getCardioSessionList } from './state/actions';
import SessionReporter from './components/reporter';
import SessionsTableDisplay from './components/table';

const tabPanels = [
  <SessionsTableDisplay key="table" />,
  <SessionReporter key="reporter" />
];

const propTypes = { getData: PropTypes.func };
const SessionsPage = ({ getData }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <TabbedPage
      tabNames={['History', 'Report']}
      tabPanels={tabPanels}
      title="Sessions"
    />
  );
};

SessionsPage.propTypes = propTypes;
export default connect(null, { getData: getCardioSessionList })(SessionsPage);
