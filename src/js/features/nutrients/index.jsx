import React from 'react';
import { TabbedPage } from '../../components/pages';
import { CaffeinePanel } from './caffeine';

const nutrientsPage = () => {
  return <TabbedPage tabNames={['Caffeine']} tabPanels={[<CaffeinePanel key={1}/>]} />;
};

export default nutrientsPage;
