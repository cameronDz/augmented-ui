import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/bulma/card';

class AboutPage extends Component {
  render() {
    const title = 'Augmented About';
    const cardTitle = 'About Page';
    const cardContent = (<p>Augmented is an application for tracking fitness, nutrition, and general health. Application is ment to take in data directly from the user, as well as consume data from third party applications like FitBits or Apple Watches.</p>);
    const card = (<Card child={cardContent} title={cardTitle} />);
    return (<Layout children={card} title={title} />);
  };
}

export default AboutPage;
