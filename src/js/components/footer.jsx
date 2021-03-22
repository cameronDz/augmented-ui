import React from 'react';
import '../../css/footer.css';
import * as _package from '../../../package.json';

const footer = () => {
  const homepageUrl = 'https://www.camdziurgot.io';
  const repositoryUrl = 'https://github.com/cameronDz/augmented-frontend';
  const packageVersion = !!_package && _package.version ? _package.version : '';
  const displayVersion = packageVersion ? ', v' + packageVersion : '';
  const title = 'Augmented';

  return (
    <footer className="footer footer-container is-slim">
      <p>
        <span className="app-title">{title}{displayVersion}</span>
        . Created by
        <a href={homepageUrl}> Cam Dziurgot</a>
        . Repository on
        <a href={repositoryUrl}> GitHub</a>
        .
      </p>
    </footer>);
};

export default footer;
