import React from 'react';
import Card from '../../components/bulma/card';
import Layout from '../../components/Layout';
import NutrientCreator from '../../components/nutrition/caffiene/creator';

const nutrientsPage = () => {
  const title = 'Nutrients';
  const cardContent = (<NutrientCreator />);
  const card = (<Card child={cardContent} title={title} />);
  return (<Layout children={card} title={title} />);
};

export default nutrientsPage;
