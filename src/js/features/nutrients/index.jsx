import React from 'react';
import Caffeine from './caffeine';
import Layout from '../../components/layout';
import Page from '../../components/page';

const nutrientsPage = () => {
  const createTab = () => {
    return (
      <Layout isFooterHidden={true} isHeaderHidden={true} title='Nutrients'>
        <Caffeine />
      </Layout>);
  };
  return <Page tabNames={['Caffeine']} tabPanels={[createTab()]} />;
};

export default nutrientsPage;
