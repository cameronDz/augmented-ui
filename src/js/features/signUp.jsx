import React from 'react';
import Layout from '../components/layout';
import Card from '../components/bulmaCard';

const signUp = () => {
  const cardContent = (<p>Use this page to sign up for application.</p>);
  return (
    <Layout title='Sign Up for Augmented'>
      <Card child={cardContent} title='Sign Up' />
    </Layout>);
}

export default signUp;
