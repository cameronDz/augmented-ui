import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleCard from '../../components/simpleCard';
import { TabbedPage } from '../../components/pages';
import { NutrientsReporter, NutrientsTable } from './components';
import { getCaffeineList } from './state/actions';
import { handleFunction } from '../../lib/eventHandler';

const tabPanels = [
  <SimpleCard key="table" child={<NutrientsTable />} title={'Nutrients Table'} />,
  <SimpleCard key="creator" child={<NutrientsReporter />} title={'Nutrients Report'} />
];

const propTypes = { getData: PropTypes.func };
const NutrientsPage = ({ getData }) => {
  useEffect(() => {
    handleFunction(getData);
  }, [getData]);

  return <TabbedPage tabNames={['History', 'Report']} tabPanels={tabPanels} />;
};

NutrientsPage.propTypes = propTypes;
const mapStateToProps = null;
const mapDispatchToProps = { getData: getCaffeineList };
export default connect(mapStateToProps, mapDispatchToProps)(NutrientsPage);
