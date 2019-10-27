import React, { Component } from 'react';
import Layout from '../../../containers/layout';
import ExerciseCreator from './creator';
import ExerciseDropdown from './dropdown';
import Card from '../../../components/bulmaCard';

class Exercise extends Component {
  render () {
    const exerciseCreatorChild = (<ExerciseCreator />);
    const exerciseCreatorTitle = 'Exercise Creator';
    const exerciseDropdownChild = (<ExerciseDropdown />);
    const exerciseDropdownTitle = 'Exercise Dropdown Sample';
    return (
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
      </div>);
  };
}

class ExercisePage extends Component {
  render () {
    return (
      <Layout title='Exercises'>
        <Exercise />
      </Layout>);
  };
}

export default ExercisePage;
