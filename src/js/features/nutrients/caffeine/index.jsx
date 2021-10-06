import React from 'react';
import IntakeCreator from './components/creator';
import IntakeTable from './components/table';
import SimpleCard from '../../../components/simpleCard';
import _config from '../../../../assets/config.json';

const caffeine = () => {
  const renderIntakeCreatorCard = () => {
    const child = (<IntakeCreator />);
    const url = `${_config.baseApiUrl}/object/caffeine`;
    const footerLink = (<a className="card-footer-item" href={url} style={{ paddingLeft: '4px' }} target="_"> Download Intakes in JSON file.</a>);
    return (<SimpleCard child={child} footer={footerLink} title={'Caffeine Intake Creator'} />);
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
