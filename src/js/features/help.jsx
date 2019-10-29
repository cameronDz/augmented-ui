import React, { Fragment } from 'react';
import Page from '../components/page';

const help = () => {
  const about =
    <p>Augmented is an application for tracking fitness, nutrition, and general health.
      Application is ment to take in data directly from the user, as well as consume data from
      third party applications like FitBits or Apple Watches.
    </p>;
  const contact =
    <Fragment>
      <p>Application creator and maintainer: Cameron Dziurgot.</p>
      <p>Email: <a href="mailto:camerondziurgot@gmail.com">camerondziurgot@gmail.com</a></p>
      <p>GitHub: <a href="https://www.github.com/cameronDz/augmented-frontend">Augmented Frontend</a></p>
    </Fragment>;
  const contribute =
    <p>To contribute to the application code base, create a Pull Request on the
      <a href="https://www.github.com/cameronDz/augmented-frontend">Augmented Frontend GitHub</a>
      page.
    </p>;
  const issue =
    <Fragment>
      <p>There are two ways to report an issue.</p>
      <p>One is through GitHub, by posting a new issue on the
        <a href="https://www.github.com/cameronDz/augmented-frontend/issues">issues page</a>
        of the Augmented-Frontend repository.
      </p>
      <p>The other way is through emailing <a href="mailto:camerondziurgot@gmail.com">Cameron Dziurgot</a>
        directly with the issue.
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
