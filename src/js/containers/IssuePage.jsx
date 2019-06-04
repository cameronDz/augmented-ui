import React, { Component } from 'react';
import Layout from '../components/Layout';
import Card from '../../components/bulma/card';

class IssuePage extends Component {
  render() {
    const title = 'Report an Issue';
    const cardTitle = 'Issues';
    const cardContent = (
      <React.Fragment>
        <p>There are two ways to report an issue.</p>
        <p>One is through GitHub, by posting a new issue on the <a href="https://www.github.com/cameronDz/augmented-frontend/issues">issues page</a> of the Augmented-Frontend repository.</p>
        <p>The other way is through emailing <a href="mailto:camerondziurgot@gmail.com">Cameron Dziurgot</a> directly with the issue.</p>
      </React.Fragment>);
    const card = (<Card child={cardContent} title={cardTitle} />);
    return (<Layout children={card} title={title} />);
  };
}

export default IssuePage;
