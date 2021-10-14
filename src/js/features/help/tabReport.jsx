import React, { Fragment } from 'react';
import _package from '../../../../package.json';

const TabReport = () => {
  return (
    <Fragment>
      <p>There are two ways to report an issue.</p>
      <ul>
        <li>
          <span>Posting a new issue on the </span>
          <a href={`${_package.repository.url || ''}/issues`} target="_">
            issues page{' '}
          </a>
          <span>of the augmented-ui repository on GitHub.</span>
        </li>
        <li>
          <span>Emailing </span>
          <a href={`mailto:${_package.author.email || ''}`} target="_">
            {_package.author.name || ''}
          </a>
          <span>, the maintainer, directly with the issue.</span>
        </li>
      </ul>
    </Fragment>
  );
};

export default TabReport;
