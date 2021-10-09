import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExerciseList } from './state/actions';
import { TabbedPage } from '../../components/pages';
import SimpleCard from '../../components/simpleCard';
import ExerciseCreator from './components/creator';
import ExerciseDropdown from './components/dropdown';

const propTypes = {
  exercises: PropTypes.array,
  getExercises: PropTypes.func
};
const exercisePage = ({ exercises, getExercises }) => {
  useEffect(() => {
    getExercises();
  }, []);

  const createTab = () => {
    return (
      <div className="card">
        <header>
          <p className="card-header-title">Exercise Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-half">
            <SimpleCard child={<ExerciseCreator />} title="Exercise Creator" />
          </div>
          <div className="content column is-one-half">
            <SimpleCard child={<ExerciseDropdown exercises={exercises} />} title="Exercise Dropdown Sample" />
          </div>
        </div>
      </div>);
  };
  return <TabbedPage tabNames={['Overview']} tabPanels={[createTab()]} />;
};

exercisePage.propTypes = propTypes;
const mapStateToProps = state => ({ exercises: state.exercises.exerciseGetPayload });
export default connect(mapStateToProps, { getExercises: getExerciseList })(exercisePage);
