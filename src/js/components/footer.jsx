import React from 'react';
import '../../css/footer.css';
import _package from '../../../package.json';

const footer = () => {
  const homepageUrl = _package.author.url;
  const repositoryUrl = _package.repository.url;
  const displayVersion = `v${_package.version}`;
  const name = _package.author.name;
  const title = 'Augmented';

  return (
    <footer className="footer footer-container is-slim">
      <p className="footer-verbiage">
        <span className="app-title">{title}{displayVersion}</span>
        <span>. Created by </span>
        <a href={homepageUrl} target="_">{name}</a>
        <span>. Repository on </span>
        <a href={repositoryUrl} target="_">GitHub</a>
        <span>.</span>
      </p>
    </footer>);
};

export default footer;
