import React from 'react';
import IntakeCreator from './creator';
import IntakeTable from './table';
import Card from '../../../components/bulmaCard';
import * as _config from '../../../../../assets/data/config.json';

const caffeine = () => {
  const renderIntakeCreatorCard = () => {
    const child = (<IntakeCreator />);
    const url = _config.apis.azure + 'CaffeineNutrientIntakes?csv=csv';
    const footerLink = (<a className="card-footer-item" href={url}>Download Intakes as CSV file.</a>);
    return (<Card child={child} footer={footerLink} title={'Caffeine Intake Creator'} />);
  };

  const renderIntakeDisplayCard = () => {
    const child = (<IntakeTable />);
    return (<Card child={child} title={'Caffeine Intake Display'} />);
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
  return (<Card child={renderSessionContent()} title={'Caffeine Page'} />);
};

export default caffeine;
