import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/bulmaCard';

class FoodPage extends Component {
  render () {
    const cardContent = (<p>Look up foor information here.</p>);
    return (
      <Layout title='Food'>
        <Card child={cardContent} title='Foods' />
      </Layout>);
  };
}

export default FoodPage;
