import React, { Component } from 'react';
import Layout from '../components/Layout';
import Card from '../../components/bulma/card';

class ContactPage extends Component {
  render() {
    const title = 'Contact Information';
    const cardContent = (
      <React.Fragment>
        <p>Application creator and maintainer: Cameron Dziurgot.</p>
        <p>Email: <a href="mailto:camerondziurgot@gmail.com">camerondziurgot@gmail.com</a></p>
        <p>GitHub: <a href="https://www.github.com/cameronDz/augmented-frontend">Augmented Frontend</a></p>
      </React.Fragment>);
    const card = (<Card child={cardContent} title={title} />);
    return (<Layout children={card} title={title} />);
  };
}

export default ContactPage;
