import React from 'react';
import Layout from '../containers/layout';
import Card from '../components/bulmaCard';

const signIn = () => {
  const cardContent = (<p>Use this page to sign into application.</p>);
  return (
    <Layout title='Sign In to Augmented'>
      <Card child={cardContent} title='Sign In' />
    </Layout>);
};

export default signIn;
