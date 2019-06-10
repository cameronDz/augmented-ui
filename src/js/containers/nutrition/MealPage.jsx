import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/bulma/card';

class MealPage extends Component {
  render() {
    const title = 'Meals';
    const cardContent = (<p>Track Meals here.</p>);
    const foodCard = (<Card child={cardContent} title={title} />);
    return (<Layout children={foodCard} title={title} />);
  };
}

export default MealPage;
