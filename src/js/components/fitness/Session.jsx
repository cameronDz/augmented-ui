import React, { Component } from 'react';
import CardioMachineCreator from './CardioMachineCreator';
import CardioMachineSessions from './CardioMachineSessions';
import * as _config from '../../../../assets/data/config.json';
import Card from '../bulma/card';

class Session extends Component {

  render() {
    const renderCreateSessionCard = () => {
      const title = 'Create Cardio Machine Session';
      const child = (<CardioMachineCreator />);
      const url = _config.apis.azure + 'CardioMachineExercises?csv=csv';
      const footerLink = (<a className="card-footer-item" href={url}>Download Sessions as CSV file.</a>);
      return (<Card child={child} footer={footerLink} title={title} />);
    };

    const renderSessionCard = () => {
      const title = 'Cardio Machine Session';
      const child = (<CardioMachineSessions />);
      return (<Card child={child} title={title} />);
    };

    const renderContent = () => {
      return(
        <React.Fragment>
          <div className="card-content columns is-multiline is-tablet">
            <div className="content column is-two-fifths">
              {renderSessionCard()}
            </div>
            <div className="content column is-three-fifths">
              {renderCreateSessionCard()}
            </div>
          </div>
        </React.Fragment>);
    };

    const mainTitle = 'Sessions Page';
    const mainContent = renderContent();
    return (<Card child={mainContent} title={mainTitle} />);
  };
}

export default Session;
