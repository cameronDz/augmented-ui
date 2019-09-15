import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/bulma/card';

class MealPage extends Component {
  render () {
    const cardContent = (<p>Track Meals here.</p>);
    return (
      <Layout title='Meals'>
        <Card child={cardContent} title='Meals' />
      </Layout>);
  };
}

export default MealPage;
