import React from 'react';
import { TabbedPage } from '../components/page';
import Caffeine from './caffeine';
import Layout from '../../components/layout';

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
