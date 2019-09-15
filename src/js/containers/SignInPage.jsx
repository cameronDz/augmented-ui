import React, { Component } from 'react';
import Layout from '../components/Layout';
import Card from '../components/bulma/card';

const signIn = () => {
  const title = 'Sign In to Augmented';
  const cardTitle = 'Sign In';
  const cardContent = (<p>Use this page to sign into application.</p>);
  const card = (<Card child={cardContent} title={cardTitle} />);
  return (<Layout children={card} title={title} />);
};

export default signIn;
