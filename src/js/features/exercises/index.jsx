import React from 'react';
import Card from '../../components/bulmaCard';
import Layout from '../../components/layout';
import ExerciseCreator from './components/creator';
import ExerciseDropdown from './components/dropdown';

const exercisePage = () => {
  const exerciseCreatorChild = (<ExerciseCreator />);
  const exerciseCreatorTitle = 'Exercise Creator';
  const exerciseDropdownChild = (<ExerciseDropdown />);
  const exerciseDropdownTitle = 'Exercise Dropdown Sample';
  return (
    <Layout title='Exercises'>
      <div className="card">
        <header>
          <p className="card-header-title">Exercise Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-half">
            <Card child={exerciseCreatorChild} title={exerciseCreatorTitle} />
          </div>
          <div className="content column is-one-half">
            <Card child={exerciseDropdownChild} title={exerciseDropdownTitle} />
          </div>
        </div>
      </div>
    </Layout>);
};

export default exercisePage;
