import React from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';
import Card from './bulmaCard';

const propTypes = { title: PropTypes.string };
const constructionPlaceholder = ({ title }) => {
  const content = (<p>Page is currently under construction.</p>);
  return (
    <Layout title={title}>
      <Card child={content} title={title} />
    </Layout>);
};

constructionPlaceholder.propTypes = propTypes;
export default constructionPlaceholder;
