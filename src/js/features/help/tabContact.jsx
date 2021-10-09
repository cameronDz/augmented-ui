import React, { Fragment } from 'react';
import _package from '../../../../package.json';

const email = _package.author.email || '';
const TabContact = () => {
  return (
    <Fragment>
      <p>Application creator and maintainer: {_package.author.name || ''}.</p>
      <p>
        <spane>Email: </spane>
        <a href={`mailto:${email}`} target="_">{email}</a>
      </p>
      <p>
        <spane>GitHub: </spane>
        <a href={_package.repository.url || ''} target="_">Augmented Frontend</a>
      </p>
    </Fragment>);
};

export default TabContact;
