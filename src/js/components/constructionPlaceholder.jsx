import React from 'react';
import Layout from './layout';
import Card from './bulmaCard';

const constructionPlaceholder = ({ title }) => {
  const content = (<p>Page is currently under construction.</p>);
  return (
    <Layout title={title}>
      <Card child={content} title={title} />
    </Layout>);
};

export default constructionPlaceholder;
