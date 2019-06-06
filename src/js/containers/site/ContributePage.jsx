import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/bulma/card';

class ContributePage extends Component {
  render() {
    const title = 'Contribution Information';
    const cardTitle = 'Contributing';
    const cardContent = (<p>To contribute to the application code base, create a Pull Request on the <a href="https://www.github.com/cameronDz/augmented-frontend">Augmented Frontend GitHub</a> page.</p>);
    const card = (<Card child={cardContent} title={cardTitle} />);
    return (<Layout children={card} title={title} />);
  };
}

export default ContributePage;
