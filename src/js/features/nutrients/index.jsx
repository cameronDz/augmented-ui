import React from 'react';
import Caffeine from './caffeine';
import Card from '../../components/bulmaCard';
import Layout from '../../components/layout';

const nutrientsPage = () => {
  const cardContent = (<Caffeine />);
  return (
    <Layout title='Nutrients'>
      <Card child={cardContent} title='Nutrients' />
    </Layout>);
};

export default nutrientsPage;
