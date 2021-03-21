import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExerciseList } from './state/actions';
import Card from '../../components/bulmaCard';
import Layout from '../../components/layout';
import ExerciseCreator from './components/creator';
import ExerciseDropdown from './components/dropdown';

const propTypes = {
  exercises: PropTypes.array,
  getExerciseList: PropTypes.func
};
const exercisePage = ({ exercises, getExerciseList }) => {
  useEffect(() => {
    getExerciseList();
  }, []);

  return (
    <Layout title='Exercises'>
      <div className="card">
        <header>
          <p className="card-header-title">Exercise Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-half">
            <Card child={<ExerciseCreator />} title="Exercise Creator" />
          </div>
          <div className="content column is-one-half">
            <Card child={<ExerciseDropdown exercises={exercises} />} title="Exercise Dropdown Sample" />
          </div>
        </div>
      </div>
    </Layout>);
};
exercisePage.propTypes = propTypes;
const mapStateToProps = state => ({ exercises: state.exercises.exerciseGetPayload });
export default connect(mapStateToProps, { getExerciseList })(exercisePage);
