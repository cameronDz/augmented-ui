import React, { Component } from 'react';
import Layout from '../layout';
import Card from '../../components/bulmaCard';

class DietPage extends Component {
  render () {
    const dietChild = (<p>Track diets here.</p>);
    return (
      <Layout title='Diets'>
        <Card child={dietChild} title='Diets' />
      </Layout>);
  };
}

export default DietPage;
