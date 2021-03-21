import React from 'react';
import '../../css/footer.css';
import * as _package from '../../../package.json';

const footer = () => {
  const githubIo = 'https://cameronDz.github.io';
  const githubRepo = 'https://github.com/cameronDz/augmented-frontend';
  const mitUrl = 'http://opensource.org/licenses/mit-license.php';
  const packageVersion = !!_package && _package.version ? _package.version : '';
  const displayVersion = packageVersion ? ', v' + packageVersion + ',' : '';

  return (
    <footer className="footer is-slim">
      <div>
        <p>
          <strong>Augmented</strong>
          <span>{displayVersion} </span>
          was created by
          <a href={githubIo}> Cam Dziurgot</a>.
          Repository on
          <a href={githubRepo}> GitHub</a>
          , under a
          <a href={mitUrl}> MIT </a>
          license.
        </p>
      </div>
    </footer>);
};

export default footer;
