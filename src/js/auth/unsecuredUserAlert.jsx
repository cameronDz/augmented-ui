import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';

const message = 'Unauthorized - must sign in to continue actions!';
const propTypes = { isSecured: PropTypes.bool };
const UnsecuredUserAlert = ({ isSecured }) => {
  return (
    <Fragment>
      {!isSecured && <Alert severity="error">{message}</Alert>}
    </Fragment>
  );
};

UnsecuredUserAlert.propTypes = propTypes;
export default UnsecuredUserAlert;
