import React, { Component } from 'react';
import '../../styles/css/footer.css';

const footer = () => {
  const githubIo = 'https://cameronDz.github.io';
  const githubRepo = 'https://github.com/cameronDz/augmented-frontend';
  const mitUrl = 'http://opensource.org/licenses/mit-license.php';

  return (
    <footer className="footer is-slim">
      <div>
        <p>
          <strong>Augmented</strong> was created by <a href={githubIo}>Cameron Dziurgot</a>.
          The source code can be found on <a href={githubRepo}>GitHub</a>, under a <a href={mitUrl}>MIT</a> license.
        </p>
      </div>
    </footer>);
  };

export default footer;
