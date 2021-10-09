import React from 'react';
import { TabbedPage } from '../../components/pages';
import Layout from '../../components/layout';
import Caffeine from './caffeine';

const nutrientsPage = () => {
  const createTab = () => {
    return (
      <Layout isFooterHidden={true}>
        <Caffeine />
      </Layout>);
  };
  return <TabbedPage tabNames={['Caffeine']} tabPanels={[createTab()]} />;
};

export default nutrientsPage;
