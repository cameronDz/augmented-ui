import React, { useEffect } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { TabbedPage } from '../../components/pages';
import { RoutinesOverviewTab } from './components';
import { fetchRoutineList } from './state/actions';

const propTypes = { getData: PropType.func };
const RoutinePage = ({ getData }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <TabbedPage
      tabNames={['Overview']}
      tabPanels={[<RoutinesOverviewTab key="overview" />]}
    />
  );
};

RoutinePage.propTypes = propTypes;
const mapStateToProps = null;
const mapDispatchToProps = { getData: fetchRoutineList };
export default connect(mapStateToProps, mapDispatchToProps)(RoutinePage);
