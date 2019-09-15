import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/bulma/card';

const signIn = () => {
  const cardContent = (<p>Use this page to sign into application.</p>);
  return (
    <Layout title='Sign In to Augmented'>
      <Card child={cardContent} title='Sign In' />
    </Layout>);
};

export default signIn;
