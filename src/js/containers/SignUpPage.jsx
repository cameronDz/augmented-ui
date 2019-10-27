import React, { Component } from 'react';
import Layout from '../components/Layout';
import Card from '../components/bulmaCard';

class SignUpPage extends Component {
  render () {
    const cardContent = (<p>Use this page to sign up for application.</p>);
    return (
      <Layout title='Sign Up for Augmented'>
        <Card child={cardContent} title='Sign Up' />
      </Layout>);
  };
}

export default SignUpPage;
