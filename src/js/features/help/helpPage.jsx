import React from 'react';
import { TabbedPage } from '../../components/pages';
import TabAbout from './tabAbout';
import TabContact from './tabContact';
import TabReport from './tabReport';

const tabPanels = [
  <TabAbout key="about" />,
  <TabContact key="contact" />,
  <TabReport key="report" />
];
const tabNames = ['About', 'Contact', 'Report an issue'];
const title = 'Help';
const HelpPage = () => {
  return <TabbedPage tabNames={tabNames} tabPanels={tabPanels} title={title} />;
};

export default HelpPage;
