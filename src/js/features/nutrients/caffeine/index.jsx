import React from 'react';
import IntakeCreator from './components/creator';
import IntakeTable from './components/table';
import SimpleCard from '../../../components/simpleCard';

const caffeine = () => {
  const renderIntakeCreatorCard = () => {
    const child = (<IntakeCreator />);
    return (<SimpleCard child={child} title={'Caffeine Intake Creator'} />);
  };

  const renderIntakeDisplayCard = () => {
    const child = (<IntakeTable />);
    return (<SimpleCard child={child} title={'Caffeine Intake Display'} />);
  };

  const renderSessionContent = () => {
    return (
      <div className="card-content columns is-multiline is-tablet">
        <div className="content column is-two-fifths">
          {renderIntakeCreatorCard()}
        </div>
        <div className="content column is-three-fifths">
          {renderIntakeDisplayCard()}
        </div>
      </div>);
  };
  return (<SimpleCard child={renderSessionContent()} title={'Caffeine Page'} />);
};

export default caffeine;
