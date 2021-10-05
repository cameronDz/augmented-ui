import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { RequestTokenDialog } from '../../auth';

const propTypes = {
  handleAuthClick: PropTypes.func,
  isSecuredUser: PropTypes.bool
};
const AuthenticateButton = ({ isSecuredUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="buttons">
        <div className="button is-light" onClick={() => setIsOpen(true)}>
          <strong>
            {isSecuredUser ? 'Sign out' : 'Sign in'}
          </strong>
        </div>
      </div>
      <RequestTokenDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Fragment>
  );
};

AuthenticateButton.propTypes = propTypes;
export default AuthenticateButton;
