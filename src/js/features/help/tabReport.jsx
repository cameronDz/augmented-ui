import React, { Fragment } from 'react';
import _package from '../../../../package.json';

const TabReport = () => {
  return (
    <Fragment>
      <p>There are two ways to report an issue.</p>
      <p>
        <span>One is through GitHub, by posting a new issue on the </span>
        <a href={`${_package.repository.url || ''}/issues`} target="_">issues page </a>
        <span>of the Augmented-Frontend repository.</span>
      </p>
      <p>
        <span>The other way is through emailing </span>
        <a href={`mailto:${_package.author.email || ''}`} target="_">
          {`${_package.author.name || ''} `}
        </a>
        <span>directly with the issue.</span>
      </p>
    </Fragment>);
};

export default TabReport;
