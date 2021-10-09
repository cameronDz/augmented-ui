import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleCard from '../../components/simpleCard';
import { TabbedPage } from '../../components/pages';
import { CaffeineCreator, CaffeineTable } from './caffeine';
import { getCaffeineList } from './caffeine/state/actions';
import { handleFunction } from '../../lib/eventHandler';

const tabPanels = [
  <SimpleCard key="table" child={<CaffeineTable />} title={'Caffeine Table'} />,
  <SimpleCard key="creator" child={<CaffeineCreator />} title={'Caffeine Report'} />
];
const tabNames = ['History', 'Report'];

const propTypes = { getData: PropTypes.func };
const NutrientsPage = ({ getData }) => {
  useEffect(() => {
    handleFunction(getData);
  }, [getData]);
  return <TabbedPage tabNames={tabNames} tabPanels={tabPanels} />;
};

NutrientsPage.propTypes = propTypes;
const mapStateToProps = null;
const mapDispatchToProps = { getData: getCaffeineList };
export default connect(mapStateToProps, mapDispatchToProps)(NutrientsPage);
