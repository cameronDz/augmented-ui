import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/bulma/card';

class FoodPage extends Component {
  render () {
    const title = 'Food';
    const cardTitle = 'Foods';
    const cardContent = (<p>Look up foor information here.</p>);
    const foodCard = (<Card child={cardContent} title={cardTitle} />);
    return (<Layout children={foodCard} title={title} />);
  };
}

export default FoodPage;
