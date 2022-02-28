import React from 'react';
import { TabbedPage } from '../../components/pages';
import TabAbout from './tabAbout';
import TabContact from './tabContact';
import TabExternals from './tabExternals';
import TabReport from './tabReport';

const tabPanels = [
  <TabAbout key="about" />,
  <TabContact key="contact" />,
  <TabExternals key="externals" />,
  <TabReport key="report" />
];
const tabNames = ['About', 'Contact', 'Externals', 'Report an issue'];
const title = 'Help';
const HelpPage = () => {
  return <TabbedPage tabNames={tabNames} tabPanels={tabPanels} title={title} />;
};

export default HelpPage;
