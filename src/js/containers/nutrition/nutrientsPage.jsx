import React from 'react';
import Caffeine from '../../components/nutrition/caffeine';
import Card from '../../components/bulma/card';
import Layout from '../../components/Layout';

const nutrientsPage = () => {
  const cardContent = (<Caffeine />);
  return (
    <Layout title='Nutrients'>
      <Card child={cardContent} title='Nutrients' />
    </Layout>);
};

export default nutrientsPage;
