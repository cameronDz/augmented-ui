import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/bulma/card';

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
