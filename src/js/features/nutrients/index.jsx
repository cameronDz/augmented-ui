import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabbedPage } from '../../components/pages';
import { NutrientsCreator, NutrientsReporter, NutrientsTable } from './components';
import { getNutrientReports, getNutrientTypes } from './state/actions';
import { handleFunction } from '../../lib/eventHandler';

const tabPanels = [
  <NutrientsTable key="table" />,
  <NutrientsReporter key="reporter" />,
  <NutrientsCreator key="creator" />
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
