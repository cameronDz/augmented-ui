import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { RequestTokenDialog } from '../../auth';

const propTypes = { isSecuredUser: PropTypes.bool };
const AuthenticateButton = ({ isSecuredUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Button onClick={() => setIsOpen(true)} variant="outlined">
        {isSecuredUser ? 'Sign out' : 'Sign in'}
      </Button>
      <RequestTokenDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Fragment>
  );
};

AuthenticateButton.propTypes = propTypes;
export default AuthenticateButton;
