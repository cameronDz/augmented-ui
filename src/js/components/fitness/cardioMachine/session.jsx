import React from 'react';
import SessionCreator from './sessionCreator';
import SessionsTableDisplay from './sessionsTableDisplay';
import IntakeCreator from '../../nutrition/caffeine/creator';
import IntakeDisplayTable from '../../nutrition/caffeine/displayTable';
import * as _config from '../../../../../assets/data/config.json';
import Card from '../../bulma/card';

const session = () => {

  // TODO move to nutrient/page
  const renderIntakeCreatorCard = () => {
    const child = (<IntakeCreator />);
    const url = _config.apis.azure + 'CaffeineNutrientIntakes?csv=csv';
    const footerLink = (<a className="card-footer-item" href={url}>Download Intakes as CSV file.</a>);
    return (<Card child={child} footer={footerLink} title={'Caffeine Intake Creator'} />);
  };

  const renderIntakeDisplayCard = () => {
    const child = (<IntakeDisplayTable />);
    return (<Card child={child} title={'Caffeine Intake Display'} />);
  };

  const renderCreateSessionCard = () => {
    const child = (<SessionCreator />);
    const url = _config.apis.azure + 'CardioMachineExercises?csv=csv';
    const footerLink = (<a className="card-footer-item" href={url}>Download Sessions as CSV file.</a>);
    return (<Card child={child} footer={footerLink} title={'Create Cardio Machine Session'} />);
  };

  const renderSessionCard = () => {
    const child = (<SessionsTableDisplay />);
    return (<Card child={child} title={'Cardio Machine Session'} />);
  };

  const renderSessionContent = () => {
    return(
      <React.Fragment>
        <div className="card-content columns is-multiline is-tablet">
          <div className="content column is-two-fifths">
            {renderIntakeCreatorCard()}
          </div>
          <div className="content column is-three-fifths">
            {renderIntakeDisplayCard()}
          </div>

          <div className="content column is-two-fifths">
            {renderCreateSessionCard()}
          </div>
          <div className="content column is-three-fifths">
            {renderSessionCard()}
          </div>
        </div>
      </React.Fragment>);
  };

  return (<Card child={renderSessionContent()} title={'Sessions Page'} />);
};

export default session;
