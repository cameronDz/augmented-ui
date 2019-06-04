import React, { Component } from 'react';
import Layout from '../Layout';
import Card from '../../components/bulma/card';

class DietPage extends Component {
  render() {
    const dietTitle = 'Diets';
    const dietChild = (<p>Track diets here.</p>);
    const dietCard = (<Card child={dietChild} title={dietTitle} />);
    return (<Layout children={dietCard} title={dietTitle} />);
  };
}

export default DietPage;
