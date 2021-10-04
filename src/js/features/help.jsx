import React, { Fragment } from 'react';
import Page from '../components/page';
import _package from '../../../package.json';

const help = () => {
  const email = _package.author.email;
  const name = _package.author.name;
  const repo = _package.repository.url;
  const about =
    <p>
      <span>Augmented is an application for tracking fitness, nutrition, and general health. </span>
      <span>Application is ment to take in data directly from the user, as well as consume data from </span>
      <span>third party applications like FitBits or Apple Watches.</span>
    </p>;
  const contact =
    <Fragment>
      <p>Application creator and maintainer: Cameron Dziurgot.</p>
      <p>Email: <a href={`mailto:${email}`} target="_">{email}</a></p>
      <p>GitHub: <a href={repo} target="_">Augmented Frontend</a></p>
    </Fragment>;
  const contribute =
    <p>
      <span>To contribute to the application code base, create a Pull Request on the </span>
      <a href={repo} target="_">Augmented Frontend GitHub </a>
      <span>page.</span>
    </p>;
  const issue =
    <Fragment>
      <p>There are two ways to report an issue.</p>
      <p>
        <span>One is through GitHub, by posting a new issue on the </span>
        <a href={`${repo}/issues`} target="_">issues page </a>
        <span>of the Augmented-Frontend repository.</span>
      </p>
      <p>
        <span>The other way is through emailing </span>
        <a href={`mailto:${email}`} target="_">{`${name} `}</a>
        <span>directly with the issue.</span>
      </p>
    </Fragment>;

  const title = 'Help';
  const tabNames = ['About', 'Contact', 'Contribute', 'Report an issue'];
  const tabPanels = [about, contact, contribute, issue];
  return (
    <Page tabNames={tabNames}
      tabPanels={tabPanels}
      title={title}
    />);
};

export default help;
