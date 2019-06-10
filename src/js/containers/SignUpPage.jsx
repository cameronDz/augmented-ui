import React, { Component } from 'react';
import Layout from '../components/Layout';
import Card from '../components/bulma/card';

class SignUpPage extends Component {
  render() {
    const title = 'Sign Up to Augmented';
    const cardTitle = 'Sign Up';
    const cardContent = (<p>Use this page to sign up for application.</p>);
    const card = (<Card child={cardContent} title={cardTitle} />);
    return (<Layout children={card} title={title} />);
  };
}

export default SignUpPage;
