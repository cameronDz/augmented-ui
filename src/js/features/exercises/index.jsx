import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExerciseList } from './state/actions';
import { TabbedPage } from '../../components/pages';
import SimpleCard from '../../components/simpleCard';
import ExerciseCreator from './components/creator';
import ExerciseDropdown from './components/dropdown';

const tabNames = ['Dropdown Sample', 'Creator'];
const tabPanels = [
  <SimpleCard key="dropdown" child={<ExerciseDropdown />} title="Exercise Dropdown Sample" />,
  <SimpleCard key="creator" child={<ExerciseCreator />} title="Exercise Creator" />
];
const propTypes = { getExercises: PropTypes.func };
const exercisePage = ({ getExercises }) => {
  useEffect(() => {
    getExercises();
  }, []);

  return <TabbedPage tabNames={tabNames} tabPanels={tabPanels} />;
};

exercisePage.propTypes = propTypes;
export default connect(null, { getExercises: getExerciseList })(exercisePage);
