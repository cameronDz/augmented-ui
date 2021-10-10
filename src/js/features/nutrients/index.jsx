import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleCard from '../../components/simpleCard';
import { TabbedPage } from '../../components/pages';
import { NutrientsCreator, NutrientsReporter, NutrientsTable } from './components';
import { getNutrientReports, getNutrientTypes } from './state/actions';
import { handleFunction } from '../../lib/eventHandler';

const tabPanels = [
  <SimpleCard key="table" child={<NutrientsTable />} title={'Nutrient Records'} />,
  <SimpleCard key="reporter" child={<NutrientsReporter />} title={'Nutrient Reporter'} />,
  <SimpleCard key="creator" child={<NutrientsCreator />} title={'Nutrient Type Creator'} />
];

const propTypes = {
  getReportsData: PropTypes.func,
  getTypesData: PropTypes.func
};
const NutrientsPage = ({ getReportsData, getTypesData }) => {
  useEffect(() => {
    handleFunction(getReportsData);
  }, [getReportsData]);

  useEffect(() => {
    handleFunction(getTypesData);
  }, [getTypesData]);

  return <TabbedPage tabNames={['Records', 'Reporter', 'Creator']} tabPanels={tabPanels} />;
};

NutrientsPage.propTypes = propTypes;
const mapStateToProps = null;
const mapDispatchToProps = {
  getReportsData: getNutrientReports,
  getTypesData: getNutrientTypes
};
export default connect(mapStateToProps, mapDispatchToProps)(NutrientsPage);
