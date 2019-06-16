import React from 'react';
import Caffeine from '../../components/nutrition/caffeine';
import Card from '../../components/bulma/card';
import Layout from '../../components/Layout';

const nutrientsPage = () => {
  const title = 'Nutrients';
  const cardContent = (<Caffeine />);
  const nutrientCard = (<Card child={cardContent} title={title} />);
  return (<Layout children={nutrientCard} title={title} />);
};

export default nutrientsPage;
