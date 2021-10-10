import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleCard from '../../components/simpleCard';
import { TabbedPage } from '../../components/pages';
import { NutrientsCreator, NutrientsReporter, NutrientsTable } from './components';
import { getNutrientList } from './state/actions';
import { handleFunction } from '../../lib/eventHandler';

const tabPanels = [
  <SimpleCard key="table" child={<NutrientsTable />} title={'Nutrients Table'} />,
  <SimpleCard key="reporter" child={<NutrientsReporter />} title={'Nutrients Report'} />,
  <SimpleCard key="creator" child={<NutrientsCreator />} title={'Nutrients Creator'} />
];

const propTypes = { getData: PropTypes.func };
const NutrientsPage = ({ getData }) => {
  useEffect(() => {
    handleFunction(getData);
  }, [getData]);

  return <TabbedPage tabNames={['History', 'Report', 'Creator']} tabPanels={tabPanels} />;
};

NutrientsPage.propTypes = propTypes;
const mapStateToProps = null;
const mapDispatchToProps = { getData: getNutrientList };
export default connect(mapStateToProps, mapDispatchToProps)(NutrientsPage);
